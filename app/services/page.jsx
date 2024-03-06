"use client";
import React, { useState } from "react";
import Service1 from "../Components/Service1";
import Service2 from "../Components/Service2";
import Service3 from "../Components/Service3";
import "../services/service.css";
import Footer from "../Components/Footer";

const Service = () => {
  const [activeService, setActiveService] = useState(<Service1 />);

  const handleServiceClick = (serviceComponent) => {
    setActiveService(serviceComponent);
  };

  return (
    <div>
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
            <img src="/images/database.webp" alt="" />
            <h3>Wholesale and Retail service provider</h3>
            <br />
            <p>
              We stands out as a leading wholesale and retail server provider,
              offering cutting-edge solutions for businesses. With robust
              distribution, inventory management, and retail server services, we
              ensure seamless operations and enhanced efficiency..
            </p>
          </div>
          <div
            className="card"
            onClick={() => handleServiceClick(<Service2 />)}
          >
            <img src="/images/donut-chart.webp" alt="" />
            <h3>Digital Marketing Solutions</h3>
            <br />
            <p>
              Elevate your online presence with our comprehensive digital
              marketing solutions with us. We specialize in strategic and
              data-driven approaches, encompassing SEO, social media management,
              and targeted advertising to maximize your brand visibility
            </p>
          </div>
          <div
            className="card"
            onClick={() => handleServiceClick(<Service3 />)}
          >
            <img src="/images/webdev-dot.webp" alt="" />
            <h3>Web and App Development</h3>
            <br />
            <p>
              From intuitive website designs to feature-rich mobile
              applications, we specialize in crafting tailored solutions that
              align with your business goals. Empower your brand with seamless
              user experiences and functionalities, setting new benchmarks in
              the digital realm
            </p>
          </div>
        </div>
        <div>{activeService}</div>
      </div>
      {/* why choose us */}

      <div className="servicePage-overlap-2">
        <div className="overlap-2-servicePage">
          <div className="servicePage-overlap-2-content">
            <p className="servicePage-optimize">
              <span className="servicePage-text-wrapper-2">
                Why Choose Us
                <br />
              </span>
              <span className="servicePage-text-wrapper-3">
                We Have The Expertise And <br /> Tools To Make It Happen
              </span>
            </p>
            <div className="servicePagecard1">
              <div className="card-2">
                <h3>Experienced Team</h3>

                <p>
                  Experienced team navigates challenges, delivers exceptional
                  results with a seasoned industry understanding at the
                  forefront.
                </p>
              </div>
              <div className="card-2">
                <h3>Customized Strategies</h3>

                <p>
                  Tailored strategies for precise outcomes, leveraging expertise
                  to drive success, uniquely meeting your business goals.
                </p>
              </div>
            </div>
            <div className="servicePagecard2">
              <div className="card-2">
                <h3>Transparent Reporting</h3>

                <p>
                  Transparent reporting ensures clarity, fostering trust and
                  accountability, integral elements for sustainable partnerships
                  and success.
                </p>
              </div>
              <div className="card-2">
                <h3>Competetive Pricing</h3>

                <p>
                  Competitive pricing ensures value, empowering your budget
                  without compromising quality, enhancing affordability and
                  satisfaction
                </p>
              </div>
            </div>
          </div>
          <img
            className="about-service-mock"
            src="/images/service-team.webp"
            alt="about-learnmore"
          />
        </div>
      </div>
      <Footer />

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MB6BSFND"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}

      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-WNBWCC2VQ3"></script>
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-WNBWCC2VQ3');
      `}
      </script>


    </div>
  );
};

export default Service;
