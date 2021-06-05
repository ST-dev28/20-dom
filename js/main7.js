/*
Sriuba, pagrindinis patiekalas ir desertas yra checkbox'ai, kuriuos pazymejus,
klientas nurodo, jog nori juos uzsisakyti.

Gerimai yra pasirenkami vienas is nurodytu (radio button).

Submit'inus forma `<div class="order">` elemente turi buti suformuota zinute,
kurios sablonas yra toks:
"Uzsakovas vardu [vardas] [nori/nenori] sriubos, [nori/nenori] pagrindinio patiekalo,
[nori/nenori] deserto ir [gerimo pavadinimas] yra pasirinktas gerimas."

`input` elementu tipus pasikoreguoti pagal poreiki.
*/

const buttonDOM = document.querySelector('button');
const order = document.querySelector('.order');
const customer = document.querySelector('#customer');
const sriuba = document.querySelector('#sriuba');
const patiekalas = document.querySelector('#patiekalas');
const desertas = document.querySelector('#desertas');
const gerimaiDOM = document.querySelectorAll('input[name="gerimas"]');
//console.log(gerimaiDOM);

const customerChoise = item => item.checked ? 'nori' : 'nenori';

function drinkChoise(drink) {
    let drinkName = ''
    for (let i = 0; i < gerimaiDOM.length; i++) {
        if (gerimaiDOM[i].checked === true) return drinkName = gerimaiDOM[i].value;
        return '--';
    }
}

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();                    // isjungia delfault savybes, kad nepersikrautu
    order.innerText = `Uzsakovas vardu ${customer.value}, ${customerChoise(sriuba)} sriubos, ${customerChoise(patiekalas)} pagrindinio patiekalo,  ${customerChoise(desertas)} deserto ir ${drinkChoise(gerimaiDOM)} yra pasirinktas gerimas.`
})
