/*
Kiekviena komanda turi savo atskiras formas, kuriu deka yra
registruojami pelnyti taskai

Kiekviena karta pelnius tasku, tai turi atsispindeti lentoje
*/
const lentaDOM = document.querySelector('.lenta');
const rezultatasNamuDOM = lentaDOM.querySelector('[data-komanda="namu"]');
const rezultatasSveciuDOM = lentaDOM.querySelector('[data-komanda="sveciu"]');

const aiksteleDOM = document.querySelector('.aikstele');
const komandaNamuDOM = aiksteleDOM.querySelector('[data-komanda="namu"]');
const komandaSveciuDOM = aiksteleDOM.querySelector('[data-komanda="sveciu"]');

const buttonNamuDOM = komandaNamuDOM.querySelectorAll('button');
const buttonSveciuDOM = komandaSveciuDOM.querySelectorAll('button');

console.log(rezultatasNamuDOM);
console.log(buttonNamuDOM);
console.log(komandaSveciuDOM);


let namuKomandaTaskai = 0;
for (let i = 0; i < buttonNamuDOM.length; i++) {
    const mygtukas = buttonNamuDOM[i];
    mygtukas.addEventListener('click', () => {
        //console.log('taskai', i + 1);
        namuKomandaTaskai += i + 1;
        rezultatasNamuDOM.innerText = namuKomandaTaskai;
    })
}

let sveciuKomandaTaskai = 0;
for (let i = 0; i < buttonSveciuDOM.length; i++) {
    const mygtukas = buttonSveciuDOM[i];
    mygtukas.addEventListener('click', () => {
        //console.log('taskai', i + 1);
        sveciuKomandaTaskai += i + 1;
        rezultatasSveciuDOM.innerText = sveciuKomandaTaskai;
    })
}

// ----ARBA trumpesnis variantas---
let namuRezultatas = 0;
let sveciuRezultatas = 0;

for (let i = 0; i < 3; i++) {
    buttonNamuDOM[i].addEventListener('click', () => {
        namuRezultatas += i + 1;
        rezultatasNamuDOM.innerText = namuRezultatas;
    })

    buttonSveciuDOM[i].addEventListener('click', () => {
        sveciuRezultatas += i + 1;
        rezultatasSveciuDOM.innerText = sveciuRezultatas;
    })
}
