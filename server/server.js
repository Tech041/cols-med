import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import helmet from "helmet";
import connectCloudinary from "./config/cloudinary.js";
import listingRouter from "./routes/product.js";
import adminRouter from "./routes/admin.js";

const app = express();
// middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());

// DB Connection
connectDB();
connectCloudinary();
const port = process.env.Port || 8000;

// Routes
app.use("/api", listingRouter);
app.use("/api", adminRouter);
app.use("/", (req, res) => {
  return res.send("API IS WORKING");
});

app.listen(port, () => {
  console.log("Server running on PORT", port);
});
