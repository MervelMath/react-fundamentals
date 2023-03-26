import './Counter.css'
import React, { Component } from "react";
import Display from './Display';
import Buttons from './Buttons';
import PassForm from './PassForm';

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

  setPass = (newPass) => {
    this.setState({
      pass: newPass, //'+' converte para inteiro.
    });
  };

  render() {
    return (
      <div className='Counter'>
        <h2>Counter</h2>
        <Display number={this.state.number}/>
        <PassForm pass={this.state.pass} setPass={this.setPass}/>
        <Buttons increment={this.increment} decrement={this.decrement}/>
      </div>
    );
  }
}

export default Counter;
