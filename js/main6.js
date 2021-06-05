/*
Zinutes ivesties lauko teksto spalva turi buti raudona (tai realizuoti su JS, bet ne per CSS).

Formoje parasyta teksto zinute, po `submit` mygtuko paspaudimo turi buti atvaizduotas `<span>` elemente.

Spalvoms skirti laukai turi tureti nurodyta atitinkama tipa (zr. dokumentacija).

Taip pat, tam `<span>` elementui turi buti priskirtos fono ir teksto spalvos is atitinkamu formos lauku.

`input` elemento reiksme istraukia kreipiantis i to elemento `value` parametra, pvz.: `element.value`

Norint elementui priskirti papildoma stiliu, reikia rasyti, pvz.: `element.style.backgroundColor = "red"`

Po ivesto teksto nuskaitymo, isvalyti ivesties lauka `input`
*/

const buttonDOM = document.querySelector('button');
const inputDOM = document.querySelector('input');
const spanDOM = document.querySelector('span');

const inputMessageDOM = document.querySelector('#message');
const backgroundColor = document.querySelector('#bg-color');
const textColor = document.querySelector('#text-color');    // html suteiktas input type=color ir value='#spalva'

inputDOM.style.color = 'red';

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();                    // isjungia delfault savybes, kad nepersikrautu
    spanDOM.innerText = inputDOM.value;
    inputDOM.value = '';

    // priskiriam elementui spalvas
    spanDOM.style.color = textColor.value;                  // arba  =`${textColor.value}`;
    spanDOM.style.backgroundColor = backgroundColor.value;  //   arba =`${backgroundColor.value}`;
})
