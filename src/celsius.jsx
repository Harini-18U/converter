import React from "react";

const CelsiusInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Enter temperature in Celsius:</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CelsiusInput;