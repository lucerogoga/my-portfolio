import React from "react";
import LinkedinIcon from "./svg/linkeding";
import GitHubIcon from "./svg/github";
import MobileNav from "./MobileNav";
import Logo from "./svg/Logo";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "#services" },
  { name: "Resume", path: "#resume" },
  { name: "Projects", path: "#projects" },
];

const Navigator = () => {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between bg-black px-8 py-12 pb-4 lg:px-28">
      <Logo />
      <ul className="hidden items-center gap-14 text-white lg:flex">
        {links.map((link) => {
          return (
            <li className="hover:content hover:point relative hover:font-extrabold">
              <a href={link.path}>{link.name}</a>
            </li>
          );
        })}
        <a href="https://github.com/lucerogoga">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/lucero-gonzales-gandolfo/">
          <LinkedinIcon />
        </a>
      </ul>
      <MobileNav />
    </nav>
  );
};

export default Navigator;
