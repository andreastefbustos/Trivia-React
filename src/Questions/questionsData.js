function getQuestionByType(questionType){
    if(questionType === 'type1'){
        return[
            {
                id: 1,
                text: "Cuál es la Flor Nacional de Venezuela?",
                options: ["Orquídea", "Girasol", "Hortensia"],
                correctAnswer: "Orquídea"
            },
            {
                id: 2,
                text: "Cuál es el clima que más predomina en México?",
                options: ["Templado", "Templado-Sub-húmedo", "Sub-húmedo"],
                correctAnswer: "Templado-Sub-húmedo"
            },
            {
                id: 3,
                text: "Cúal es la ciudad originaria de los Beatles?",
                options: ["Bristol, United Kingdom", "Londres, United Kingdom", "Liverpool, United Kingdom"],
                correctAnswer: "Liverpool, United Kingdom"
            }
        ];
    }else if(questionType === 'type2'){
        return[
            {
                id: 1,
                text: "Cuál es la etiqueta que se utiliza en HTML para colocar un texto como párrafo?",
                options: ["a", "p", "h1"],
                correctAnswer: "p"
            },
            {
                id: 2,
                text: "En CSS como se le puede cambiar el fondo a la página?",
                options: ["color", "background-color", "back-ground"],
                correctAnswer: "background-color"
            },
            {
                id: 3,
                text: "Con cuál etiqueta se relaciona el HTML con JAVASCRIPT?",
                options: ["Con la etiqueta 'body'", "Con la etiqueta 'link'", "Con la etiqueta 'script'"],
                correctAnswer: "Con la etiqueta 'script'"
            }
        ];
    }
}

export { getQuestionByType };