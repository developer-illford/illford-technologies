import React from "react";
import "../contact/contact.css";
import Contactss from "../Components/Contact";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <div className="contact-container">
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
      <div className="contact-image-div">
        <div className="contact-content">
          <p> Contact Us</p>
        </div>
      </div>
      {/* contact section div */}
      <div className="contact-section-div">
        <div className="home-contact-section">
          <div className="contact-intro">
            <p className="home-contact-first-tsxt"> Come visit us at </p>
            <h1>Our Address</h1>
            <div className="contactss">
              <div className="home-contact-item">
                <img
                  src="/images/location.webp"
                  alt=""
                  className="contactpage-img"
                />
                <div className="contact-adress-section">
                  <h6>Our Address</h6>

                  <p>

                    Illford Digital, BCG Tower, Door No: 11E, Kakkanad, Kochi,
                    <br />
                    Eranakulam, India, 682037
                  </p>
                </div>
              </div>
              <div className="home-contact-item">
                <img
                  src="/images/telephone.webp"
                  alt=""
                  className="contactpage-img"
                />
                <div className="contact-adress-section">
                  <h6>Our Phone NUmber</h6>
                  <p>+91 9847861800</p>
                </div>
              </div>
              <div className="home-contact-item">
                <img
                  src="/images/mail.webp"
                  alt=""
                  className="contactpage-img"
                />
                <div className="contact-adress-section">
                  <h6>Our Email</h6>
                  <p>contact@illfordtechnologies.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home-contact-img">
            <img src="/images/mobile1-contact.webp" alt="" />
          </div>
        </div>
      </div>
      <Contactss />
      <div className="home-contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1201171215625!2d76.34238547501876!3d10.006935872915362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c9238baaaab%3A0xbbdec061a97e0a8f!2sIllford%20Technologies%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1701421882403!5m2!1sen!2sin"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
