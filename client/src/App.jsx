import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/productDetails.jsx/ProductDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Gemini from "./pages/gemini/Gemini";
import Post from "./pages/post/Post";
import { ToastContainer } from "react-toastify";
import Login from "./pages/admin/Login";

const App = () => {
  return (
    <div className="h-full w-full">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/post" element={<Post />} />
        <Route path="/chatbot" element={<Gemini />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
