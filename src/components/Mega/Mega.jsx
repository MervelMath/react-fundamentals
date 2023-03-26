import React, { useState } from "react";
import "./Mega.css";

export default (props) => {
  function genRandomNumbers(quantity) {
    const megaSena = Array();

    for (let index = 0; index < quantity; index++) {
      var number = 0;
      do {
        number = getRandomArbitrary(1, 60);
      } while (megaSena.includes(number));

      megaSena.push(number);
    }

    return megaSena.sort((a, b) => a - b);
  }

  function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }

  const [quantityOrDefault, setQuantityOrDefault] = useState(
    props.quantity || 6
  );
  const initNumbers = genRandomNumbers(quantityOrDefault);
  const [numbers, setNumbers] = useState(initNumbers);

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <div>
        <label htmlFor="qttInput">Quantity</label>
        <input
          min={1}
          max={6}
          type="number"
          id="qttInput"
          value={quantityOrDefault}
          onChange={(e) => {
            setQuantityOrDefault(+e.target.value);
            setNumbers(genRandomNumbers(+e.target.value));
          }}
        />
      </div>
      <h3>{numbers.join(" ")}</h3>
      <button onClick={(_) => setNumbers(genRandomNumbers(quantityOrDefault))}>
        Gen Numbers
      </button>
    </div>
  );
};

// state = {
//   number: 1,
//   randomNumbers: [],
// };

// changeNumber = (event) => {
//   //É necessário usar arrow, para que
//   // o this (no on click, por exempo) chame a função deste o objeto (counter).
//   this.setState({
//     number:
//       +event.target.value > 1 && +event.target.value <= 6
//         ? +event.target.value
//         : 1,
//   });
// };

// function randomNumberGenerator(quantity) {
//   const megaSena = Array();

//   for (let index = 0; index < quantity; index++) {
//     var number = 0;
//     do {
//       number = getRandomArbitrary(1, 60);
//     } while (megaSena.includes(number));

//     megaSena.push(number);
//   }

//   return megaSena.sort((a, b) => a - b);
// }

// function getRandomArbitrary(min, max) {
//   return parseInt(Math.random() * (max - min) + min);
// }

// getNumbers = () => {
//   //É necessário usar arrow, para que
//   // o this (no on click, por exempo) chame a função deste o objeto (counter).
//   this.setState({
//     randomNumbers: this.generateRandomNumbers(this.state.number),
//   });
// };

// render() {
// return (
//   <div>
//     <div>
//       <label htmlFor="numberInput">Pass:</label>
//       <input
//         id="numberInput"
//         type="number"
//         value={this.state.number}
//         onChange={this.changeNumber}
//       />
//     </div>

//     {<button onClick={this.getNumbers}>Generate Numbers</button>}

//   </div>
// );
