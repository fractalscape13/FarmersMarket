import React from 'react';
import './App.css';
import Header from './Header';
import Days from './Days';
import Months from './Months';
// import Schedule from './data/schedule.js';
// import Produce from './data/produce.js';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Days />
      <Months />
    </React.Fragment>

  );
}

export default App;
