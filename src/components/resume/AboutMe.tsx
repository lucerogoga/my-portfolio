import React from "react";
import Title from "../Title";

const aboutMe = {
  name: "Lucero Gonzales",
  experience: "+3 years",
  based: "Perú",
  nationality: "Peruvian",
  freelance: "Available",
  phone: "+51 901868498",
  email: "lucerogoga@icloud.com",
  languages: "English, Spanish",
};

const AboutMe = () => {
  return (
    <div>
      <Title text="about me" />
      <p className="py-4">
        As a Frontend Development my aspiration is to leverage my knowledge to
        create innovative, impactful products that serve and support others.
      </p>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {Object.keys(aboutMe).map((elm: string) => (
          <p>
            <samp>{elm}: </samp>
            <span className="font-bold">
              {aboutMe[elm as keyof typeof aboutMe]}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
