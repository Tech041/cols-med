import React from "react";
import Hero from "../../components/Hero";
import Collections from "../../components/Collections";
import Benefits from "../../components/Benefits";
import FrequentQuestions from "../../components/FrequentQuestions";
import ReviewSlider from "../../components/ReviewSlider";
import Chat from "../../components/Chat";
import apiRequest from "../../utils/apiRequest";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useState } from "react";

const Home = () => {
  const { setAllListing, listing, setListing } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  // Fetch listing
  const fetchAllListing = async () => {
    setLoading(true);
    try {
      const res = await apiRequest.get("/api/all-products");
      if (res.data.success) {
        setAllListing(res.data.allProducts);
        setListing(res.data.allProducts.reverse().slice(0, 20));
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

  return (
    <section className="w-full h-full relative">
      <Hero />
      <Chat />
      <Benefits />
      <Collections listing={listing} loading={loading} />
      <FrequentQuestions />
      <ReviewSlider />
    </section>
  );
};

export default Home;
