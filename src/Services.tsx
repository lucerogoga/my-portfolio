import React from "react";
import ServiceSection from "./components/ServiceSection";

const servicesList = [
  {
    id: "01",
    title: "Web development",
    description:
      "Building fast, responsive, and scalable web applications using modern frontend frameworks and libraries (React, Angular, Vue) Developing e-commerce solutions, blogs, and corporate websites that meet your business needs Ensuring cross-browser compatibility and mobile-friendliness",
  },
  {
    id: "02",
    title: "UX/UI development",
    description:
      "Designing intuitive and user-friendly interfaces that provide seamless user experience; Creating wireframes, prototypes, and high-fidelity designs that meet your brand's vision; Conducting user research and testing to inform design decisions",
  },
  {
    id: "03",
    title: "Mail templates",
    description:
      "Creating customizable and responsive email templates that match your brand's identity; Designing newsletters, promotional emails, and transactional emails that drive engagement; Ensuring email template compatibility with major email providers",
  },
];

const Services = () => {
  return (
    <section id="services" className="section gap-16">
      <div className="lg:grid-cols grid gap-8">
        {servicesList.map((serv) => (
          <ServiceSection {...serv} />
        ))}
      </div>
    </section>
  );
};

export default Services;
