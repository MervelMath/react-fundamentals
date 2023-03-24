import React from 'react'

export default (props) => {
const callBack = props.whenClick;
const max = 70;
const min = 50;
const generateAge = () => parseInt(Math.random() * (max-min)) + 50;
const generateIsNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Son</div>
      <button onClick={(event) => callBack("Matheus", generateAge(), generateIsNerd())}>
        Send Informations
      </button>
    </div>
  );
};