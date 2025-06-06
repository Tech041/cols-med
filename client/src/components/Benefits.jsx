import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Benefits = () => {
  return (
    <section className="bg-gradient-to-tr from-green-100 to-yellow-50 mb-5 py-3">
      <div className="container">
        <h1 className="capitalize font-semibold text-xl text-orange-700 text-center pt-4">
          Benefits of supplements
        </h1>
        <div className="py-4 flex justify-center items-center font-semibold text-gray-700">
          <div className=" text-lg">
            <p className="py-1">
              Supplements help bridge dietary gaps, ensuring optimal nutrient
              levels for overall wellness.
            </p>
            <p className="py-1">
              Key vitamins and minerals strengthen the body's defense system
              against illnesses.
            </p>
            <p className="py-1">
              Certain supplements aid metabolism and improve energy levels for
              daily activities.
            </p>
            <p className="py-1">
              Probiotics and fiber supplements contribute to gut balance and
              digestive comfort.
            </p>
            <p className="py-1">
              Essential nutrients like omega-3s and B vitamins enhance cognitive
              function and focus.
            </p>
            <div className=" flex justify-center items-center pt-5">
              <Link
                onClick={() => scrollTo(0, 0)}
                to={"/chatbot"}
                className="text-white bg-gradient-to-tr from-green-900 to-yellow-900 px-3 py-1 rounded-xl text-sm italic"
              >
                Get more info!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
