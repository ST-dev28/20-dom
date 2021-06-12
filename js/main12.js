/*
Reikia sugeneruoti`<select>` formos elementa, kuriame butu isvardintos
tokios reiksmes: zuikis, barsukas, lape, vilkas, sernas, stirna, vovere.

Sugeneruotas`<select>` elementas turi buti iterptas tarp formos`<label>`
ir`<button>` elementu.

Paspaudus submit mygtuka, pasirinkta`<select>` reiksme turi buti
atvaizduota`.option` elemente.

Papildymas: pridetas label su darzovemis
*/
/*
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

*/
//  --MANO SPRENDINYS--

const animals = ['zuikis', 'barsukas', 'lapė', 'vilkas', 'šernas', 'stirna', 'voverė', 'driežas', 'ežiukas'];

function renderSelect(selector, list) {
    const labelDOM = document.querySelector(selector);

    if (!Array.isArray(list) ||
        list.length === 0) {
        console.error('ERROR: sarasas negali buti tuscias');
        return false;
    }

    let HTML = '';
    for (const item of list) {
        HTML += `<option value="${item}">${item}</option>`;
        //console.log(HTML);
    }
    labelDOM.insertAdjacentHTML('afterend', `<select> ${HTML} </select>`);
}

renderSelect('label', animals); // 'label' rodo, kur bus patalbinta gauta info. 'animals' rodo musuu turima sarasa

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
