import React from "react";
import StarIcon from "./svg/StarIcon";

interface IService {
  id: String;
  title: String;
  description: String;
}

const ServiceSection = (service: IService) => {
  const { id, title, description } = service;
  return (
    <div className="relative flex flex-col gap-4 border-b-2 border-white">
      <StarIcon className="absolute -top-4 left-16 h-8 w-8 text-blue" />
      <p className="font-jua text-6xl">{id}</p>
      <p className="font-jua text-4xl">{title}</p>
      <p className="pb-8">{description}</p>
    </div>
  );
};

export default ServiceSection;
