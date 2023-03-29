import React from 'react';
import './App.css';
import Index from './components';

function App() {
  return (
    <React.Fragment>
      <div className='header'>
        <img src='./images/title-page.png'/>
      </div>
      <Index />
      <img src='./images/background.jpg' className='background-art' />
    </React.Fragment>
  );
}

export default App;
