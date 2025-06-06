import React from "react";
import { LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const Button = ({ text }) => {
  return (
    <Link
      to={"/products"}
      onClick={() => scrollTo(0, 0)}
      className="bg-orange-700 px-4 py-1  text-white text-sm rounded-xl flex items-center justify-center gap-2"
    >
      <span className="">{text}</span> <LuMoveRight size={20} />
    </Link>
  );
};

export default Button;
