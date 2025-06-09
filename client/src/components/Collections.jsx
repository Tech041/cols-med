import React from "react";

import ProductCard from "./Productcard";
import Button from "./Button";
import Spinner from "./Spinner";

const Collections = ({ listing, loading }) => {
  return (
    <section className="bg-white h-full w-full">
      <div className="container">
        <div className="">
          <h1 className="text-3xl md:text-4xl font-bold text-center pb-3 text-green-900">
            <span className="text-orange-700"> New</span> Arrivals
          </h1>
          <div className="flex flex-col md:flex-row  items-center gap-4 mt-5">
            <div className="flex-1">
              <h3 className="text-xl font-semibold capitalize text-gray-700 text-center">
                shop now and fuel your body with the best!
              </h3>{" "}
            </div>
            <div className="flex-1">
              <h4 className="text-gray-600 text-sm">
                Whether you are looking to strengthen your immune system,enhance
                your energy level, or promote overall wellness, we&apos;ve got
                you covered.
              </h4>
            </div>
          </div>
        </div>
        {/* collections */}
        {loading ? (
          <Spinner />
        ) : (
          <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 pt-5">
            {listing?.map((item) => (
              <ProductCard
                key={item._id}
                imgUrl={item.imgUrl}
                name={item.name}
                id={item._id}
                inStock={item.inStock}
              />
            ))}
          </div>
        )}

        <div className="pt-4 flex items-center justify-center">
          <Button text={"View all"} />
        </div>
      </div>
    </section>
  );
};

export default Collections;
