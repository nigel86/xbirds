import { useState, useEffect } from "react";
import "./CountdownComponent.css";

const CountdownComponent = () => {
  interface TimeDisplayValuesType {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const targetDate = new Date();
  targetDate.setUTCFullYear(2024);
  targetDate.setUTCMonth(4); // 4 represents May (0-indexed)
  targetDate.setUTCDate(1); // 1 represents the day of the month
  targetDate.setUTCHours(5);
  targetDate.setUTCMinutes(0);
  targetDate.setUTCSeconds(0);

  const generateTimeDisplay = (): TimeDisplayValuesType => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    const stateObj = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
    return stateObj;
  };

  const [timeDisplay, setTimeDisplay] = useState<TimeDisplayValuesType>(
    generateTimeDisplay()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDisplay(generateTimeDisplay());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-section">
      <div className="container  p-4 text-white-50">
        <div className="activate">
          <h2 className="text-uppercase">Activate In</h2>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="counter">
              <div>{timeDisplay.days}</div>
              <h2 className="text-uppercase">Days</h2>
            </div>
          </div>
          <div className="col-3">
            <div className="counter">
              <div>{timeDisplay.hours}</div>
              <h2 className="text-uppercase">Hours</h2>
            </div>
          </div>
          <div className="col-3">
            <div className="counter">
              <div>{timeDisplay.minutes}</div>
              <h2 className="text-uppercase">Minutes</h2>
            </div>
          </div>
          <div className="col-3">
            <div className="counter">
              <div>{timeDisplay.seconds}</div>
              <h2 className="text-uppercase">Seconds</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownComponent;
