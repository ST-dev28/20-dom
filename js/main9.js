/*
Susirandame `<div class="icons">` elementa

I "icons" elementa irasyti fortAwesome social ikonas: facebook, linkedin, twitter

Susirandame `<div class="lenta">` elementa

Sukurti funkcija pavadinimu `generuotiLenta`, kuri priima selector'iu ir skaiciu.

Selector'ius nurodo, kuriame elemente reikes istatyti sugeneruota funkcijos turini

Priimamas skaicius gali buti tik teigiamas sveikasis skaicius (jokiu begalybiu)

Funkcijos uzduotis, pagal duota skaiciuka sugeneruoti `<div>` elementu sarasa ir
kiekviename ju irasyti eiles numeri (1, 2, 3...)
*/


function genetuotiLenta(selector, count) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: nerastas elementas');
        return false;
    }
    if (count < 0 ||
        count % 1 !== 0) { // jei suliekana, salygos neatitinka
        console.error('ERROR: skaicius turi buti teigiamas');
        return false;
    }

    let HTML = '';
    for (let i = 1; i <= 4; i++) {
        //console.log(i);
        HTML += `<div>${i}</div>`;
        //console.log(HTML);
    }
    DOM.innerHTML = HTML;     //sugeneruoja HTML
}


genetuotiLenta('div', 4);  // ziurim konsoleje, ka randa
