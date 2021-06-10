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
    const DOM = document.querySelector(selector);
    const labelDOM = document.querySelector('label');

    let HTML = '';
    for (const item of list) {
        HTML += `<option value="${item}">${item}</option>`;
        console.log(HTML);
    }
    labelDOM.insertAdjacentHTML('afterend', `<select> ${HTML} </select>`);
}

renderOption('form', animals);