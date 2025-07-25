import React from "react";
import Navigator from "./components/Navigator";
import Button from "./components/Button";
import StarIcon from "./components/svg/StarIcon";

const Home = () => {
  return (
    <>
      <Navigator />
      <section className="section relative gap-24 lg:h-svh lg:flex-row lg:items-center ">
        <div className="relative flex h-full flex-col lg:h-fit lg:justify-center lg:items-center ">
             <StarIcon className="hidden lg:unhidden lg:absolute text-blue lg:right-32 lg:-top-8 lg:block lg:h-12 lg:w-12" />
             <StarIcon className="hidden lg:unhidden lg:absolute text-blue lg:left-32 lg:-top-8 lg:block lg:h-12 lg:w-12" />
            <p className="text-2xl font-bold lg:text-6xl">Hi I'm Lucero</p>
            <p className="pb-4 text-2xl font-bold text-blue lg:text-6xl">
              Frontend Developer
            </p>
            <p className="w-120 font-poppins text-lg pb-4">
              I design and code beautifully simple things and I love what I do.
              Just simple like that!
            </p>
          
          <a href="/CV-Lucero-Gonzales.pdf" download>
            <Button className="lg:pt-12" text="Download CV" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
