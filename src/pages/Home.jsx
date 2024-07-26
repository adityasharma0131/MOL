import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/Rectangle 43.png"; // Ensure the path is correct

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
    const stepTime = 20; // Time between updates in milliseconds

    Object.keys(targetCounts).forEach((key) => {
      const target = targetCounts[key];
      let start = 0;
      const increment = target / (duration / stepTime);

      const animateCount = () => {
        start += increment;
        if (start >= target) {
          start = target;
        }
        setCounts((prevCounts) => ({
          ...prevCounts,
          [key]: Math.floor(start),
        }));
        if (start < target) {
          setTimeout(animateCount, stepTime);
        }
      };

      animateCount();
    });
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
    </>
  );
};

export default Home;
