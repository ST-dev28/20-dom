/*
Reikia sugeneruoti`<select>` formos elementa, kuriame butu isvardintos
tokios reiksmes: zuikis, barsukas, lape, vilkas, sernas, stirna, vovere.

Sugeneruotas`<select>` elementas turi buti iterptas tarp formos`<label>`
ir`<button>` elementu.

Paspaudus submit mygtuka, pasirinkta`<select>` reiksme turi buti
atvaizduota`.option` elemente.

Papildymas: pridetas label su darzovemis
*/

// https://www.w3schools.com/tags/tag_select.asp

function renderSelect(selector, dataList, id) {
    // susirandame vieta, kur zemiau kurio elemento tures nugulti naujas turinys
    const DOM = document.querySelector(selector);

    // susigeneruojame visus galimus select pasirinkimus
    let optionsHTML = '';
    for (const dataItem of dataList) {
        optionsHTML += `<option value="${dataItem}">${dataItem}</option>`;
    }

    // sukonstruojame galutini select elementa ir istatome i reikiama vieta
    const HTML = `<select id="${id}">${optionsHTML}</select>`;
    DOM.insertAdjacentHTML('afterend', HTML);
}

const animals = ['zuikis', 'barsukas', 'lape', 'vilkas', 'sernas', 'stirna', 'vovere'];
renderSelect('label[for="animal"]', animals, 'animal');

const vegetables = ['morka', 'svogunas', 'bulve'];
renderSelect('label[for="vegetable"]', vegetables, 'vegetable');

const allSelectDOM = document.querySelectorAll('select');

const buttonDOM = document.querySelector('button');
const optionDOM = document.querySelector('.option');

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();

    const pasirinkimai = Array.from(allSelectDOM).map(DOM => DOM.value);

    const pasirinkimuZinute = pasirinkimai.join(', ');
    optionDOM.innerText = pasirinkimuZinute;
})

