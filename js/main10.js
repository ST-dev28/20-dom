/*
Sukurti funkcija pavadinimu `generuotiSocials`, kuri priima selector'iu 
ir sarasa fontAwesome ikonu klasiu.

Selector'ius nurodo, kuriame elemente reikes istatyti sugeneruota funkcijos turini

Priimamas ikonu sarasas turi buti ne tuscias array

Funkcijos uzduotis, pagal duota ikonu sarasa sugeneruoti `<i>` elementus, kuriuose 
`class` atribute bus nurodytos atitinkamu fontAwesome ikonu klasiu pavadinimai

Visas sugeneruotas tekstinis HTML turi buti istatytas i nurodyta selector'iaus elementa
*/

const icons = ['facebook', 'twitter', 5, [], '', 'linkedin'];

function generuotiSocials(selector, list) {
    const DOM = document.querySelector(selector);

    if (selector === '' ||
        typeof selector !== 'string') {
        return false;
    }

    if (!Array.isArray(list) ||
        list.length === 0) {
        console.error('ERROR: sarasas negali buti tuscias');
        return false;
    }

    let HTML = '';
    for (let i = 0; i < list.length; i++) {
        //console.log(i);
        if (typeof icons[i] === 'string' &&
            icons[i] !== '') {
            const iconsFull = 'fa fa-' + icons[i];
            HTML += `<i class="${iconsFull}"></i>`;  // arba `<i class="fa fa-${icons[i]}"></i>`
            //console.log(HTML); 
        }


        /*  ---ARBA--- 
        for (let element of array){
          HTML += `<i class="fa fa-${element}"></i>`
        }
        */
    }
    DOM.innerHTML = HTML;     //sugeneruoja HTML
}

generuotiSocials('.socials', icons);
