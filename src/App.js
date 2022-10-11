/* eslint-disable */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './component/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
