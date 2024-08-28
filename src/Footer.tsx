import React from "react";
import Spinner from "./components/svg/Spinner";

const Footer = () => {
  return (
    <section id="footer" className="container lg:mb-8">
      <div className="flex justify-between border-b-2 border-white pb-4 lg:pb-8">
        <h1 className="text-xl lg:text-5xl">Contact</h1>
        <h1 className="text-xl lg:text-5xl">Follow</h1>
      </div>
      <div className="flex justify-between pt-4 lg:pt-8">
        <div className="hidden lg:block">
          <Spinner />
        </div>
        <div className="flex flex-col items-start lg:items-center">
          <div className="flex flex-col items-start pb-8 text-lg lg:items-center lg:text-4xl">
            <p>Got a project in mind?</p>

            <a
              href="mailto:lucerogoga@icloud.com"
              className="pointer underline hover:text-blue"
            >
              Send me a note.
            </a>
          </div>
        </div>
        <div>
          <ul className="flex flex-col items-end">
            <li>
              <a
                href="https://www.linkedin.com/in/lucero-gonzales-gandolfo/"
                className="pointer hover:text-blue"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/the.frontend.diaries/"
                className="pointer hover:text-blue"
              >
                INSTAGRAM
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@the.frontend.diaries"
                className="pointer hover:text-blue"
              >
                TIKTOK
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center">© Lucero Gonzales 2024</p>
    </section>
  );
};

export default Footer;
