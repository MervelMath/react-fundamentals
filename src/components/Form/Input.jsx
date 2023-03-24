import React, { useState } from "react";
import "./Input.css";

export default (props) => {
  const [value, setValue] = useState("init");
  function whenChange(e) {
    setValue(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div className="Input">
      <h2>{value}</h2>
      <div style={{ displays: "flex", flexDirection: "column" }}>
        <input value={value} onChange={whenChange} />
        <input value={value} readOnly />
        <input value={undefined} />
      </div>
    </div>
  );
};
