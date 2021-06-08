/*
Sukurti funkcija pavadinimu `generuotiSocials`, kuri priima selector'iu 
ir sarasa fontAwesome ikonu klasiu.

Selector'ius nurodo, kuriame elemente reikes istatyti sugeneruota funkcijos turini

Priimamas ikonu sarasas turi buti ne tuscias array

Funkcijos uzduotis, pagal duota ikonu sarasa sugeneruoti `<i>` elementus, kuriuose 
`class` atribute bus nurodytos atitinkamu fontAwesome ikonu klasiu pavadinimai

Visas sugeneruotas tekstinis HTML turi buti istatytas i nurodyta selector'iaus elementa
*/

const icons = ['facebook', 'twitter', 'linkedin'];

function generuotiSocials(selector, list) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('ERROR: nerastas elementas');
        return false;
    }
    if (list === '') {
        console.error('ERROR: sarasas negali buti tuscias');
        return false;
    }

    let HTML = '';
    for (let i = 0; i < list.length; i++) {
        //console.log(i);
        const iconsFull = 'fa fa-' + icons[i];
        HTML += `<i class="${iconsFull}"></i>`;
        //console.log(HTML);
    }
    DOM.innerHTML = HTML;     //sugeneruoja HTML
}


generuotiSocials('.socials', icons);
