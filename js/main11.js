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
    //console.log(DOM);

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
    // arba-->>  DOM.innerHTML = `<nav> ${HTML} </nav>`;
    DOM.insertAdjacentHTML('afterbegin', '<img src="#" alt="Logo" class="logo">');

    // arba be DOM.innerHTML tiesiog-->> 
    //DOM.insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);
}

renderNav('header', menu);


/*  Alternatyvus variantas---
function renderNav(headeris, list) {
    const headerisDOM = document.querySelector(headeris);
    const logo = headerisDOM.querySelector('.logo');

    let HTML = '';
    for (let i in list) {
        HTML += `<a href="${list[i].href}">${list[i].title}</a>`;
    }
    logo.insertAdjacentHTML('afterend', `<nav>${HTML}</nav>`);
}
*/