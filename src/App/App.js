import React, { useState } from 'react';
import { questions } from '../Questions/questionsData';
import { WelcomeScreen } from '../MainScreen/welcomeScreen';
import { Questions } from '../Questions/Questions.js'


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
