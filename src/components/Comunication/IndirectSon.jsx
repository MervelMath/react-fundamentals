import React from 'react'

export default (props) => {
const callBack = props.whenClick;
  return (
    <div>
      <div>Son</div>
      <button onClick={(event) => callBack("Matheus", 21, true)}>
        Send Informations
      </button>
    </div>
  );
};