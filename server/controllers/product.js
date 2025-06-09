import Listing from "../models/listing.model.js";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

export const listProducts = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.json({
        success: false,
        message: "Incomplete data submission",
      });
    }

    // Check if a file has been uploaded
    if (!req.file) {
      return res.json({
        success: false,
        message: "No file uploaded",
      });
    }

    // File upload

    const uploadFromBuffer = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { resource_type: "image" },
          (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          }
        );
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });
    };

    // Usage:
    const result = await uploadFromBuffer(req.file.buffer);
    const imageUrl = result.secure_url;

    const product = await Listing.create({
      name,
      description,
      imgUrl: imageUrl,
    });
    return res.json({
      success: true,
      message: "List created successfully",
      product,
    });
  } catch (error) {
    console.log("Error from product listing controller", error);
    return res.json({ success: false, message: error.message });
  }
};

export const fetchAllProduct = async (req, res) => {
  try {
    const allProducts = await Listing.find({});
    return res.json({ success: true, allProducts });
  } catch (error) {
    console.log("Error from fetching all product controller", error);
    return res.json({ success: false, message: error.message });
  }
};

export const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.json({ success: false, message: "No match found" });
    }
    const singleProduct = await Listing.findById(id);
    return res.json({ success: true, message: "Product found", singleProduct });
  } catch (error) {
    console.log("Error from single product controller", error);
    return res.json({ success: false, message: error.message });
  }
};

// Edit product

export const editListing = async (req, res) => {
  try {
    const { id, newDesc, newName } = req.body;
    if (!id || !newDesc || !newName) {
      return res.json({ success: false, message: "All field required" });
    }

    await Listing.findByIdAndUpdate(
      id,
      { description: newDesc, name: newName },
      { new: true }
    );

    return res.json({
      success: true,
      message: "Edited successfully",
    });
  } catch (error) {
    console.log("Error editing list", error);
    return res.json({ message: error });
  }
};

// Delete Listing

export const deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    return res.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.log("Error deleting listing", error);
  }
};

// checking stock level
export const checkStock = async (req, res) => {
  try {
    const { id } = req.params;
    const { response } = req.body;

    // Update stock status in the database
    const updatedListing = await Listing.findByIdAndUpdate(
      id,
      { inStock: response },
      { new: true }
    );

    res.json({
      success: true,
      message: "Stock status updated",
      updatedListing,
    });
  } catch (error) {
    console.error("Error updating stock level:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
