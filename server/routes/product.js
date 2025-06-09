import { Router } from "express";
import {
  checkStock,
  deleteList,
  editListing,
  fetchAllProduct,
  listProducts,
  singleProduct,
} from "../controllers/product.js";
import upload from "../middlewares/multer.js";
import adminAuth from "../middlewares/admin.js";
const listingRouter = Router();
listingRouter.post("/list-product", upload.single("image"), listProducts);
listingRouter.post("/single-product/:id", singleProduct);
listingRouter.get("/all-products", fetchAllProduct);
listingRouter.post("/edit-listing", adminAuth, editListing);
listingRouter.delete("/delete-listing/:id", adminAuth, deleteList);
listingRouter.post("/stock-level/:id", adminAuth, checkStock);

export default listingRouter;
