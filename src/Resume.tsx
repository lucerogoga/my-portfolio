import React, { useState, lazy, Suspense } from "react";
import Title from "./components/Title";

const AboutMe = lazy(() => import("./components/resume/AboutMe"));
const MyExperience = lazy(() => import("./components/resume/MyExperience"));
const MyEducation = lazy(() => import("./components/resume/MyEducation"));

const resumeList = [
  {
    name: "Experience",
    component: <MyExperience />,
  },
  {
    name: "Education",
    component: <MyEducation />,
  },
  {
    name: "About me",
    component: <AboutMe />,
  },
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section id="resume" className="section gap-16">
      <div className="grid grid-cols-1 items-center gap-y-8 lg:grid-cols-3 lg:gap-12">
        <div className="flex flex-col gap-8">
          <Title text="Why hire me?" />
          <p>
            I offer a comprehensive range of services to help businesses
            establish a strong online presence and drive success.
          </p>
          <div className="flex flex-col items-center gap-8">
            {resumeList.map((elm, idx) => {
              return (
                <button
                  onClick={() => setActiveTab(idx)}
                  className={`border-bg-transparent relative w-full rounded-full border-6 border-blue p-2 px-8 font-jua text-xl ${activeTab === idx && "bg-blue"}`}
                >
                  {elm.name}
                </button>
              );
            })}
          </div>
        </div>
        <Suspense fallback={<h1>loading ...</h1>}>
          <div className="col-span-2">{resumeList[activeTab].component}</div>
        </Suspense>
      </div>
    </section>
  );
};

export default Resume;
