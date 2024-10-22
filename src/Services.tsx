import React from "react";
import ServiceSection from "./components/ServiceSection";
import Title from "./components/Title";
import { servicesList } from "./constans/services.constans";

const Services = () => {
  return (
    <section id="services" className="section gap-16 lg:h-svh">
      <Title text="My Services" />
      <div className="lg:grid-cols grid gap-8">
        {servicesList.map((serv) => (
          <ServiceSection {...serv} />
        ))}
      </div>
    </section>
  );
};

export default Services;
