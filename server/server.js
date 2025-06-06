import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import helmet from "helmet";
import connectCloudinary from "./config/cloudinary.js";
import listingRouter from "./routes/listing.route.js";

const allowedOrigins = ["http://localhost:3000", "https://cols-med.vercel.app"];

const app = express();
// middlewares
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(helmet());

// DB Connection
connectDB();
connectCloudinary();
const port = process.env.Port || 8000;

// Routes
app.use("/api", listingRouter);
app.use("/", (req, res) => {
  return res.send("API IS WORKING");
});

app.listen(port, () => {
  console.log("Server running on PORT", port);
});
