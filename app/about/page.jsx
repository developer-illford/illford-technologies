"use client";
import Image from "next/image";
import "../about/about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Components/Footer";

const About = () => {
  return (
    // about section
    <div className="about-container">
      <div className="about-image-div">
        <div className="about-content">
          <p> About Us</p>
        </div>
      </div>

      {/* about our company section */}

      <div className="service-section-div">
        <div className="home-service-section">
          <div className="service-intro">
            <p className="home-service-first-tsxt"> About our company</p>
            <h1>Get To Audience With Targeted Ads On Associative Media</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            <img src="/images/about-page-mock.webp" alt="" />
          </div>
        </div>
      </div>

      {/* learn more section */}

      <div className="main-overlap-2">
        <div className="overlap-2">
          <div className="overlap-2-content">
            <p className="learn-more-optimize">
              <span className="text-wrapper-2">
                Learn More
                <br />
              </span>
              <span className="text-wrapper-3">
                Optimize Your Digital <br /> Marketing Campaings
              </span>
            </p>
            <p className="text-wrapper-4">
              With a robust industry tenure exceeding 5 years, we have
              cultivated a profound knowledge base that positions us as industry
              leaders ready to cater to your unique needs. Choose us for a
              client-centric approach, where transparent communication and
              collaboration converge to deliver not just services, but enduring
              partnerships.
            </p>
            <p className="text-wrapper-5">
              <i className="bi bi-check"></i>
              Best Team Work
              <br />
              <br />
              <i className="bi bi-check"></i>
              Legal Certification
            </p>
          </div>
          <img
            className="about-service-mock"
            src="/images/about-grp.webp"
            alt="about-learnmore"
          />
        </div>
      </div>
      {/* Our Awards Section */}
      <div className="our-award">
        <div className="our-award-div1">
          <p className="our-award-p">
            <span className="our-award-p1">
              Our Awards
              <br />
            </span>
            <span className="our-award-p2">Our Achievements</span>

            <br />
            <span className="our-award-p3">
              We are honored to be recognized with numerous awards and
              accolades.
            </span>
          </p>
          <div className="achievements-container">
            <div className="achievement-item">
              <p className="achievement-number">112</p>
              <p className="achievement-label">Completed Projects</p>
            </div>

            <div className="achievement-item">
              <p className="achievement-number">3</p>
              <p className="achievement-label">Years</p>
            </div>

            <div className="achievement-item">
              <p className="achievement-number">800</p>
              <p className="achievement-label">Coding Hours</p>
            </div>

            <div className="achievement-item">
              <p className="achievement-number">20</p>
              <p className="achievement-label">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
      {/* Our teams Section */}
      <div className="our-team">
        <div className="our-team-div1">
          <p className="our-team-p">
            <span className="our-team-p1">
              Our Team
              <br />
            </span>
            <span className="our-team-p2">We Are Ready to serve</span>
          </p>
        </div>
        <div className="our-team-img">
          <img
            className="about-team-mock"
            src="/images/our-team1.webp"
            alt="about-learnmore"
          />
          <img
            className="about-team-mock"
            src="/images/our-team2.webp"
            alt="about-learnmore"
          />
          <img
            className="about-team-mock"
            src="/images/our-team3.webp"
            alt="about-learnmore"
          />
        </div>
      </div>
      {/* Testimonials section */}
      <div className="home-testimonial-div">
        <div className="home-testimonial-heading">
          <p>Testimonials</p>
          <h2>
            Our <span className="happy-clients">Happy Clients</span>
          </h2>
        </div>
        <div className="home-testimonial">
          <div className="testimonials">
            <img
              src="images/testimonial-img-2.webp"
              alt=""
              className="testimonials-img"
            />

            <p className="testimonial-talk">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna ali
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
            <img
              src="/images/testimonial-img-1.webp"
              alt=""
              className="testimonials-img"
            />

            <p className="testimonial-talk">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna ali
            </p>
            <div className="testimonial-ratings">
              <p className="testimonial-name">Robert Cook</p>
              <div className="rating-start">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog section */}
      <div className="home-blog-main-div">
        <div className="home-blog-heading">
          <p>Recent</p>
          <h2>Blog Post</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 blog-card">
          <div className="col">
            <div className="card">
              <img src="images/blog-1.webp" className="card-img-top" alt="..." />
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
              <img src="images/blog-3.webp" className="card-img-top" alt="..." />
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
  );
};

export default About;
