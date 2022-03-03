console.log("js bien linkeado");

let question = document.querySelectorAll(".question");
let qButton = document.querySelectorAll(".qButton");
var answer = document.querySelectorAll(".answer");

//para alternar el estado de la respuesta (visible o oculto)
function togleDisplay(element) {
    if (element.style.display === "block") {
        element.style.display = "none";
    } else element.style.display = "block";
}

//para alternar el fontWeight de la pregunta (bold o normal)
function togleWeight(element) {
    if (element.style.fontWeight !== "bold") element.style.fontWeight = "bold";
    else element.style.fontWeight = "normal";
}

//para alternar el icono del qButton (flecha arriba, flecha abajo)
function togleArrow(element) {
    if (element.textContent !== "expand_less")
        element.textContent = "expand_less";
    else element.textContent = "expand_more";
}

//ciclo asociar a cada qButton la funcionalidad (mostrar u ocultar respuesta) cuando se le detecte un click
for (let i = 0; i < qButton.length; i++) {
    qButton[i].addEventListener("click", (elemento) => {
        togleDisplay(answer[i]);
        togleWeight(question[i]);
        togleArrow(qButton[i]);
    });
}

//ciclo asociar a cada pregunta la funcionalidad (mostrar u ocultar respuesta) cuando se le detecte un click
for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", (elemento) => {
        togleDisplay(answer[i]);
        togleWeight(question[i]);
        togleArrow(qButton[i]);
    });
}
