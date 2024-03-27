import CountdownComponent from "./CountdownComponent";
import MintComponent from "./MintComponent";
import "./MainComponent.css";
import React, { useState, useEffect } from "react";

const MainComponent: React.FC = () => {
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    const targetDate = new Date("2024-03-27T23::00+08:00"); // May 1, 2024, in UTC+8 timezone

    const intervalId = setInterval(() => {
      const currentDate = new Date();
      if (currentDate >= targetDate) {
        setShowCountdown(false);
        clearInterval(intervalId); // Stop the interval after the target date is reached
      }
    }, 1000); // Check every second

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="masthead-section" id="masthead-section">
      <div className="container d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="display-1 fw-bold text-uppercase my-5">
              The XBirds
            </h1>
            {showCountdown ? <CountdownComponent /> : <MintComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
