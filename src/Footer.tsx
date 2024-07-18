import React from "react";
import Logo from "./components/svg/Logo";

const Footer = () => {
  return (
    <section id="footer" className="container mb-8">
      <div className="flex justify-between border-b-2 border-white pb-8">
        <h1 className="text-5xl">Contact</h1>
        <h1 className="text-5xl">Follow</h1>
      </div>
      <div className="flex justify-between pt-8">
        <div>
          <Logo />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center pb-8 text-4xl">
            <p>Got a project in mind?</p>

            <a
              href="mailto:lucerogoga@icloud.com"
              className="pointer underline hover:text-blue"
            >
              Send me a note.
            </a>
          </div>
          <p>© Lucero Gonzales 2024</p>
        </div>
        <div>
          <ul>
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
    </section>
  );
};

export default Footer;
