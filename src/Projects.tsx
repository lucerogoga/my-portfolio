import React from "react";
import Title from "./components/Title";
import { projects } from "./constans/project.constans";

const Projects = () => {
  return (
    <section id="projects" className="section gap-4">
      <Title color="text-white" text="My Projects"></Title>
      <ul className="flex flex-col gap-6 lg:justify-center">
        {projects.map((project) => (
          <li className="rounded-2xl border-2 border-blue p-8">
            <div className="flex flex-col lg:flex-row lg:gap-8">
              <div className="flex flex-col lg:w-1/2">
                <p>{project.type}</p>
                <p className="pb-4 text-xl font-bold text-blue">
                  {project.title}
                </p>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-4 py-4 lg:py-12">
                  {project.stack.map((elm) => (
                    <div className="w-fit rounded-full bg-blue p-2 text-white">
                      {elm}
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden flex-wrap gap-4 py-12 lg:flex">
                {project.imgDesktop.map((elm) => (
                  <img
                    className="w-48 rounded lg:w-36"
                    src={elm}
                    alt={elm}
                  ></img>
                ))}
              </div>
              <img
                className="w-48 self-center rounded lg:hidden lg:w-36"
                src={project.imgMovile}
                alt={project.title}
              ></img>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
