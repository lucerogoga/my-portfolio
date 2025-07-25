import React from 'react'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from '../constans/project.constans';
import Button from './Button';


const ProjectsCarrousel = () => {
     const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % projects.length);
  const prev = () => setCurrent((current - 1 + projects.length) % projects.length);

  return (

     <div className="relative w-full max-w-4xl h-[850px] mx-auto overflow-hidden rounded-2xl shadow-xl grid grid-rows-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={projects[current].title}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4 }}
          className="row-span-4 col-span-1 relative"
        >
            <img
              src={projects[current].imgMovile}
              alt={projects[current].title}
                className="object-cover w-full h-full absolute inset-0 z-0"
            />
         <div className="absolute bottom-0 w-full bg-black/70 text-white p-4 z-10 h-1/4  place-content-center">
    
            <h3 className="text-sm lg:text-xl font-semibold mb-2">{projects[current].title}</h3>
            {/* <p className="mb-4">{projects[current].description}</p> */}
              <div className="flex flex-wrap gap-2 lg:gap-4 mb-2">
                  {projects[current].stack.map((elm) => (
                      <div className="w-fit rounded-full bg-blue p-2 text-white text-sm">
                      {elm}
                    </div>
                  ))}
                </div>
           <div className="flex gap-2 lg:gap-4 ">
              <a href={projects[current].github} download>
                <Button className="lg:pt-8" text="Github" />
              </a>
              <a href={projects[current].demo} download>
                <Button className="lg:pt-8" text="Demo" />
              </a>
        
            </div>
        </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button onClick={prev} className="ml-2 p-6 bg-blue rounded-full shadow hover:bg-white">
            ◀
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button onClick={next} className="mr-2 p-6 bg-blue  rounded-full shadow hover:bg-white">
            ▶
          </button>
        </div>
      </div>
  )
}

export default ProjectsCarrousel
