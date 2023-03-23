import React from "react";
import IndirectSon from "./IndirectSon";

export default (props) => {
  let name = "?";
  let age = 0;
  let nerd = false;
  
  function whenClickFatherFunction(nameParam, ageParam, nerdParam) {
    nerd = nerdParam;
    age = ageParam;
    name = nameParam;

    console.log(nerd, age, name);
  }

  return (
    <div>
      <div>
        <span>{name}</span>
        <span>{age}</span>
        <span>{nerd}</span>
      </div>
      <IndirectSon whenClick={whenClickFatherFunction}></IndirectSon>
    </div>
  );
};
