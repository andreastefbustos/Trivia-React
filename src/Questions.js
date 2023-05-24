import React, { useState } from "react";

function Questions({ playerName, questions }){
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);

    const handleOptionChange = (questionId, option) => {
        setSelectedAnswers((prevSelectedAnswers) => ({
          ...prevSelectedAnswers,
          [questionId]: option,
        }));
    };

    const handleResultClick = () => {
        setShowResult(true);
    };

    const calculateScore = () => {
        let score = 0;
    
        questions.forEach((question) => {
          if (selectedAnswers[question.id] === question.correctAnswer) {
            score++;
          }else{
            score--;
          }
        });
    
        return score;
    };
    
    return (
        <React.Fragment>
        <h1>Hola, {playerName}</h1>
        <h2>Preguntas:</h2>
        {questions.map((question) => (
            <div key={question.id}>
                <h3>{question.question}</h3>
                <div>
                    {question.options.map((option) => (
                        <label key={option}>
                            <input
                                type="radio"
                                value={option}
                                checked={selectedAnswers[question.id] === option}
                                onChange={() => handleOptionChange(question.id, option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>
        ))}

        <button onClick={handleResultClick}>Responder y Ver Resultados</button>
        {
            showResult && (
                <div>
                    <h2>Resultado:</h2>
                    {questions.map((question) => (
                        <div key={question.id}>
                            <p>
                                <strong>{question.question}</strong>
                            </p>
                            {selectedAnswers[question.id] === question.correctAnswer ? 
                                (<p>Respuesta Correcta</p>) : (<p>Respuesta incorrecta, la respuesta correcta es: {question.correctAnswer}</p>)
                            }
                        </div>
                    ))}
                    <p>Puntaje Total: {calculateScore()}</p>
                </div>
            )
        }
        </React.Fragment>
    );
}

export { Questions };