import './App.css';
import React from 'react';
import padsData from '../pads';
import Pad from './components/pad.jsx';

function App(props) {
  const [pads, setPads] = React.useState(padsData);

  const buttonElements = pads.map(pad => (
    <Pad 
      key={pad.id} 
      color={pad.color} 
      on={pad.on}
      toggle={() => togglePad(pad.id)}
    />
  ));

  return (
    <>
      <main>
        <div className='pad-container'> 
          {buttonElements}
        </div>
      </main>
    </>
  );
}

export default App;