import React from "react";
import { useParams } from "react-router-dom";

import ProductItem from "../../components/ProductItem";
import apiRequest from "../../utils/apiRequest";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch single list
  const fetchSingleListing = async (id) => {
    setLoading(true);
    try {
      const res = await apiRequest.post(`/api/single-product/${id}`);
      if (res.data.success) {
        setProduct(res.data.singleProduct);
        console.log("Single product", res.data.singleProduct);

        setLoading(false);
      } else {
        console.log("Error fetchiing single product", res.data.message);
      }
    } catch (error) {
      console.log("Error fetching single product", error);
    }
  };
  useEffect(() => {
    fetchSingleListing(id);
  }, [id]);

  return (
    <section className="pt-20 h-full w-full">
      <div className="container">
        <div className="w-full h-full">
          {loading ? (
            <Spinner />
          ) : (
            product && (
              <ProductItem
                key={product._id}
                name={product.name}
                description={product.description}
                imgUrl={product.imgUrl}
                id={product._id}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
