/*
Pradinis rezultatas lygus nuliui

Susirasti minuso mygtuka

Susirasti pliuso mygtuka

Susirasti reset mygtuka

Susirasti rezultato atvaizdavimo elementa

Paspaudus ant minuso, rezultatas mazinamas vienu vienetu

Paspaudus ant pliuso, rezultatas didinamas vienu vienetu

Paspaudus ant reset, rezultatas turi grizti i nuli

Susirasti h1 elementa

Padaryti, jog paspaudus viena is mygtuku (pliusas, minusas) h1 elemento tekstas pasikeistu i "Žaidimas progrese"

Jei zaidimas yra nu'reset'inamas - h1 tekstas grizta i pradine reiksme
*/

const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const numberDOM = document.querySelector('.number');
const resetDOM = document.querySelector('.reset');
const h1DOM = document.querySelector('h1');

let rezultatas = 0;

minusDOM.addEventListener('click', () => {
    rezultatas = rezultatas - 1;
    numberDOM.innerText = rezultatas
    h1DOM.innerText = 'Žaidimas progrese';
})
plusDOM.addEventListener('click', () => {
    rezultatas = rezultatas + 1;   // arba rezultatas += 1
    numberDOM.innerText = rezultatas
    h1DOM.innerText = 'Žaidimas progrese';
})
resetDOM.addEventListener('click', () => {
    rezultatas = 0;
    numberDOM.innerText = rezultatas
    h1DOM.innerText = 'Te prasideda žaidynės! 🥳';
})

/*  ---ARBA analogiskas variantas ---
minusDOM.addEventListener('click', () => {
    numberDOM.innerText = --rezultatas
})
plusDOM.addEventListener('click', () => {
    numberDOM.innerText = ++rezultatas
})
*/
