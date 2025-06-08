import jwt from "jsonwebtoken";
// Route for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ success: false, mesaage: "Incomplete credentials" });
    }
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      return res.json({ success: true, token, message: "Login successful" });
    } else {
      return res.json({ success: false, message: "unauthorized access" });
    }
  } catch (error) {
    console.log("Error logging  in  admin ", error);
    res.json({ success: false, message: error.mesaage });
  }
};
export default adminLogin;
