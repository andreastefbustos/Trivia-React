import React, { useState } from 'react';
import { questions } from './questionsData';
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

  const handleReturn = () => {
    setGameStarted(false);
    setPlayerName('');
  };

  if (gameStarted) {
    return <Questions playerName={playerName} questions={questions} onReturn={handleReturn}/>;
  }

  return (
      <React.Fragment>
        
          <WelcomeScreen onStart={handleStart} />
    
      </React.Fragment>
  );
}

export default App;
