/*
Sriuba, pagrindinis patiekalas ir desertas yra checkbox'ai, kuriuos pazymejus,
klientas nurodo, jog nori juos uzsisakyti.

Gerimai yra pasirenkami vienas is nurodytu (radio button).

Submit'inus forma `<div class="order">` elemente turi buti suformuota zinute,
kurios sablonas yra toks:
"Uzsakovas vardu [vardas] [nori/nenori] sriubos, [nori/nenori] pagrindinio patiekalo,
[nori/nenori] deserto ir [gerimo pavadinimas] yra pasirinktas gerimas."

`input` elementu tipus pasikoreguoti pagal poreiki.

Reikia graziai susitvarkyti su situacija, kai klientas nenurodo savo vardo

Reikia graziai susitvarkyti su situacija, kai klientas nepasirenka gerimo

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
const customerName = name => customer.value === '' ? 'nenurodes vardo' : 'vardu ' + customer.value;

function drinkChoise(drink) {

    for (let i = 0; i < gerimaiDOM.length; i++) {
        if (gerimaiDOM[i].checked === true) return drinkName = gerimaiDOM[i].value + ' yra pasitinktas gerimas';
        if (gerimaiDOM[i].checked != true) return 'nenori jokio gerimo';
        //return '--';
    }
}

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();                    // isjungia delfault savybes, kad nepersikrautu
    order.innerText = `Uzsakovas ${customerName(customer.value)}, ${customerChoise(sriuba)} sriubos, ${customerChoise(patiekalas)} pagrindinio patiekalo,  ${customerChoise(desertas)} deserto ir ${drinkChoise(gerimaiDOM)}.`
})
