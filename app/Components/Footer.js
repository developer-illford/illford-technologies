"use client"
import React from "react";
import "../Components/Footer.css";
const Footer = () => {
  return (
    <div className="Footer-main-div">
      <div className="footer-main">
        <div className="footer-logo-div">
          <img src="/images/illford-logo.webp" alt="" className="footer-logo" />
        </div>
        <div className="footer-content">
          <div className="footer-first-content">
            <div className="footer-txt">
              Step into our virtual sanctuary, where the harmonious fusion of creativity and technology unfolds. Immerse yourself in captivating online experiences through the expertise of Web Development Services            </div>
            <div className="footer-nav">
              <a href="/">
                <p>Home</p>
              </a>
              <a href="/about">
                <p>About Us</p>
              </a>
              <a href="/services">
                <p>Services</p>
              </a>

              <a href="/contact">
                <p>Contact</p>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-txt">
              <a href="/">
                <p>illfordDigital </p>
              </a>
              <a href="/contact">
                <p>Contact</p>
              </a>
              <p>Privacy Policy </p>
              <p>Terms & Conditions</p>
            </div>
            <div className="footer-social">
              <i
                className="bi bi-facebook"
                onClick={() =>
                (window.location.href =
                  "https://www.facebook.com/illforddigital.kochi")
                }
              ></i>
              <i
                className="bi bi-instagram"
                onClick={() =>
                (window.location.href =
                  "https://www.instagram.com/illforddigital/")
                }
              ></i>
              <i
                className="bi bi-linkedin"
                onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/company/illford-digital/")
                }
              ></i>
              <i
                className="bi bi-twitter-x"
                onClick={() =>
                  (window.location.href = "https://twitter.com/Illforddigital")
                }
              ></i>
              <i
                className="bi bi-youtube"
                onClick={() =>
                (window.location.href =
                  "https://www.facebook.com/illforddigital.kochi")
                }
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
