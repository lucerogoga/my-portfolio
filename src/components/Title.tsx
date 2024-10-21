import React from "react";
import StarIcon from "./svg/StarIcon";

interface IText {
  text: String;
  color?: String;
  startColor?: String;
}

const Title = ({ text, color, startColor = "text-blue" }: IText) => {
  return (
    <div className="relative w-fit self-center">
      <h1 className={`font-jua text-xl uppercase lg:text-4xl ${color}`}>
        {text}
      </h1>
      <StarIcon
        className={`absolute -right-8 -top-2 h-8 w-8 lg:-right-8 lg:-top-8 lg:h-10 lg:w-10 ${startColor}`}
      />
    </div>
  );
};

export default Title;
