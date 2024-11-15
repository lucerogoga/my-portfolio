import React from "react";
import StarIcon from "./svg/StarIcon";

interface IButton {
  text: String;
  className: String;
}

const Button = ({ className, text }: IButton) => {
  return (
    <div className={`${className} `}>
      <button
        className={`border-bg-transparent group relative w-full rounded-full border-2 border-blue p-2 px-8 font-jua text-xl hover:bg-blue hover:text-white lg:w-fit`}
      >
        {text}
        <StarIcon className="absolute hidden text-blue opacity-0 group-hover:opacity-100 group-hover:transition group-hover:duration-300 group-hover:ease-in-out lg:-right-8 lg:top-8 lg:block lg:h-10 lg:w-10" />
        <StarIcon className="absolute hidden text-blue opacity-0 group-hover:opacity-100 group-hover:transition group-hover:duration-300 group-hover:ease-in-out lg:-left-6 lg:-top-8 lg:block lg:h-8 lg:w-8" />
      </button>
    </div>
  );
};

export default Button;
