import React, { useState } from 'react';
import { WelcomeScreen } from '../MainScreen/welcomeScreen';
import { QuestionTypeSelection } from '../Questions/QuestionTypeSelection';
import { QuestionsView } from '../Questions/QuestionsView.js'


function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [questionType, setQuestionType] = useState('');

  const handleStart = (name) => {
    setGameStarted(true);
    setPlayerName(name);
  };

  const handleReturn = () => {
    setGameStarted(false);
    setPlayerName('');
    setQuestionType(''); // Restablecer el estado de questionType a una cadena vacía
  };

  const handleTypeSelect = (type) => {
    setQuestionType(type);
  };

  if (!gameStarted) {
    return <WelcomeScreen onStart={handleStart} />;
  } else if (!questionType) {
    return <QuestionTypeSelection onSelectType={handleTypeSelect} />;
  } else {
    return <QuestionsView playerName={playerName} questionType={questionType} onReturn={handleReturn}/>;
  }
}

export default App;
