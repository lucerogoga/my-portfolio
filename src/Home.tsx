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
            <p className="pb-2 text-xl font-bold tracking-widest text-black lg:text-2xl">
              FRONTEND DEVELOPER
            </p>
            <p className="text-2xl font-bold lg:text-6xl">Hello I'm</p>
            <p className="text-2xl font-bold text-blue lg:text-6xl">
              Lucero Gonzales
            </p>
            <p className="w-80 font-jua text-lg lg:text-lg">
              I'm a Frontend Developer with a passion for building modern web
              applications,
            </p>
          </div>
          <img
            className="px-12 py-20 lg:hidden"
            src="./lu.ai.png"
            alt="image"
          />
          <a href="./CV-Lucero-Gonzales.pdf" download>
            <Button className="lg:pt-12" text="Download CV" />
          </a>
        </div>

        <img
          className="hidden lg:block"
          src="./src/assets/img/lu.ai.png"
          alt="image"
        />
      </section>
    </>
  );
};

export default Home;
