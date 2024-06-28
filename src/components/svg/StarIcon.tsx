import React from "react";

interface IStarIcon {
  className: String;
}

const StarIcon = ({ className }: IStarIcon) => {
  return (
    <svg
      className={`${className}`}
      width="57"
      height="80"
      viewBox="0 0 57 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3229 30.9897C15.5076 38.7394 2 40.3918 2 40.3918C2 40.3918 15.4736 41.4535 21.3229 49.0103C27.6302 57.1587 29.0521 78 29.0521 78C29.0521 78 28.815 57.4221 34.5729 49.0103C40.3718 40.5386 55 40.3918 55 40.3918C55 40.3918 40.3296 39.6445 34.5729 30.9897C28.9006 22.4616 29.0521 2 29.0521 2C29.0521 2 27.5406 22.7037 21.3229 30.9897Z"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default StarIcon;
