import React from "react";

const Contact = () => {
  return (
    <section className="pt-20 pb-5 h-full md:h-screen w-full flex justify-center items-center bg-gradient-to-tr from-blue-50 to-white">
      <div className="container">
        <div className="w-full h-full">
          <h1 className="text-lg text-center  font-extrabold py-5">
            Contact Us
          </h1>
          <div className="">
            <p className="text-center font-semibold">
              At Cols-Nutraceutical, we value your inquiries and are here to
              assist you with any questions about our products, orders, or
              general wellness advice.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-5 pt-5">
            <p className="font-bold text-center">
              <span className="font-semibold text-orange-500">📍 Location</span>
              : Festac Town, Lagos State, Nigeria.
            </p>
            <p className="font-bold text-center">
              <span className="font-semibold text-orange-900">🌐 Website</span>:
              https://cols-nutraceutical.onrender.com
            </p>
            <p className="font-bold text-center">
              <span className="font-semibold text-gray-900">✉️ Email</span>:
              kenechukwu256@gmail.com
            </p>
            <p className="font-bold text-center">
              <span className="font-semibold text-green-950">📞 Phone</span>:
              +2348065057485
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
