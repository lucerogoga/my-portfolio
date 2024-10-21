import React from "react";
import Title from "./components/Title";

const skillIcons = [
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-react.svg",
    alt: "icon-react",
    title: "React",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-vue.svg",
    alt: "icon-vue",
    title: "Vue",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-ts.svg",
    alt: "icon-ts",
    title: "Typescript",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-js.svg",
    alt: "icon-js",
    title: "JavaScript",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-redux.svg",
    alt: "icon-redux",
    title: "Redux",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-next.svg",
    alt: "icon-next",
    title: "Next",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-html.svg",
    alt: "icon-html",
    title: "HTML5",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-css.svg",
    alt: "icon-css",
    title: "CSS",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-tailwind.svg",
    alt: "icon-tailwind",
    title: "Tailwind",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-figma.svg",
    alt: "icon-figma",
    title: "Figma",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-git.svg",
    alt: "icon-git",
    title: "Git",
  },
  {
    src: "https://raw.githubusercontent.com/lucerogoga/my-portfolio/92a764aad499ba719bb9a9597b679a774eb31b3f/src/assets/icon-ai.svg",
    alt: "icon-ai",
    title: "Illustrator",
  },
];

const Skills = () => {
  return (
    <section id="resume" className="section gap-4 lg:gap-16">
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
