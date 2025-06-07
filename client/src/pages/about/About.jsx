import React from "react";

const About = () => {
  return (
    <section className="pt-20 h-full md:h-screen pb-5 w-full flex justify-center items-center bg-gradient-to-tl from-green-50 to-white ">
      <div className="container">
        <h1 className="text-xl font-extrabold flex items-center justify-center gap-2 py-5 italic">
          <span className="">About</span>{" "}
          <span className="text-green-700">Cols-nutraceutical</span>
        </h1>
        <div className="flex flex-col items-center  justify-center gap-4 h-full w-full font-semibold">
          <p className="">
            Welcome to Cols-Nutraceutical, your trusted source for high-quality
            supplements designed to support your health and well-being. Our
            commitment is to provide scientifically formulated products that
            enhance vitality, boost immunity, and promote overall wellness.
          </p>

          <p className="">
            At Cols-Nutraceutical, we prioritize purity, effectiveness, and
            transparency. Every supplement is crafted with premium ingredients,
            backed by research, and rigorously tested to meet the highest
            standards. Whether you're looking for daily nutritional support or
            targeted health solutions, we've got you covered.
          </p>
          <p className="">
            Experience the power of smart nutrition with
            Cols-Nutraceutical—because your health is our priority.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
