import React from "react";
import Navigator from "./components/Navigator";
import Button from "./components/Button";

const Home = () => {
  return (
    <>
      <Navigator />
      <section className="section relative gap-24 lg:flex-row lg:items-center">
        <div className="flex h-full flex-col justify-between lg:h-fit">
          <div>
            <p className="text-2xl font-bold lg:text-6xl">Hello I'm</p>
            <p className="pb-4 text-2xl font-bold text-blue lg:text-6xl">
              Lucero Gonzales
            </p>
            <p className="w-120 text-md font-jua">
              A Frontend Developer with a creative flair, combining dev skills
              with a passion for stunning designs.
            </p>
          </div>
          <img
            className="px-12 py-20 lg:hidden"
            src="src/img/lucero.png"
            alt="image"
          />
          <a href="./CV-Lucero-Gonzales.pdf" download>
            <Button className="lg:pt-12" text="Download CV" />
          </a>
        </div>

        <img className="hidden lg:block" src="src/img/lucero.png" alt="image" />
      </section>
    </>
  );
};

export default Home;
