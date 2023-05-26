function Question({ question, selectedOption, onOptionChange }) {
    const { id, text, options } = question;
  
    const handleOptionSelect = (optionId) => {
      onOptionChange(id, optionId); // Se pasa el questionId como primer argumento
    };
  
    return (
      <div>
        <h3>{text}</h3>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name={`question_${id}`}
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionSelect(option)}
            />
            {option}
          </label>
        ))}
      </div>
    );
}

export { Question };