import React, { useState } from 'react';
import { WelcomeScreen } from './welcomeScreen';
import { Questions } from './Questions.js'
import './App.css';


function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState('');

  const handleStart = (name) => {
    setGameStarted(true);
    setPlayerName(name);
  };

  if (gameStarted) {
    return <Questions playerName={playerName} />;
  }
  
  return (
      <React.Fragment>
        
          <WelcomeScreen onStart={handleStart} />
    
      </React.Fragment>
  );
}

export default App;
