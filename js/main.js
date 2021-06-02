//console.log('labas');

/*
Pakeisti tekstini turini h1 elemente i "Labas vakaras!"
*/

const h1DOM = document.querySelector('h1');
h1DOM.innerText = 'Labas vakaras!';

/*
1. Jei mano vardo raide A-P
surasti paragrafa ir pakeisti teksta i "Siandien grazus oras!"

2. Jei mano vardo raide R-Z
surasti nuoroda ir pakeisti teksta i "Spausk mane!"

*/
// 2. 
const aDOM = document.querySelector('a');
aDOM.innerText = "Spausk mane!";
// 1.
const pDOM = document.querySelector('p');
pDOM.innerText = "Siandien grazus oras!";

/*
1. Surasti visus ingredientus ir ju pavadinimus atspausdinti i console

2. Visu ingredientu pavadinimai turi buti didziosiomis raidemis ir sudeti i array
Isspausdinti gauta array i console
Norimas rezultatas: ["MORKOS", "BULVES", "SVOGUNAS", "VANDUO", "DRUSKA"]
*/
// 1.
const listDOM = document.querySelectorAll('li');
console.log(listDOM);

for (let i = 0; i < listDOM.length; i++) {
    const ingredient = listDOM[i].innerText;
    console.log(ingredient);
}

// 2.
const ingredients = [];
for (let i = 0; i < listDOM.length; i++) {
    const ingredient = listDOM[i].innerText.toUpperCase();
    ingredients.push(ingredient);
}
console.log(ingredients);

