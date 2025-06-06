import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ name, imgUrl, id }) => {
  const [isClicked, setIsClicked] = useState(false);
  const phoneNumber = "+2348065057485"; // Replace with your WhatsApp number
  const encodedMessage = encodeURIComponent(
    `I want to buy ${name}. View the image here: ${imgUrl}`
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return (
    <div
      to={"/"}
      className=" cursor-pointer border-2  shadow-2xl rounded-lg overflow-hidden flex  justify-center items-center relative  "
    >
      <div
        onClick={() => setIsClicked((prev) => !prev)}
        className="absolute right-2 top-2 border border-orange-700 p-1 rounded-full"
      >
        {isClicked ? (
          <FaHeart size={25} color="red" />
        ) : (
          <CiHeart size={30} color="green" />
        )}
      </div>
      <div className=" w-full h-full bg-white rounded-lg overflow-hidden">
        <p className="pt-3 pb-1 text-sm text-center font-bold text-orange-700">
          {name}
        </p>
        <div className="overflow-hidden flex justify-center ">
          <img
            src={imgUrl}
            width={200}
            height={200}
            alt=""
            className="hover:scale-110 transition ease-in-out   "
          />
        </div>

        <div className=" absolute left-1 bottom-2 pr-2 ">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white  italic px-2 py-1 rounded-lg bg-green-600 hover:bg-green-400 shadow-lg transition duration-300 ease-in-out cursor-pointer"
          >
            Buy now
          </a>
        </div>
        <div className=" pl-2 absolute right-1 bottom-2">
          <Link
            to={`/product-details/${id}`}
            onClick={() => scrollTo(0, 0)}
            // onClick={() => scrollTo(0, 0)}
            className="text-sm italic text-white px-2 py-1 rounded-lg bg-orange-600 hover:bg-orange-400 shadow-lg transition duration-300 ease-in-out cursor-pointer"
          >
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
