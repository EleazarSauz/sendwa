import React from 'react';

import FormWa from './form'
import './App.css'

function App() {
  return (
    <>
    <div className="layout" >
      <FormWa/>
    </div>
    <footer>
        made with &nbsp;
        <i className="fa fa-2x fa-heart animate__pulse infinite" style={{color: "#ef4e5b"}}></i>
        &nbsp;
        by: <a href="https://twitter.com/EleazarSauz" target="_blank" rel="noopener noreferrer">@EleazarSauz</a>
    </footer>
    </>
  );
}

export default App;
