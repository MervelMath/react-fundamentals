import React from 'react'

export default (properties) => {

    const {min, max} = properties

    const randomNumber = getRandomArbitrary(min, max);
    
    return <div>Random value: {randomNumber}</div>;
}

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}