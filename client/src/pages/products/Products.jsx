import React from "react";
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useEffect } from "react";
import ProductCard from "../../components/Productcard";
import Spinner from "../../components/Spinner";
import Search from "../../components/Search";

const Products = ({ listing }) => {
  const { search, setSearch } = useContext(AppContext);
  const [showSearch, setShowSearch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [listed, setListed] = useState([]);

  console.log("ALL listing is ", listing);

  const filterProperty = async () => {
    let productCopy = listing.slice();
    if (search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setListed(productCopy);
    console.log("Listed", listed);

    setIsLoading(true);
    // setListed(listing);
    setIsLoading(false);
  };
  useEffect(() => {
    filterProperty();
  }, [search, listing]);
  return (
    <section className="pt-20 h-full w-full mb-10">
      <div className="container">
        <h1 className="text-3xl font-bold black text-center text-white py-2 bg-gradient-to-tl from-orange-400 to-green-700 mt-5">
          All Products
        </h1>
        <div className="w-full h-full flex items-center justify-center gap-3 mt-5">
          {showSearch && <Search onSearch={setSearch} />}
          <span
            onClick={() => setShowSearch(!showSearch)}
            className="cursor-pointer text-green-700 italic"
          >
            {showSearch ? (
              <IoMdClose size={20} color="red" />
            ) : (
              <GiHamburgerMenu size={20} color=" black" />
            )}
          </span>
        </div>{" "}
        <div className="h-full w-full">
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ">
              {listed?.map((item) => (
                <ProductCard key={item._id} id={item._id} name={item.name} imgUrl={item.imgUrl} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
