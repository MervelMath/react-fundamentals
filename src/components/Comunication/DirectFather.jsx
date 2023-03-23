import React from 'react'
import DirectSon from './DirectSon';

export default (props) => {
  return (
    <div>
      <DirectSon name="Matheus" age={21} nerd={true} />
      <DirectSon name="Gabriel" age={19} nerd={true} />
    </div>
  );
};