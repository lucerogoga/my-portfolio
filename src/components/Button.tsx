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
        className={`border-bg-transparent group relative w-full rounded-full border-6 border-blue p-2 px-8 font-jua text-xl lg:w-fit`}
      >
        {text}
        <StarIcon className="absolute -right-8 -top-2 h-8 w-8 text-blue opacity-0 group-hover:opacity-100 group-hover:transition group-hover:duration-300 group-hover:ease-in-out lg:-right-12 lg:top-8 lg:h-14 lg:w-14" />
      </button>
    </div>
  );
};

export default Button;
