import React from "react";
import StarIcon from "../svg/StarIcon";
import Title from "../Title";

const experienceList = [
  { years: "2022 - 2024", role: "Front-End Developer", enterprise: "Promart" },
  {
    years: "2021-2022",
    role: "Front-End Developer",
    enterprise: "Laboratoria",
  },
  { years: "2020 - 2021", role: "TI Support", enterprise: "Ocean SRL" },
  { years: "2018", role: "TI Support", enterprise: "GL TRACKER" },
];

const MyExperience = () => {
  return (
    <>
      <Title text="my experience" />
      <div className="grid grid-cols-1 gap-4 pt-4 lg:grid-cols-2">
        {experienceList.map((exp, idx) => (
          <div key={idx} className="rounded bg-gray p-4">
            <p className="font-jua text-blue">{exp.years}</p>
            <p className="font-jua">{exp.role}</p>
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

export default MyExperience;
