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

function renderNav() {

}

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

renderNav('header', menu);
