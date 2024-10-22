import React from "react";
import Navigator from "./components/Navigator";
import Button from "./components/Button";

const Home = () => {
  return (
    <>
      <Navigator />
      <section className="section relative gap-24 lg:h-svh lg:flex-row lg:items-center">
        <div className="flex h-full flex-col justify-between lg:h-fit">
          <div>
            <p className="text-2xl font-bold lg:text-6xl">Hi I'm Lucero</p>
            <p className="pb-4 text-2xl font-bold text-blue lg:text-6xl">
              Frontend Developer
            </p>
            <p className="w-120 font-poppins text-lg">
              I design and code beautifully simple things and I love what I do.
              Just simple like that!
            </p>
          </div>
          <img
            className="px-12 py-20 lg:hidden"
            src="https://raw.githubusercontent.com/lucerogoga/my-portfolio/main/src/img/lucero.png"
            alt="image"
          />
          <a href="src/assets/CV-Lucero-Gonzales.pdf" download>
            <Button className="lg:pt-12" text="Download CV" />
          </a>
        </div>

        <img
          className="hidden lg:block"
          src="https://raw.githubusercontent.com/lucerogoga/my-portfolio/main/src/img/lucero.png"
          alt="image"
        />
      </section>
    </>
  );
};

export default Home;
