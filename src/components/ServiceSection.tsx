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
    <div className="flex flex-col gap-4 border-b-2 border-white">
      <div className="flex items-center justify-center gap-8">
        <StarIcon className="h-20 w-20 text-blue" />
        <div>
          <p className="font-jua text-4xl">{title}</p>
          <p className="pb-8">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
