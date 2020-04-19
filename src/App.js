import React, { useState } from 'react';
import DrumPad from './DrumPad';

const bankOne = [
  {
    keyTrigger: 'Q',
    id: 'Snare-1',
    url:
      'https://nick-react-drum-machine.s3-us-west-2.amazonaws.com/assets/606-snare1.wav',
  },
  {
    keyTrigger: 'W',
    id: 'Snare-2',
    url:
      'https://nick-react-drum-machine.s3-us-west-2.amazonaws.com/assets/606-snare2.wav',
  },
  {
    keyTrigger: 'E',
    id: 'Kick-1',
    url:
      'https://nick-react-drum-machine.s3-us-west-2.amazonaws.com/assets/606-kick1.wav',
  },
  {
    keyTrigger: 'A',
    id: 'Kick-2',
    url:
      'https://nick-react-drum-machine.s3-us-west-2.amazonaws.com/assets/606-kick2.wav',
  },
  {
    keyTrigger: 'S',
    id: 'Tom-1',
    url:
      'https://nick-react-drum-machine.s3-us-west-2.amazonaws.com/assets/606-tom1.wav',
  },
  {
    keyTrigger: 'D',
    id: 'Tom-2',
    url:
      'https://nick-react-drum-machine.s3-us-west-2.amazonaws.com/assets/606-tom2.wav',
  },
  {
    keyTrigger: 'Z',
    id: 'Cymbal-1',
    url:
      'https://nick-react-drum-machine.s3-us-west-2.amazonaws.com/assets/606-cymbal1.wav',
  },
  {
    keyTrigger: 'X',
    id: 'Cymbal-2',
    url:
      'https://nick-react-drum-machine.s3-us-west-2.amazonaws.com/assets/606-cymbal2.wav',
  },
  {
    keyTrigger: 'C',
    id: 'Cymbal-3',
    url:
      'https://nick-react-drum-machine.s3-us-west-2.amazonaws.com/assets/606-cymbal3.wav',
  },
];

function App() {
  const [displayText, setDisplayText] = useState({
    value: 'SHADDY'
  })

  const displayTextHandler = (text) => {
    setDisplayText({ value: text })
  }

  const displayDefaultHandler = () => {
    setDisplayText({ value: 'SHADDY'})
  }

  return (
    
      <div className="drum-container rounded" onMouseLeave={displayDefaultHandler} style={{ width: '400px' }}>
      <div className="drum-display p-2 mt-4 rounded" style={{ width: '350px', height: '75px' }}>
        <h1>{displayText.value}</h1>
        </div>
      <div>Controls</div>
      <div className="drum-pads-outer" style={{ width: '375px' }}>
        <div className="d-flex flex-wrap justify-content-center">
          {bankOne.map((item, index) => (
            <DrumPad key={index} item={item} displayTextHandler={displayTextHandler} />
          ))}
        </div>
        <div>Bottom</div>
      </div>
    </div>
    
  );
}

export default App;
