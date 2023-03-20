import "./Card.css"
import React from 'react'


export default props => {

    const defstyle = {
      backgroundColor: props.color || "#F00",
      borderColor: props.color || '#F00',
    };

    return (
      <div className="Card" style={defstyle}>
        <div className="Title">{props.title}</div>
        <div className="Content">
            {props.children}
        </div>
      </div>
    );
}