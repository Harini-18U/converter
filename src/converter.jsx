import React from "react";
import CelsiusInput from "./celsius.jsx";
import FahrenheitInput from "./fahrenheit.jsx";
import BoilingPointChecker from "./BoilingPoint.jsx";
import "./converter.css";

const Converter = () => {
  const [celsius, setCelsius] = React.useState("");
  const [fahrenheit, setFahrenheit] = React.useState("");

  const convertCelsiusToFahrenheit = () => {
    if (!isNaN(celsius) && celsius !== "") {
      const convertedTemp = (celsius * 9/5) + 32;
      setFahrenheit(convertedTemp.toFixed(2));
    } else {
      setFahrenheit("");
    }
  };

  const convertFahrenheitToCelsius = () => {
    if (!isNaN(fahrenheit) && fahrenheit !== "") {
      const convertedTemp = (fahrenheit - 32) * 5/9;
      setCelsius(convertedTemp.toFixed(2));
    } else {
      setCelsius("");
    }
  };

  return (
    <div className="container">
      <h2>Temperature Converter</h2>
      <CelsiusInput
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />
      <button onClick={convertCelsiusToFahrenheit}>Convert to Fahrenheit</button> <br></br>
      <FahrenheitInput
        value={fahrenheit}
        onChange={(e) => setFahrenheit(e.target.value)}
      />
      <button onClick={convertFahrenheitToCelsius}>Convert to Celsius</button>
      <BoilingPointChecker
        celsius={celsius}
        fahrenheit={fahrenheit}
      />
    </div>
  );
};

export default Converter;