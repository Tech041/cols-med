import React from "react";
import Accordion from "./Accordion";
const accordionContent = [
  {
    id: 1,
    title: "Who is Cols-nutraceutical?",
    description:
      "Cols-nutracuetical is an online supplement store, that one place where you can get all your health supplement and other therapeutic counselling",
  },
  {
    id: 2,
    title: "How can I get in contact with them?",
    description: "By clicking any of our social media handles",
  },
  {
    id: 3,
    title: "How can I know more about a supplement I want to purchase?",
    description:
      "Each supplement listed has elaborated uses, just  by clicking on see deatils or you can chat our AI assistance.",
  },
  {
    id: 4,
    title: "What is the process for buying?",
    description:
      "Just by clicking buy now, you will get in contact with the vendor",
  },
  {
    id: 5,
    title: "Do they do home delivery?",
    description:
      "Absolutely yes, we deliver nationwide. Either in wholesale or retail manner",
  },
];

const FrequentQuestions = () => {
  return (
    <section className="pt-10 py-5 bg-white mt-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center  gap-4">
          <div className="flex-1">
            <h1 className="capitalize text-2xl md:text-3xl font-semibold text-green-900  py-3 px-2">
              Frequently asked questions.
            </h1>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500 ">
              Our products are tested and trusted. We offer you high quality products at very affordable price. Don&apos;t miss out on this amazing opportunity.
            </p>
          </div>
        </div>
        {/* Frequently asked questions */}
        <div className="">
          {accordionContent?.map((question) => (
            <Accordion
              key={question.id}
              title={question.title}
              description={question.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentQuestions;
