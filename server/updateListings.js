import mongoose from "mongoose";
import Listing from "./models/listing.model.js"; // Adjust path as needed

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit process to prevent execution of updateListings()
  }
};

const updateListings = async () => {
  try {
    await Listing.updateMany({}, { $set: { inStock: true } });
    console.log("All listings updated successfully!");
  } catch (error) {
    console.error("Error updating listings:", error);
  } finally {
    mongoose.connection.close();
  }
};

const run = async () => {
  await connectDB();
  await updateListings();
};

run();