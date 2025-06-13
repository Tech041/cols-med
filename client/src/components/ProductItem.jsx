// import EditListing from "./EditListing";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EditListing from "./EditListing";
import { toast } from "react-toastify";
import apiRequest from "../utils/apiRequest";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const ProductItem = ({ name, description, imgUrl, id, inStock }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [response, setResponse] = useState(true);
  const { token } = useContext(AppContext);

  const navigate = useNavigate();
  // Handle editing
  const exitEditing = () => {
    setIsEditing(false);
    window.location.reload();
  };

  // Delete listing
  const handleDeleteList = async (id) => {
    const res = await apiRequest.delete(`/api/delete-listing/${id}`, {
      headers: { token },
    });
    if (res.data.success) {
      toast.success(res.data.message);
      navigate("/");
    } else {
      toast.error(res.data.message);
    }
  };

  // handling stock level

  const handleStockLevel = async () => {
    console.log("resposne to db is", response);
    const res = await apiRequest.post(
      `/api/stock-level/${id}`,
      { response },
      {
        headers: { token },
      }
    );
    if (res.data.success) {
      toast.success(res.data.message);
      window.location.reload();
    } else {
      toast.error(res.data.message);
    }
  };
  // Whatsapp message generator
  const phoneNumber = "+2348065057485"; // Replace with your WhatsApp number
  const encodedMessage = encodeURIComponent(
    `I want to buy ${name}. View the image here: ${imgUrl}`
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return (
    <div className="w-full h-full pb-10 relative ">
      {isEditing && (
        <EditListing
          exit={exitEditing}
          desc={description}
          id={id}
          name={name}
        />
      )}
      <h1 className="text-3xl font-bold black text-center text-white py-2 bg-gradient-to-tl from-orange-400 to-green-700 mt-5">
        Product Details
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2  mt-6  ">
        <div className="flex-1 h-full w-full  flex flex-col justify-center items-center gap-1 ">
          <div className="h-full w-[70%] flex flex-col justify-center items-center gap-2">
            <img src={imgUrl} width={200} height={200} alt="" className="" />
            <span
              className={`${
                inStock ? "text-green-700" : "text-red-700"
              } font-semibold capitalize`}
            >
              {inStock ? "In stock" : "Out of stock"}
            </span>
          </div>{" "}
        </div>
        <div className="flex-1">
          <div className="px-4">
            <p className=" text-lg font-semibold text-blue-600 text-center gap-3 py-3">
              <span className="pr-3 uppercase italic">{name}</span>
            </p>
            <p className="">{description}</p>
            <div className="py-3 mt-2 flex items-center justify-center">
              <Link
                onClick={() => scrollTo(0, 0)}
                to={"/chatbot"}
                className="text-sm italic text-white bg-orange-600 hover:bg-orange-400 px-3 py-1 rounded-lg"
              >
                More clinical insights here
              </Link>
            </div>
            {!token && (
              <div className="pt-4 flex items-center justify-center">
                <a
                  href={whatsappUrl}
                  className="text-sm text-white italic px-4 py-1 rounded-lg bg-green-600 hover:bg-green-400 shadow-lg transition duration-300 ease-in-out cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy now
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* actions  */}
      {token && (
        <>
          <div className="flex justify-center items-center gap-3 my-4">
            <button
              onClick={() => {
                setIsEditing(true), scrollTo(0, 0);
              }}
              className="px-3 py-1 bg-gradient-to-tr from-blue-600 to-blue-300 rounded-lg"
            >
              Edit Post
            </button>
            <button
              onClick={() => handleDeleteList(id)}
              className="px-3 py-1 bg-gradient-to-tr from-red-600 to-red-300 rounded-lg"
            >
              Delete Post
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 py-2">
            <button
              onClick={() => setResponse(false)}
              className=" bg-red-400 text-sm text-white px-3 py-1 rounded-xl"
            >
              Out of Stock
            </button>
            <button
              onClick={() => setResponse(true)}
              className=" bg-green-400 text-white text-sm px-3  py-1 rounded-xl"
            >
              In Stock
            </button>
          </div>
          <div className="flex justify-center items-center py-2">
            <button
              onClick={handleStockLevel}
              className="bg-blue-700 text-white text-sm px-3 py-1 rounded-lg "
            >
              Update Stock
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductItem;
