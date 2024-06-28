import React from "react";
import LinkedinIcon from "./svg/linkeding";
import GitHubIcon from "./svg/github";

const MobileNav = () => {
  return (
    <div className="flex gap-4 lg:hidden">
      <a href="https://github.com/lucerogoga">
        <GitHubIcon />
      </a>
      <a href="https://www.linkedin.com/in/lucero-gonzales-gandolfo/">
        <LinkedinIcon />
      </a>
    </div>
  );
};

export default MobileNav;
