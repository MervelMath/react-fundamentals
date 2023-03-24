import './Counter.css'
import React, { Component } from "react";

class Counter extends Component {
  //Um exemplo usando classe. Mas podemos usar 'function'.
  state = {
    number: this.props.initialNumber || 0,
    pass: this.props.initialNumber || 5,
  };

  increment = () => {
    //É necessário usar arrow, para que
    // o this (no on click, por exempo) chame a função deste o objeto (counter).
    this.setState({
      number: this.state.number + this.state.pass,
    });
  };

  decrement = () => {
    //É necessário usar arrow, para que
    // o this (no on click, por exempo) chame a função deste o objeto (counter).
    this.setState({
      number: this.state.number - this.state.pass,
    });
  };

  setPass = (event) => {
    this.setState({
      pass: +event.target.value, //'+' converte para inteiro.
    });
  };

  render() {
    return (
      <div className='Counter'>
        <h2>Counter</h2>
        <div>
          <label htmlFor="passInput">Pass:</label>
          <input
            id="passInput"
            type="number"
            value={this.state.pass}
            onChange={this.setPass}
          />
        </div>
        <h2>{this.state.number}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
