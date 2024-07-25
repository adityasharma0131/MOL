import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/Rectangle 43.png"; // Adjust the path as necessary

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

    const duration = 2000; // duration of the animation in milliseconds
    const stepTime = 20; // time between updates in milliseconds

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
      <div className="homepage">
        <img className="homepage-img" src={backgroundImage} alt="Background" />

        <div>
          <div className="hero-bgbox">
            <h1 className="hero-heading">
              <span className="blue">My</span> Ocean{" "}
              <span className="blue">Logistics</span>
            </h1>
            <h1 className="tag-line">
              Bridging <span className="blue">Markets</span>, Connecting{" "}
              <span className="blue">Worlds</span>
            </h1>
          </div>
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
    </>
  );
};

export default Home;
