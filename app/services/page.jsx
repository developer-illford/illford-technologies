"use client"
import React, { useState } from "react";
import Service1 from "../Components/Service1";
import Service2 from "../Components/Service2";
import Service3 from "../Components/Service3";
import "../services/service.css";

const Service = () => {
  const [activeService, setActiveService] = useState(null);

  const handleServiceClick = (serviceComponent) => {
    setActiveService(serviceComponent);
  };

  return (
    <div className="service-container">
      <div className="service-image-div">
        <div className="service-content">
          <p> Services</p>
        </div>
      </div>
      <div className="service-blog-main-div">
        <div
          className="card"
          onClick={() => handleServiceClick(<Service1 />)}
        >
          <h3>Service 1</h3>
        </div>
        <div
          className="card"
          onClick={() => handleServiceClick(<Service2 />)}
        >
          <h3>Service 2</h3>
        </div>
        <div
          className="card"
          onClick={() => handleServiceClick(<Service3 />)}
        >
          <h3>Service 3</h3>
        </div>
      </div>
      <div>
        {activeService && <>{activeService}</>}
      </div>
    </div>
  );
};

export default Service;
