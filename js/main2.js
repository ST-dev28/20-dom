/*
Susirasti logotipa

Susirasti hamburgeri

Paspaudus ant hamburgerio, logotipo elementui reikia uzdeti CSS class pavadinimu "big"

Antra karta paspaudus ant hamburgerio, logotipo elementui reikia nuimti CSS class pavadinimu "big"

Susirasti meniu elementa (nav)

Paspaudus ant hamburgerio, meniu elementui reikia uzdeti CSS class pavadinimu "visible"

Antra karta paspaudus ant hamburgerio, meniu elementui reikia nuimti CSS class pavadinimu "visible"
*/
/*
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
*/
/*
Pradinis rezultatas lygus nuliui

Susirasti minuso mygtuka

Susirasti pliuso mygtuka

Susirasti rezultato atvaizdavimo elementa

Paspaudus ant minuso, rezultatas mazinamas vienu vienetu

Paspaudus ant pliuso, rezultatas didinamas vienu vienetu
*/

const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const numberDOM = document.querySelector('.number');
const resetDOM = document.querySelector('.reset');

let rezultatas = 0;
minusDOM.addEventListener('click', () => {
    rezultatas = rezultatas - 1;
    numberDOM.innerText = rezultatas
})
plusDOM.addEventListener('click', () => {
    rezultatas = rezultatas + 1;   // arba rezultatas += 1
    numberDOM.innerText = rezultatas
})
resetDOM.addEventListener('click', () => {
    rezultatas = 0;
    numberDOM.innerText = rezultatas
})

/*  ---ARBA analogiskas variantas ---
minusDOM.addEventListener('click', () => {
    numberDOM.innerText = --rezultatas
})
plusDOM.addEventListener('click', () => {
    numberDOM.innerText = ++rezultatas
})
*/
