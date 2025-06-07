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
import apiRequest from "../../utils/apiRequest";

const Products = () => {
  const { search, setSearch } = useContext(AppContext);
  const [showSearch, setShowSearch] = useState(true);
  const [listed, setListed] = useState([]);
  // for fetching and saving products
  const [loading, setLoading] = useState(false);
  const { listing, setListing } = useContext(AppContext);

  // To fetch product on background

  const fetchAllListing = async () => {
    setLoading(true);
    try {
      const res = await apiRequest.get("/api/all-products");
      if (res.data.success) {
        setListing(res.data.allProducts);
        setLoading(false);
      } else {
        console.log("Error fetching all products", res.data.message);
      }
    } catch (error) {
      console.log("Error fetching all list", error.message);
    }
  };
  useEffect(() => {
    fetchAllListing();
  }, []);


  const filterProperty = async () => {
    let productCopy = listing.slice();
    if (search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setListed(productCopy);
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
          {loading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ">
              {listed?.map((item) => (
                <ProductCard
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  imgUrl={item.imgUrl}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
