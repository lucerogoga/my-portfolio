import React from "react";
import StarIcon from "../svg/StarIcon";
import Title from "../Title";

const educationList = [
  {
    years: "2021-2022",
    role: "Front-End Developer",
    enterprise: "Laboratoria",
  },
  {
    years: "2013 - 2018",
    role: "Ingeniería de Sistemas",
    enterprise: "Universidad Privada de Tacna",
  },
];
const MyEducation = () => {
  return (
    <>
      <Title text="my education" />
      <div className="grid grid-cols-1 gap-4 pt-4 lg:grid-cols-2">
        {educationList.map((exp, idx) => (
          <div key={idx} className="rounded bg-gray p-4">
            <p className="font-poppins text-blue">{exp.years}</p>
            <p className="font-poppins">{exp.role}</p>
            <p className="flex items-center gap-2 pt-4">
              <StarIcon className="h-4 w-4 text-blue" />
              <p>{exp.enterprise}</p>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyEducation;
