# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

This challenge was made using just HTML, CSS (SASS, Flexbox and Grid) and for first time JavaScrip.

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size, mainly differentiating 2 sizes: mobile 375px and desktop since 800px

### Screenshot

![Mobile version screenshot](./screenshots/mobile-screenshot.png)

![Destop version screenshot](./screenshots/desktop-screenshot.png)

### Links

-   Solution URL: [Github repository](https://github.com/AndresRicardo/faq-accordion-card-main)
-   Live Site URL: [Github page](https://andresricardo.github.io/faq-accordion-card-main/)

## My process

Until now i am just learning web development, by now i just know a little bit of html, css (flexbox and grid included), sass and Javascript, not css frameworks, not css post-processores, not Js frameworks.

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Css Flexbox
-   Css Grid
-   Css pre-processor sass
-   JavaScrip
-   Mobile-first workflow

### What I learned

doing this challenge i learned basics of DOM manage with JavaScritp.

```javascript
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
```

### Continued development

Even if to me is more complex design mobile first, i preffer to continue develop of this way.
By now in short time, my next skills to develop are css frameworks (boostrap or tailwind), css post-processors (postcss), pure Javascript, typescript and css-framework (angular).

### Useful resources

-   [Developer mozilla](https://developer.mozilla.org/es/docs/Web/CSS/) - This helped me like general reference.

## Author

-   Website - [Richi](https://github.com/AndresRicardo)
-   Frontend Mentor - [@AndresRicardo](https://www.frontendmentor.io/profile/AndresRicardo)

## Acknowledgments

To my mom and dad jajajajja.
