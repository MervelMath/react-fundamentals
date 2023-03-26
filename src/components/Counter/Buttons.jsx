import React, { useState } from "react";

export default (props) => {
  return (
    <div>
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button></div>
  );
};
