import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/Rectangle 43.png";
import { FaStopwatch } from "react-icons/fa6";
import { TbClock24 } from "react-icons/tb";
import { AiOutlineSafety } from "react-icons/ai";
import contactLogo from "../assets/MOL-Favicon.png";
import air from "../assets/pikaso_enhance__vivid_2K_Standard_r_c_ (2) 2.png";
import ship from "../assets/pikaso_enhance__vivid_2K_Standard_r_c_ (3) 2.png";
import truck from "../assets/pikaso_enhance__vivid_2K_Standard_r_c_ (4) 2.png";

const Home = () => {
  const [counts, setCounts] = useState({
    shipments: 0,
    partners: 0,
    countries: 0,
    clients: 0,
    experts: 0,
  });

  useEffect(() => {
    const targetCounts = {
      shipments: 15000,
      partners: 1000,
      countries: 200,
      clients: 5000,
      experts: 300,
    };

    const duration = 2000; // Duration of the animation in milliseconds
    const startTime = performance.now();

    const animateCounts = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const newCounts = Object.keys(targetCounts).reduce((acc, key) => {
        acc[key] = Math.floor(progress * targetCounts[key]);
        return acc;
      }, {});

      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animateCounts);
      }
    };

    requestAnimationFrame(animateCounts);
  }, []);

  return (
    <>
      <div className="homepage" id="home">
        <img className="homepage-img" src={backgroundImage} alt="Background" />

        <div className="hero-bgbox">
          <h1 className="hero-heading">
            <span className="blue">My</span> Ocean{" "}
            <span className="blue">Logistics</span>
          </h1>
          <h2 className="tag-line">
            Bridging <span className="blue">Markets</span>, Connecting{" "}
            <span className="blue">Worlds</span>
          </h2>
        </div>
      </div>

      <div className="number-bgbox">
        <div className="number-listing">
          <ul>
            <li>
              <h1>{counts.shipments}</h1>
              <p>Completed Shipments</p>
            </li>
            <li>
              <h1>{counts.partners}</h1>
              <p>Global Partners</p>
            </li>
            <li>
              <h1>{counts.countries}</h1>
              <p>Countries Covered</p>
            </li>
            <li>
              <h1>{counts.clients}</h1>
              <p>Satisfied Clients</p>
            </li>
            <li>
              <h1>{counts.experts}</h1>
              <p>Logistics Experts</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="about-us" id="about-us">
        <div className="about-bgbox">
          <h1 className="about-heading">Why Choose Us?</h1>
          <h3 className="about-tagline">We are My Ocean Logistics</h3>

          <div className="about-vis-mis">
            <ul>
              {["About Us", "Our Vision", "Our Mission"].map((item, index) => (
                <li key={index}>
                  <div className="aboutus">
                    <h1>{item}</h1>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Necessitatibus quos suscipit atque minima provident amet
                      dolore, culpa, cupiditate consequuntur adipisci, quaerat
                      illo? Tenetur reiciendis nostrum facere illum praesentium,
                      repellat sequi.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="services" id="services">
        <div className="services-bgbox">
          <h1 className="services-heading">Services We Provide</h1>
          <div className="services-list">
            <ul>
              <li>
                <FaStopwatch />
                <h1>Fast and Reliable Delivery</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam porro fugiat ad velit commodi dignissimos iusto
                  eligendi, deserunt maiores ea repellat culpa fuga dolorem
                  labore aspernatur perspiciatis enim nostrum voluptas.
                </p>
              </li>
              <li>
                <TbClock24 />
                <h1>24/7 Customer Support</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam porro fugiat ad velit commodi dignissimos iusto
                  eligendi, deserunt maiores ea repellat culpa fuga dolorem
                  labore aspernatur perspiciatis enim nostrum voluptas.
                </p>
              </li>
              <li>
                <AiOutlineSafety />
                <h1>Secure and Safe Transport</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam porro fugiat ad velit commodi dignissimos iusto
                  eligendi, deserunt maiores ea repellat culpa fuga dolorem
                  labore aspernatur perspiciatis enim nostrum voluptas.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="solutions" id="solutions">
        <div className="solutions-bgbox">
          <h2 className="solutions-heading">
            Connecting your world with diverse freight solutions
          </h2>

          <div className="card">
            <ul className="solutions-list">
              <li className="solutions-item">
                <div className="solutions-icon">
                  <img src={air} alt="Air Freight" />
                </div>
                <div className="solutions-text">
                  <div className="card-head">
                    <p className="solutions-title">AIR FREIGHT</p>
                    <p className="solutions-title">01</p>
                  </div>
                  <p className="solutions-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus excepturi voluptates assumenda dicta neque.
                  </p>
                </div>
              </li>
              <li className="solutions-item">
                <div className="solutions-icon">
                  <img src={ship} alt="Sea Freight" />
                </div>
                <div className="solutions-text">
                  <div className="card-head">
                    <p className="solutions-title">CARGO FREIGHT</p>
                    <p className="solutions-title">02</p>
                  </div>
                  <p className="solutions-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus excepturi voluptates assumenda dicta neque.
                  </p>
                </div>
              </li>
              <li className="solutions-item">
                <div className="solutions-icon">
                  <img src={truck} alt="Transport Freight" />
                </div>
                <div className="solutions-text">
                  <div className="card-head">
                    <p className="solutions-title">TRANSPORT FREIGHT</p>
                    <p className="solutions-title">03</p>
                  </div>
                  <p className="solutions-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus excepturi voluptates assumenda dicta neque.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contact" id="contact">
        <div className="contact-bgbox">
          <h2 className="contact-heading">Get in touch</h2>
          <div className="contact-form">
            <form>
              <input
                type="text"
                name="cmpname"
                id="cmpname"
                placeholder="Enter your Company Name"
                required
              />
              <input
                type="email"
                name="email"
                id="cmpemail"
                placeholder="Enter your Company Email"
                required
              />
              <input
                type="text"
                name="departure"
                id="deploc"
                placeholder="Enter the Departure Location"
                required
              />
              <input
                type="text"
                name="destination"
                id="desloc"
                placeholder="Enter the Destination Location"
                required
              />
              <input
                type="text"
                name="transportation"
                id="transmethod"
                placeholder="Enter the Transportation Method"
                required
              />
              <button type="submit" className="send">
                Send
              </button>
            </form>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
