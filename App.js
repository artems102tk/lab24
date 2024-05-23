import React from 'react';
import './App.css';
import HobbyClassComponent from './HobbyClassComponent';
import HobbyFunctionComponent from './HobbyFunctionComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HobbyClassComponent />
        <HobbyFunctionComponent />
      </header>
    </div>
  );
}

export default App;
