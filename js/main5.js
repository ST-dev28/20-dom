/*
Formoje parasytas tekstas, po `submit` mygtuko paspaudimo turi buti atvaizduotas
`<span>` elemente.

`input` elemento reiksme istraukia kreipiantis i to elemento `value` parametra,
pvz.: `element.value`
*/

let tekstas = '';

const buttonDOM = document.querySelector('button');
const inputDOM = document.querySelector('input');
const spanDOM = document.querySelector('span');


buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    spanDOM.innerText = inputDOM.value;
    inputDOM.value = '';  //antra karta paspaudus 'submit' istrina teksta
    //console.log('test');
})
