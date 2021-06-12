/*
Reikia sugeneruoti`<select>` formos elementa, kuriame butu isvardintos
tokios reiksmes: zuikis, barsukas, lape, vilkas, sernas, stirna, vovere.

Sugeneruotas`<select>` elementas turi buti iterptas tarp formos`<label>`
ir`<button>` elementu.

Paspaudus submit mygtuka, pasirinkta`<select>` reiksme turi buti
atvaizduota`.option` elemente.
*/

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

//const birds = ['kekstas', 'zvirbliukas', 'peleda', 'balandis', 'varna', 'zylute', 'strazdas', 'sarka', 'genys'];
//renderSelect('label', birds);

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

