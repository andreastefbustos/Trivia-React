import React from "react";

function QuestionTypeSelection({ onSelectType }){
    const handleTypeSelect = (type) => {
        onSelectType(type);
    }

    return (
        <React.Fragment>
            <p>Seleccione el tipo de pregunta:</p>
            <button onClick={() => handleTypeSelect('type1')}>CULTURA GENERAL</button>
            <button onClick={() => handleTypeSelect('type2')}>HTML, CSS Y JAVASCRIPT</button>
        </React.Fragment>
    );
}

export { QuestionTypeSelection };