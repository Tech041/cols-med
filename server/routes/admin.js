import { Router } from "express";
import adminLogin from "../controllers/admin.auth.js";
const adminRouter = Router();
adminRouter.post("/login", adminLogin);
export default adminRouter
