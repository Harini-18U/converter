import React from "react";

const FahrenheitInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Enter temperature in Fahrenheit:</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FahrenheitInput;