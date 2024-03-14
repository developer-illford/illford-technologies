"use client";
import "../app/page.css";
import arrow from "../public/home-arrow.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Footer from "./Components/Footer";
import Contactss from "./Components/Contact";
export default function Home() {
  const fb = () => {
    // Assuming the home page URL is "/home", you can change it accordingly
    window.location.href = "https://www.facebook.com/illfordtechnologies";
  };
  const insta = () => {
    window.location.href = "https://www.instagram.com/illforddigital/";
  };
  const linkdin = () => {
    window.location.href = "https://www.linkedin.com/company/illford-digital/";
  };
  const twitterx = () => {
    window.location.href = "https://twitter.com/Illforddigital";
  };

  return (
    // Home section
    <>
      <div className="home-section">
        <div className="home-image-div">
          <img src="/images/hom-img.webp" alt="" className="home-image" />
        </div>
        <div className="home-content-div">
          <div className="home-content">
            <p className="first-content">We're</p>
            <p className="second-content">Crafting digital narratives</p>
            <p className="third-content">
              Welcome to our digital haven, where creativity dances with technology. Explore captivating online experiences through our web development services Kochi.
            </p>
            <div className="home-btn-div">
              <button
                className="home-btn"
                onClick={() => (window.location.href = "#contact")}
              >
                GET START NOW <Image src={arrow} className="home-arrow-svg" />
              </button>
            </div>
          </div>
          <div className="home-social">
            <span>
              <i className="bi bi-facebook" onClick={fb}></i>
            </span>
            <span>
              <i className="bi bi-instagram" onClick={insta}></i>
            </span>
            <span>
              <i className="bi bi-linkedin" onClick={linkdin}></i>
            </span>
            <span>
              <i className="bi bi-twitter-x" onClick={twitterx}></i>
            </span>
            <span>
              <i className="bi bi-youtube"></i>
            </span>
          </div>
        </div>

        {/* about section */}

        <div className="about-section-div">
          <div className="about-section">
            <p className="about-us">About Us</p>
            <h1 className="who-we-are">
              Who <span>We Are</span>
            </h1>
            <p className="about-text">
              We are a dynamic and innovative technology company committed to revolutionizing the industry with advanced solutions. Our team of experts is hard at work developing game-changing products in the realm of Web Development Services Kochi and Web Designing Services Kochi, set to make waves in the market.
            </p>
            <h4 className="ceo-words">Words from the CEO</h4>
          </div>
        </div>

        {/* service section */}

        <div className="service-section-div">
          <div className="home-service-section">
            <div className="service-intro">
              <p className="home-service-first-tsxt">our</p>
              <h1>Services</h1>
              <p>
                As a comprehensive service provider, we excel in Wholesale/Retail server solutions and serve as a Digital Marketing Solution Partner. Our expertise extends to top-notch Web Development Services Kochi and innovative Web Designing Services Kochi, ensuring a complete digital solution for your business.
              </p>

              <div className="services">
                <div className="home-service-item">
                  <img src="/images/digital-marketing-dot.webp" alt="" />
                  <p>Wholesale/Retail server provider</p>
                </div>
                <div className="home-service-item">
                  <img src="/images/wholsale&retail.webp" alt="" />
                  <p>Digital Marketing Solution Partner</p>
                </div>
                <div className="home-service-item">
                  <img src="/images/webdev-dot.webp" alt="" />
                  <p>Web Developments and & App developments</p>
                </div>
                <div className="learn-more-btn-div">
                  <button onClick={() => (window.location.href = "/services")}>
                    Learn More
                    <i className="bi bi-arrow-right service-arrow"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="home-service-img">
              <img src="/images/service-page.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="home-service-explore">
          <p>EXPLORE ALL TECHNICAL SERVICES</p>
        </div>

        {/* portfolio-section */}

        <div className="home-portfolio-div">
          <div className="home-portfolio-img-div">
            <img
              src="/images/portfolio-img.webp"
              alt=""
              className="home-portfolio-img"
            />
          </div>
          <div className="home-portfolio-content-div">
            <div className="home-portfolio-content">
              <p>
                Dive-in to learn about our <br /> marketing portfolio and <br />{" "}
                creative skills.
              </p>
              <div className="home-portfolio-btn-div">
                <a href="#contact">
                  <button className="home-portfolio-btn">Contact Us</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* testimonial section */}

        <div className="home-testimonial-div">
          <div className="home-testimonial-heading">
            <p>Testimonials</p>
            <h2>
              Our <span className="happy-clients">Happy Clients</span>
            </h2>
          </div>
          <div className="home-testimonial">
            <div className="testimonials">
              <div className="testimonials-img-div">
                <img
                  src="images/testimonial-img-2.webp"
                  alt=""
                  className="testimonials-img"
                />
              </div>

              <p className="testimonial-talk">
                Illford Technologies excels in exceptional services. Recommend for surpassing expectations and Web Development Services Kochi.
              </p>
              <div className="testimonial-ratings">
                <p className="testimonial-name">Amelia</p>
                <div className="rating-start">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
            <div className="testimonials">
              <div className="testimonials-img-div">
                <img
                  src="/images/testimonial-img-1.webp"
                  alt=""
                  className="testimonials-img"
                />
              </div>

              <p className="testimonial-talk">
                I have no words to express my gratitude. Illford Technology, a game changer for branding, offers standard and affordable Web Designing Services Kochi.
              </p>
              <div className="testimonial-ratings">
                <p className="testimonial-name">Robert Cook</p>
                <div className="rating-start">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>

        {/* blog section */}
        <div className="home-blog-main-div">
          <div className="home-blog-heading">
            <p>Recent</p>
            <h2>Blog Post</h2>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 blog-card">
            <div className="col">
              <div className="card">
                <img
                  src="images/blog-1.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Grow Your Business with A Digital Marketing Strategy
                  </p>
                  <button className="home-blog-btn">Read More</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="images/blog-2.webp" className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="card-text">
                    Digital Marketing: Stay Relevant To The Empowered consumer
                  </p>
                  <button className="home-blog-btn">Read More</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="images/blog-3.webp"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    5 Inexpensive Online Tools Get Your Business Off The Ground
                  </p>
                  <button className="home-blog-btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact section */}

        <Contactss />

        {/* FAQ's section */}

        <div className="faq-main-div">
          <div className="faq-div">
            <div className="faq-heading">
              <h2>FAQ's</h2>
              <p>Some awesome words from awesome people</p>
            </div>
            <div className="questions-ans-div">
              <h2 className="questions">1. What services does Illford Technologies offer?</h2>
              <p className="answers">
                We offer a comprehensive range of services, including wholesale and retail, Digital Marketing, Branding, and Web and app development. Explore excellence with our cutting-edge Web Development Services Kochi.
              </p>
            </div>
            <div className="questions-ans-div">
              <h2 className="questions">
                2.How is Ilford Technologies different from other digital service providers?
              </h2>
              <p className="answers">
                We believe in providing high-quality dedicated services to each client. Our human-centered approach ensures personalized solutions. With innovative Web Designing Services Kochi, we exceed client expectations, making us the ideal partner in this digital realm.
              </p>
            </div>
            <div className="questions-ans-div">
              <h2 className="questions">
                3.Can Illford Technologies handle both small and large scale projects?
              </h2>
              <p className="answers">
                Absolutely, whether you are a startup or an established enterprise to meet the unique requirements of your business goals, we tailor customised and well researched  solutions for you.
              </p>
            </div>
            <div className="questions-ans-div">
              <h2 className="questions">
                4.What technologies does Illford Technologies specialise in for web development?
              </h2>
              <p className="answers">
                As the parent company of Illford Digital, we aim to make our web development services unique and customer-centric. Proud experts in PHP, Laravel, WordPress, and more, we choose the perfect technological solution for your specific needs. With Web Development Services Kochi, we ensure that you receive the best output, tailored to your requirements.
              </p>
            </div>
            <div className="questions-ans-div">
              <h2 className="questions">
                5.How does Illford Technologies approach app development?
              </h2>
              <p className="answers">
                We believe in two keys - Innovation and User-centric design. From brainstorming to building MVPs, we closely collaborate to create the best apps for your business, integrating our expertise in Web Designing services Kochi.
              </p>
            </div>
            <div className="questions-ans-div">
              <h2 className="questions">
                6. How does Illford Technologies ensure transparency in projects?
              </h2>
              <p className="answers">
                Building trust is key in business. At Illford Technologies, transparency is core. From regular updates to detailed analytics, we ensure transparency in every partnership step, maintaining integrity in our Web Designing services Kochi.
              </p>
            </div>
            <div className="questions-ans-div">
              <h2 className="questions">
                7.Does Illford Technologies offer server provider services?
              </h2>
              <p className="answers">
                Yes. At Illford Technologies, we provide best server services for both wholesale and retail clients. We offer robust service options to meet your unique business needs.
              </p>
            </div>
            <div className="questions-ans-div">
              <h2 className="questions">
                8.How can I get start with Illford Technologies for my project?
              </h2>
              <p className="answers">
                Getting started is simple. Contact us through our website and our team will reach out to understand your project requirements. We'll work together to craft a personalized solution that aligns with your goals and objectives.
              </p>
            </div>
          </div>
        </div>

        {/* Footer section */}

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
    </>
  );
}
