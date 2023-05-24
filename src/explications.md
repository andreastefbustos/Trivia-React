# Componente WelcomeScreen

## handlePlayClick

La función handlePlayClick es una función que se ejecuta cuando se hace clic en el botón "Jugar" en el componente WelcomeScreen. Aquí está su funcionamiento:

1. Primero, se verifica si el nombre ingresado (almacenado en el estado name) no está vacío. Se utiliza name.trim() para eliminar los espacios en blanco al principio y al final del nombre ingresado y luego se compara con !== '' para verificar si no está vacío.

2. Si el nombre no está vacío, se llama a la función onStart que se pasó como prop al componente WelcomeScreen. En este caso, onStart es una función que se define en el componente padre (App) y se pasa al componente WelcomeScreen como prop onStart.

3. Al llamar a onStart(name), se envía el nombre ingresado como argumento a la función onStart. Esto permite que el componente padre (App) reciba el nombre y realice acciones adicionales, como establecer el estado gameStarted y guardar el nombre del jugador.

En resumen, la función handlePlayClick se encarga de verificar si el nombre ingresado no está vacío y luego llama a la función onStart para enviar el nombre al componente padre (App). Esto permite que el componente padre tome las acciones necesarias en respuesta al evento de inicio del juego.

# Componente App

## handleStart

La función handleStart es necesaria para manejar el evento de inicio del juego y realizar las acciones correspondientes en el componente App. Aquí te explico el propósito de cada línea de código:

1. `setGameStarted(true)`: Esta línea de código actualiza el estado `gameStarted` a `true`. Al establecer `gameStarted` en `true`, indicamos que el juego ha comenzado.

2. `setPlayerName(name)`: Esta línea de código actualiza el estado `playerName` con el valor del nombre ingresado por el jugador. El parámetro `name` es el nombre que se pasa a la función `handleStart`. Al almacenar el nombre en el estado `playerName`, podemos acceder a él en otras partes del componente o pasarlo como prop a otros componentes que lo necesiten.

En resumen, la función `handleStart` se encarga de actualizar los estados `gameStarted` y `playerName` en el componente `App`. Al llamar a esta función, se establece `gameStarted` en `true`, lo que indica que el juego ha comenzado, y se guarda el nombre ingresado por el jugador en el estado `playerName`. Estas actualizaciones de estado permiten controlar el flujo del juego y utilizar el nombre del jugador en otras partes del componente o en otros componentes relacionados.

# Condición if (gameStarted)

La condición if (gameStarted) y la instrucción return `<Questions playerName={playerName} />`; en el componente App se utilizan para controlar el flujo de la aplicación y mostrar el componente Questions cuando el juego ha comenzado.

Aquí está cómo funciona:

1. La variable gameStarted es un estado del componente App que se inicializa como false. Cuando el juego comienza y se llama a la función handleStart con un nombre válido, se actualiza el estado gameStarted a true dentro de esa función.

2. La condición if (gameStarted) verifica si gameStarted es true. Si es así, significa que el juego ha comenzado y es momento de mostrar las preguntas al jugador.

3. Cuando la condición if (gameStarted) se cumple, se ejecuta la instrucción return `<Questions playerName={playerName} />`;. Esto devuelve el componente Questions y pasa el nombre del jugador (playerName) como una prop llamada playerName. De esta manera, el componente Questions puede acceder al nombre del jugador y utilizarlo según sea necesario.

En resumen, cuando gameStarted es true, el componente App renderiza el componente Questions, pasando el nombre del jugador como prop. Esto permite que el componente Questions muestre las preguntas y utilice el nombre del jugador en su lógica interna.
