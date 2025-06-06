import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-full w-full pt-20 bg-white pb-4 ">
      <div className="container">
        <div className=" flex flex-col md:flex-row  items-center h-full pt-6 px-3">
          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center space-y-6 text-center ">
            <h1 className="text-3xl md:text-5xl  text-orange-600 font-bold leading-tight  drop-shadow-md italic">
              <span className="text-green-700">Cols</span>-nutraceutical
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold  text-orange-600">
              Your surest supplement vendor
            </h2>

            <div className="pt-4">
              <Link
                to={"/products"}
                className="px-4 py-2 text-lg font-semibold text-white bg-green-800  rounded-md shadow-md hover:bg-green-600 transition italic"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full flex justify-center items-center pt-4 ">
            <img
              src="/hero.svg"
              loading="lazy"
              alt="Natural flower"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
