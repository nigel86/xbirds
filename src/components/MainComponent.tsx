import CountdownComponent from "./CountdownComponent";
import MintComponent from "./MintComponent";
import "./MainComponent.css";
import React, { useState, useEffect } from "react";

const MainComponent: React.FC = () => {
  const [renderComponent, setRenderComponent] = useState<JSX.Element | null>(
    null
  );
  const [shouldCheckDate, setShouldCheckDate] = useState(true);

  useEffect(() => {
    const targetDate = new Date("2024-05-01T13:00:00+08:00"); // May 1, 2024, at 1:00 PM in UTC+8 timezone

    const intervalId = setInterval(() => {
      const currentDate = new Date();
      if (currentDate >= targetDate && shouldCheckDate) {
        setRenderComponent(<MintComponent />);
        setShouldCheckDate(false);
        clearInterval(intervalId);
      } else {
        setRenderComponent(<CountdownComponent />);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="masthead-section" id="masthead-section">
      <div className="container d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="display-1 fw-bold text-uppercase my-5">
              The XBirds
            </h1>
            {renderComponent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
