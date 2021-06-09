/*
Sukurti funkcija pavadinimu `renderNav`, kuri priima selector'iu 
ir sarasa informacijos apie meniu nuorodas

Selector'ius nurodo, kuriame elemente reikes istatyti sugeneruota 
funkcijos turini

Priimamas meniu informacijos sarasas turi buti ne tuscias array

Funkcijos uzduotis, pagal duota meniu informacijos sarasa sugeneruoti 
`<nav>` ir `<a>` elementus

Visas sugeneruotas tekstinis HTML turi buti istatytas i nurodyta 
selector'iaus elementa
*/
const menu = [
    {
        href: '#',
        title: 'Home'
    },
    {
        href: '#',
        title: 'Services'
    },
    {
        href: '#',
        title: 'About us'
    },
    {
        href: '#',
        title: 'Contact us'
    }
];


function renderNav(selector, list) {
    const DOM = document.querySelector(selector);

    if (!Array.isArray(list) ||
        list.length === 0) {
        console.error('ERROR: sarasas negali buti tuscias');
        return false;
    }

    let HTML = '';
    let HTML1 = '';
    let HTML2 = '';
    for (const item of list) {
        HTML += `<a href="${item.href}">${item.title}</a>`;
        HTML1 = `<nav>`
        HTML2 = `</nav>`
    }
    DOM.innerHTML = HTML1 + HTML + HTML2;
}


renderNav('header', menu);
