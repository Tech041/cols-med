import { Router } from "express";
import {
  fetchAllProduct,
  listProducts,
  singleProduct,
} from "../controllers/product.js";
import upload from "../middlewares/multer.js";
const listingRouter = Router();
listingRouter.post("/list-product", upload.single("image"), listProducts);
listingRouter.post("/single-product/:id", singleProduct);
listingRouter.get("/all-products", fetchAllProduct);
export default listingRouter;
