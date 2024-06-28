import React from "react";
import Title from "./components/Title";

const projects = [
  {
    title: "WOOW PASTRY",
    dezcription:
      "Woow 🧁 is a real-time order management system designed to facilitate and improve the performance of a restaurant staff (administrator, waiter and head chef roles 👩‍💼💁👩‍🍳)",
    stack:
      "Stack: React, React Router, React Hooks, Material UI, Firebase as backend, Figma to prototype.",
    img: "./src/assets/img/project-1.png",
  },
  {
    title: "SOCIAL NETWORK",
    dezcription:
      "Woow 🧁 is a real-time order management system designed to facilitate and improve the performance of a restaurant staff (administrator, waiter and head chef roles 👩‍💼💁👩‍🍳)",
    stack:
      "Stack: React, React Router, React Hooks, Material UI, Firebase as backend, Figma to prototype.",
    img: "./src/assets/img/project-2.png",
  },
  {
    title: "POKEAPI",
    dezcription:
      "Woow 🧁 is a real-time order management system designed to facilitate and improve the performance of a restaurant staff (administrator, waiter and head chef roles 👩‍💼💁👩‍🍳)",
    stack:
      "Stack: React, React Router, React Hooks, Material UI, Firebase as backend, Figma to prototype.",
    img: "./src/assets/img/project-3.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <Title color="text-white" text="Projects"></Title>
      <div className="w-full justify-center overflow-y-hidden overflow-x-scroll lg:flex lg:self-center lg:overflow-visible">
        <ul className="flex w-max gap-6 lg:justify-center">
          {projects.map((project) => (
            <li className="list-project">
              <img
                className="w-48 rounded hover:shadow-xl lg:w-36"
                src={project.img}
                alt={project.title}
              ></img>
              <a className="text-xl font-bold text-white">{project.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
