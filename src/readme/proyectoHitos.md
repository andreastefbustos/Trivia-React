# Hito 1

Comienza intentando hacer la versión más simple de una trivia.

* 1 sola pantalla o vista.
* 2 preguntas con, al menos, 3 alternativas de respuesta cada una.
* 1 botón para responder y ver cuál es la alternativa correcta.
* No te dice si acertaste o no, sólo te dice cuál alternativa era la correcta.

## Sugerencia de micro-proyecto A: Prueba hacer el "esqueleto" estático en HTML

Una interfaz básica con:

* Dos preguntas con sus respectivas alternativas de respuesta en forma de radio buttons (🔘)
* El botón para “Responder y ver resultados”.

### Aprenderás:

Cómo construir una página básica HTML con elementos de formulario.

## Sugerencia de micro-proyecto B: Prueba darle algo de interacción

Cuando la usuaria dé click en alguno de los radio button, muéstrale un mensaje de alerta (alert) en el navegador que contenga el valor (texto) del radio button cliqueado.

Pista: Para mostrar un mensaje de alerta básico hay una función de JavaScript llamada “alert”. Esta función puede “escuchar” eventos del navegador como click y hacer algo cuando suceda usando onclick o addEventListener.

### Aprenderás:

* A detectar eventos en el navegador (los clicks de la usuaria) y hacer algo cuando sucedan.
* Identificar los elementos HTML que hay en el navegador y obtener sus valores y/o estados.

## Sugerencia de micro-proyecto C: Prueba darle interacción más cercana a la que pide el proyecto

En lugar de mostrar el valor de cada radio button cuando se le hace click, que esta vez solamente se marque el radio button seleccionado y que el mensaje alert con los valores de los radio button seleccionados se muestre cuando al hacer click en el botón “Responder y ver resultados”.

### Aprenderás:

* A detectar eventos en el navegador (los clicks de la usuaria) .
* Identificar los elementos HTML que hay en el navegador y obtener sus valores/estados.

# Hito 2

Agrega una pantalla simple de bienvenida con los siguientes elementos y características:

* Una caja de texto (input text) en la que escribe su nombre quien juega.
* Un botón de "jugar" o "comenzar" para ir a las preguntas.
* Esta vez deberán haber al menos 3 preguntas con sus respectivas alternativas de respuesta.
* Antes de las peguntas debe decir "Hola [el nombre que se escribió en la pantalla de bienvenida]"
* El botón para responder muestra la alternativa correcta para cada pregunta y, además, muestra si cada una de las respuestas fue correcta o incorrecta.
* Un botón para volver a jugar que vuelve a la pantalla inicial en la que se pide el nombre.

## Sugerencia de micro-proyecto: Prueba evaluar las respuestas de tu usuaria

Para determinar si las respuestas seleccionadas son correctas o incorrectas, necesitas predefinir cuál alternativa es la correcta para cada pregunta y evaluar (comparar) si la respuesta de tu usuaria coincide o no.

Pista: Lee sobre condicionales y control de flujo (if, else, else if).

### Aprenderás:

* A identificar los elementos HTML que hay en el navegador y obtener sus valores/estados.
* Comparar los valores/estados de los elementos y hacer algo según el resultado que obtengas de la comparación/evaluación.

# Hito 3

* Permítele a la usuaria elegir entre 2 tipos de preguntas después de escribir su nombre y antes de ir a responder. Por ejemplo, unas sobre comida y otras sobre cervezas.
* Agrega un puntaje a respuestas correctas e incorrectas y muestra un puntaje total al final.