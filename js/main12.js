/*
Reikia sugeneruoti`<select>` formos elementa, kuriame butu isvardintos
tokios reiksmes: zuikis, barsukas, lape, vilkas, sernas, stirna, vovere.

Sugeneruotas`<select>` elementas turi buti iterptas tarp formos`<label>`
ir`<button>` elementu.

Paspaudus submit mygtuka, pasirinkta`<select>` reiksme turi buti
atvaizduota`.option` elemente.
*/

const animals = ['zuikis', 'barsukas', 'lape', 'vilkas', 'sernas', 'stirna', 'vovere'];

function renderOption(selector, list) {
    const labelDOM = document.querySelector(selector);

    let HTML = '';
    for (const item of list) {
        HTML += `<option value="${item}">${item}</option>`;
        console.log(HTML);
    }
    labelDOM.insertAdjacentHTML('afterend', `<select> ${HTML} </select>`);
}

renderOption('label', animals);


const spanDOM = document.querySelector('.option');
const buttonDOM = document.querySelector('button');
const selectDOM = document.querySelector('select');

//console.log(buttonDOM);
//console.log(selectDOM);
//console.log(spanDOM);

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();       // puslapis nepersikrauna is karto paspaudus 'submit'
    spanDOM.innerText = selectDOM.value;
    selectDOM.value = '';         //antra karta paspaudus 'submit' istrina teksta
})

