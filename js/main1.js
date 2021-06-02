console.log('labas');

/* -A-
Pakeisti tekstini turini h1 elemente i "Labas vakaras!"
*/
/*
const h1DOM = document.querySelector('h1');
h1DOM.innerText = 'Labas vakaras!';
*/
/* -B-
1. Jei mano vardo raide A-P -->
surasti paragrafa ir pakeisti teksta i "Siandien grazus oras!"

2. Jei mano vardo raide R-Z -->
surasti nuoroda ir pakeisti teksta i "Spausk mane!"
*/
/* // 2.
const aDOM = document.querySelector('a');
aDOM.innerText = "Spausk mane!";
// 1.
const pDOM = document.querySelector('p');
pDOM.innerText = "Siandien grazus oras!";
*/
/* -C-
1. Surasti visus ingredientus ir ju pavadinimus atspausdinti i console

2. Visu ingredientu pavadinimai turi buti didziosiomis raidemis ir sudeti i array
Isspausdinti gauta array i console
Norimas rezultatas: ["MORKOS", "BULVES", "SVOGUNAS", "VANDUO", "DRUSKA"]
*/
/*// 1.
const listDOM = document.querySelectorAll('li');
console.log(listDOM);

for (let i = 0; i < listDOM.length; i++) {
    const ingredient = listDOM[i].innerText;
    console.log(ingredient);
}
*/
/*
// 2.
const ingredients = [];
for (let i = 0; i < listDOM.length; i++) {
    const ingredient = listDOM[i].innerText.toUpperCase();
    ingredients.push(ingredient);
}
console.log(ingredients);
*/
/* -D-
1. Surasti antraste (siuo atveju h2)
Prideti prie jos CSS class, kuri pakeicia teksto spalva i raudona

Surasti visus ingridientus.
Kiekvienam ingridientui prideti CSS class pavadinimu darzove
*/
/*// 1.
const h2DOM = document.querySelector('h2');
h2DOM.classList.add('antraste');
*/
// 2. - neatitinka uzduoties, nors rezultatas gaunasi -
//const ulDOM = document.querySelector('ul');
//ulDOM.classList.add('darzove');
/*
// 2.
const liDOM = document.querySelector('li'); // dokumente ieskau su selektoriumi elementO 'li'
for (let i = 0; i < liDOM.length; i++) {
    liDOM[i].classList.add('darzove');
}


const ingredients = document.querySelectorAll('li');
for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].classList.add('darzove');
}
*/
/* -E-
1. Surasti antraste (siuo atveju h2) pakeisti i 'Zuikio darzas'

2. Surasti visus ingridientus.
Kiekvienam ingridientui pakeisti pavadinima i 'Israuta darzove'
*/
/*
// 1. 
const h2DOM = document.querySelector('h2');
h2DOM.innerText = 'Zuikio darzas';
*/
/*
// 2.
const darzovesDOM = document.querySelectorAll('li');  //vietoj 'darzovesDOM' g.b. 'listDOM' ar tiesiog 'darzoves' ar kt.  
for (let i = 0; i < darzovesDOM.length; i++) {
    darzovesDOM[i].innerText = ('Israuta darzove');
}
*/
/* -F-
1. Surasti antraste (siuo atveju h2)
pErrasyti h2 teksta i "Zuikio pomidoru darzas"
Padaryti, kad h2 elementas turetu CSS class 'pavadinimas'

2. Surasti visas darzoves.
a) Kiekvienos darzoves teksta pakeisti i "Pomidoras"
b) Kiekvienai darzovei suteiti CSS class 'pomidoras'
*/
// 1. 
const h2DOM = document.querySelector('h2');
h2DOM.innerText = 'Zuikio pomidoru darzas';
h2DOM.classList.add('pavadinimas');
/*
// 2.a)
const darzoves = document.querySelectorAll('li');  // console.log(darzoves);
for (let i = 0; i < darzoves.length; i++) {        // console.log(darzoves);
    darzoves[i].innerText = ('Pomidoras');
}

// 2.b)
const vegetables = document.querySelectorAll('li');
for (let i = 0; i < vegetables.length; i++) {
    vegetables[i].classList.add('pomidoras');
}
*/
// ARBA 2 a ir b . viename
const darzoves = document.querySelectorAll('li');
for (let i = 0; i < darzoves.length; i++) {
    darzoves[i].innerText = ('Pomidoras');
    darzoves[i].classList.add('pomidoras');
}