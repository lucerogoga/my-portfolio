import React from "react";
import Title from "./components/Title";
import { skillIcons } from "./constans/skills.constans";

const Skills = () => {
  return (
    <section id="skills" className="section gap-4 lg:h-svh lg:gap-16">
      <Title text="my skills" />
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-6">
        {skillIcons.map((skill, idx) => (
          <div
            key={idx}
            className="group mb-4 flex flex-col items-center justify-center gap-8 rounded-3xl border-2 border-solid border-blue bg-gray p-8 transition hover:bg-blue hover:ease-in"
          >
            <img
              src={skill.src}
              alt={skill.alt}
              className="h-16 w-16 grayscale-[90%] group-hover:scale-125 group-hover:grayscale-0 group-hover:duration-300 group-hover:ease-in"
            />
            <p className="text-neutral-400 group-hover:text-white">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
