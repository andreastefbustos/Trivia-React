import React, {useState} from 'react';
import './App.css';


function App() {
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');

  const handleQuestion1Change = (event) => {
    setQuestion1(event.target.value);
  };

  const handleQuestion2Change = (event) => {
    setQuestion2(event.target.value);
  };

  const onClickAnswer = () => {
    const message = `Question 1: ${question1} y Question 2: ${question2}`;
    alert(message);
  };

return (
      <React.Fragment>
        <h1>1. Cuál es la Flor Nacional de Venezuela?</h1>
        <label>
          <input 
            type="radio"  
            value="option1"
            checked={question1 === "option1"}
            onChange={handleQuestion1Change} 
          />
          Orquídea
        </label>
        <label>
          <input 
            type="radio"  
            value="option2"
            checked={question1 === "option2"}
            onChange={handleQuestion1Change} 
          />
          Girasol
        </label>
        <label>
          <input 
            type="radio" 
            value="option3"
            checked={question1 === "option3"}
            onChange={handleQuestion1Change}
          />
          Hortensia
        </label>

        <h1>2. Cuál es el clima que más predomina en México?</h1>
        <label>
          <input 
            type="radio"  
            value="option1"
            checked={question2 === "option1"}
            onChange={handleQuestion2Change} 
          />
          Templado
        </label>
        <label>
          <input 
            type="radio"  
            value="option2"
            checked={question2 === "option2"}
            onChange={handleQuestion2Change} 
          />
          Templado-Sub-húmedo
        </label>
        <label>
          <input 
            type="radio"
            value="option3"
            checked={question2 === "option3"}
            onChange={handleQuestion2Change}
          />
          Sub-húmedo
        </label>

        {/* <h1>3. Cúal es la ciudad originaria de los Beatles?</h1>
        <label>
          <input type="radio" name="answer3" value="a" />Bristol, United Kingdom
        </label>
        <label>
          <input type="radio" name="answer3" value="b" />Londres, United Kingdom
        </label>
        <label>
          <input type="radio" name="answer3" value="c" />Liverpool, United Kingdom
        </label> */}

        <button onClick={onClickAnswer}>Responder y Ver Resultados</button>

      </React.Fragment>
      
  );
}

export default App;
