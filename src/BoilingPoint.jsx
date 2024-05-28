import React from "react";

const BoilingPointChecker = ({ celsius, fahrenheit }) => {
  const checkBoilingPoint = () => {
    const boilingPointCelsius = 100;
    const boilingPointFahrenheit = 212;

    if (celsius >= boilingPointCelsius) {
      return "The water would boil";
    } else if (fahrenheit >= boilingPointFahrenheit) {
      return "The water would boil";
    } else {
      return "The water would not boil";
    }
  };

  return (
    <div className="boiling-point">
      <p>{checkBoilingPoint()}</p>
    </div>
  );
};

export default BoilingPointChecker;