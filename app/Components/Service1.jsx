import React from "react";
import "../Components/service1.css";

const Service1 = () => {
  return (
    <div className="service1-main">
      <div className="service1-div">
        <div className="service1-title">
          <h2>Wholesale/Retail server provider</h2>
          <p>
            we stand out as a premier Wholesale and Retail server provider,
            offering cutting-edge solutions for businesses. With a commitment to
            excellence, we provide robust distribution, inventory management,
            and retail server services that ensure seamless operations and
            enhanced efficiency.
          </p>
        </div>
        <div className="service1-content">
          <img src="/images/server.webp" alt="" className="serverProvider" />
          <div className="content-card">
            <div className="servicecard">
              <img src="/images/serverprovider.webp" alt="" />
              <div className="service-info">
                <h3> server provider</h3>
                <br />
                <p>
                  We stands out as a leading wholesale and retail server
                  provider, offering cutting-edge solutions for businesses. With
                  robust distribution, inventory management, and retail server
                  services, we ensure seamless operations and enhanced
                  efficiency..
                </p>
              </div>
            </div>
            <div className="servicecard">
              <img src="/images/team.webp" alt="" />
              <div className="service-info">
                <h3>Dedicated & Shared Support Team</h3>
                <br />
                <p>
                  Elevate your online presence with our comprehensive digital
                  marketing solutions with us. We specialize in strategic and
                  data-driven approaches, encompassing SEO, social media
                  management, and targeted advertising to maximize your brand
                  visibility
                </p>
              </div>
            </div>
            <div className="servicecard">
              <img src="/images/support.webp" alt="" />
              <div className="service-info">
                <h3>24/7 Technical Support</h3>
                <br />
                <p>
                  From intuitive website designs to feature-rich mobile
                  applications, we specialize in crafting tailored solutions
                  that align with your business goals. Empower your brand with
                  seamless user experiences and functionalities, setting new
                  benchmarks in the digital realm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service1;
