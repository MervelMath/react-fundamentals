import React from 'react'

export default function WithParameter(properties){
  //console.log(params);
  //You can't change properties value. They are read only!!! //To change properties value
  //put their value in other variable.

  const status = properties.note >= 6 ? 'Approved' : 'Reproved';

  return (
    <div>
      <h2>{properties.name}</h2>
      <p>Your status is: <strong>{status}</strong></p>
    </div>
  );
}