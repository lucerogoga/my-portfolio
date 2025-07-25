import React from "react";
import StarIcon from "./StarIcon";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <a href="/" className="text-2xl text-white hover:text-blue">
        Lucerogoga
      </a>
      <StarIcon className="h-6 w-6 text-blue" />
    </div>
  );
};

export default Logo;
