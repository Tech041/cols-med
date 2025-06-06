// import EditListing from "./EditListing";

import { Link } from "react-router-dom";

const ProductItem = ({ name, description, imgUrl }) => {
  const phoneNumber = "+2348030507512"; // Replace with your WhatsApp number
  const encodedMessage = encodeURIComponent(
    `I want to buy ${name}. View the image here: ${imgUrl}`
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  return (
    <div className="w-full h-full pb-10 relative ">
      <h1 className="text-3xl font-bold black text-center text-white py-2 bg-gradient-to-tl from-orange-400 to-green-700 mt-5">
        Product Details
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2  mt-6  ">
        <div className="flex-1 h-full w-full  flex flex-col justify-center items-center gap-1 ">
          <div className="h-full w-[70%]">
            <img src={imgUrl} alt="" className="w-full h-full object-contain" />
          </div>{" "}
        </div>
        <div className="flex-1">
          <div className="px-4">
            <p className=" text-lg font-semibold text-blue-600 text-center gap-3 py-3">
              <span className="pr-3">{name}</span>
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
          </div>
        </div>
      </div>
      {/* actions */}
      {/* <div className="flex justify-center items-center gap-3 my-4">
        <button
          onClick={() => {
            setIsEditing(true), scrollTo(0, 0);
          }}
          className="px-3 py-1 bg-gradient-to-tr from-blue-600 to-blue-300 rounded-lg"
        >
          Edit Listing
        </button>
        <button
          onClick={() => handleDeleteList(id)}
          className="px-3 py-1 bg-gradient-to-tr from-red-600 to-red-300 rounded-lg"
        >
          Delete Listing
        </button>
      </div> */}
    </div>
  );
};

export default ProductItem;
