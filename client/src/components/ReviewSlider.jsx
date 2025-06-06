import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const slides = [
  {
    id: 1,
    review: "Fantastic supplements! I feel more energized every day.",
    name: "Hillary",
  },
  {
    id: 2,
    review: "Highly effective products. My workouts have improved!",
    name: " Engr. Obinna",
  },
  {
    id: 3,
    review: "Quality ingredients, noticeable health benefits!",
    name: "Mr Michael",
  },
  {
    id: 4,
    review: "Great customer service and reliable supplements.",
    name: "Dr. John",
  },
  {
    id: 5,
    review: "My immune system feels stronger thanks to these!",
    name: "Mrs Abiodun",
  },
];

const ReviewSlider = () => {
  const [index, setIndex] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <section className="bg-gradient-to-tr from-green-50 to-yellow-50 py-5">
      <div className="container">
        <div className="">
          <h1 className="capitalize text-2xl md:text-3xl font-semibold text-orange-800 text-center">
            Our clients reviews
          </h1>
          <div className="relative w-full max-w-md mx-auto h-40 flex items-center justify-center overflow-hidden  p-4">
            {/* Left Button */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 text-orange-700 rounded-full text-lg"
            >
              <FaChevronLeft />
            </button>

            {/* Review Content */}
            <div className="text-center">
              <p className="text-gray-700 text-lg max-w-sm">
                {slides[index].review}
              </p>
              <h3 className="mt-2 text-gray-900 font-bold">
                {slides[index].name}
              </h3>
            </div>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-orange-700 rounded-full text-lg"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
