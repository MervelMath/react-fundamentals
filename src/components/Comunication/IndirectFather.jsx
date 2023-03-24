import React, {useState} from "react";
import IndirectSon from "./IndirectSon";

export default (props) => {
  
  const [name, setName] = useState("?"); //Usestate inicializa.
  const [age, setAge] = useState(0);
  const [nerd, setNerd] = useState(false);
  
  function whenClickFatherFunction(nameParam, ageParam, nerdParam) {
    setNerd(nerdParam);
    setAge(ageParam);
    setName(nameParam);

    console.log(nerd, age, name);
  }

  return (
    <div>
      <div>
        <span>{name}</span>
        <span>{age}</span>
        <span>{nerd ? 'true':'false'}</span>
      </div>
      <IndirectSon whenClick={whenClickFatherFunction}></IndirectSon>
    </div>
  );
};
