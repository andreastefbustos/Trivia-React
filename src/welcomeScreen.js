import React, { useState } from "react";

function WelcomeScreen({ onStart }){
    const [name, setName] = useState('');
    
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePlayClick = () => {
        if (name.trim() !== '') {
          onStart(name);
        }else {
            alert("Es necesario ingresar un nombre de usuario");
        }
    };
    
    return(
        <React.Fragment>
            <h1>Bienvenido al Juego</h1>
            <label>
                Nombre:
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
            />
            </label>
            <br />
            <button onClick={handlePlayClick}>Jugar</button>
        </React.Fragment>
    );
}

export { WelcomeScreen };