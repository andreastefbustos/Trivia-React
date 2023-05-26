import React, { useState } from "react";
import { getQuestionByType } from "./questionsData";
import { Question } from "./Question";

function QuestionsView({ playerName, questionType, onReturn }){
    const [selectOption, setSelectOption] = useState({});
    const [showResult, setShowResult] = useState(false);
    const questions = getQuestionByType(questionType)

    const handleOptionChange = (questionId, optionId) => {
        setSelectOption((prevOptions) => ({
          ...prevOptions,
          [questionId]: optionId,
        }));
    };

    const handleSubmit = () => {
        setShowResult(true);
    };

    const calculateScore = () => {
        let score = 0;
    
        questions.forEach((question) => {
          if (selectOption[question.id] === question.correctAnswer) {
            score++;
          }
        });
    
        return score;
    };
    
    return (
        <React.Fragment>
            <h1>Hola, {playerName}</h1>
            <h2>Preguntas:</h2>
            {questions.map((question) => (
            <Question
                key={question.id}
                question={question}
                selectedOption={selectOption[question.id]}
                onOptionChange={handleOptionChange}
            />
            ))}

            <button onClick={handleSubmit}>Responder y Ver Resultados</button>
            {showResult && (
                <div>
                    <h2>Resultado:</h2>
                    {questions.map((question) => (
                        <div key={question.id}>
                            <p>
                            <strong>{question.text}</strong>
                            </p>
                            {selectOption[question.id] === question.correctAnswer ? (<p>Respuesta correcta</p>) : (<p>Respuesta incorrecta, la respuesta correcta es: {question.correctAnswer}</p>)}
                        </div>
                    ))}
                    <p>Puntaje total: {calculateScore()}</p>
                </div>
            )}

            <button onClick={onReturn}>Volver a Jugar</button>
        </React.Fragment>
    );
}

export { QuestionsView };