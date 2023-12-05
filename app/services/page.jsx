"use client";
import { useState } from "react";
import "../services/service.css";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Wholesale and Retail service provider",
      details:
        "We stands out as a leading wholesale and retail server provider, offering cutting-edge solutions for businesses. With robust distribution, inventory management, and retail server services, we ensure seamless operations and enhanced efficiency..",
        logo: "/images/database.png"
      },
    {
      id: 2,
      title: "Digital Marketing Solutions",
      details:
        "Elevate your online presence with our comprehensive digital marketing solutions with us. We specialize in strategic and data-driven approaches, encompassing SEO, social media management, and targeted advertising to maximize your brand visibility.",
        logo: "/images/donut-chart.png"
     
      },
    {
      id: 3,
      title: "Web and App Development",
      details:
        "From intuitive website designs to feature-rich mobile applications, we specialize in crafting tailored solutions that align with your business goals. Empower your brand with seamless user experiences and innovative functionalities, setting new benchmarks in the digital realm.",
        logo: "/images/webdev-dot.png"
      },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  const handleServiceClick = (service) => {
    setActiveService(service);
  };

  return (
    <div className="service-container">
      <div className="service-image-div">
        <div className="service-content">
          <p> Services</p>
        </div>
      </div>
      <div className="service-blog-main-div">
        {services.map((service) => (
          <div
            key={service.id}
            className="card"
            onClick={() => handleServiceClick(service)}
          >
            <img src={service.logo} alt="" />
            <h3>{service.title}</h3>
            <br />
            <p>{service.details}</p>
            
            {/* You can customize the card styling as needed */}
          </div>
        ))}
      </div>
      <div>
        <h2>{activeService.title}</h2>
        <p>{activeService.details}</p>
        {/* You can customize the content styling as needed */}
      </div>
    </div>
  );
};

export default Service;
