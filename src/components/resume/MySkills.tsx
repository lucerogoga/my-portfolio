import React from "react";
import Title from "../Title";

const skillIcons = [
  { src: "./src/assets/icon-react.svg", alt: "icon-react" },
  { src: "./src/assets/icon-vue.svg", alt: "icon-vue" },
  { src: "./src/assets/icon-ts.svg", alt: "icon-ts" },
  { src: "./src/assets/icon-next.svg", alt: "icon-next" },
  { src: "./src/assets/icon-js.svg", alt: "icon-js" },
  { src: "./src/assets/icon-html.svg", alt: "icon-html" },
  { src: "./src/assets/icon-css.svg", alt: "icon-css" },
  { src: "./src/assets/icon-figma.svg", alt: "icon-figma" },
];

const MySkills = () => {
  return (
    <div>
      <Title text="my skills" />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {skillIcons.map((skill, idx) => (
          <div
            key={idx}
            className="bg-gray flex items-center justify-center rounded p-8 hover:bg-blue"
          >
            <img src={skill.src} alt={skill.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
