/*
Susirasti logotipa

Susirasti hamburgeri

Paspaudus ant hamburgerio, logotipo elementui reikia uzdeti CSS class pavadinimu "big"

Antra karta paspaudus ant hamburgerio, logotipo elementui reikia nuimti CSS class pavadinimu "big"

Susirasti meniu elementa (nav)

Paspaudus ant hamburgerio, meniu elementui reikia uzdeti CSS class pavadinimu "visible"

Antra karta paspaudus ant hamburgerio, meniu elementui reikia nuimti CSS class pavadinimu "visible"
*/

const logoDOM = document.querySelector('.logo');
const hamburgerDOM = document.querySelector('.hamburger');
const navDOM = document.querySelector('nav');

console.log(logoDOM);
console.log(hamburgerDOM);
console.log(navDOM);

hamburgerDOM.addEventListener('click', () => {
    logoDOM.classList.toggle('big');
    navDOM.classList.toggle('visible');
})