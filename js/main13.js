/*
1. Is formos reikia istraukti parasyta skaiciu, kuris nurodo norimos generuotinos
sachmatu lentos dydi ir ta skaiciu reikia irasyto i elementa `.option`, bet
formatas turi buti `NxN`, pvz.: 4x4, 8x8 ir t.t.

2. Pagal pasirinkta lentos dydi, reikia sugeneruoti reikiama kieki `.row` elementu. 
Atsizvelgiant i ju kieki, kiekvienos eilutes dydis turi buti tinkamas, jog visos 
tilptu i tevini elementa `.board`Pagal pasirinkta lentios dydi, reikia sugeneruoti 
reikiama kieki `.row` elementu.

3. Pagal pasirinkta lentos dydi, reikia sugeneruoti reikiama kieki `.cell` elementu. 
Atsizvelgiant i ju kieki, kiekvieno langelio dydis turi buti tinkamas, jog visi tilptu 
i tevini elementa `.row`
*/

const optionDOM = document.querySelector('.option');
const buttonDOM = document.querySelector('button');
const inputDOM = document.getElementById('board');
const boardDOM = document.querySelector('.board');
const allRows = boardDOM.querySelectorAll('.row');
console.log(allRows);


buttonDOM.addEventListener('click', (e) => {
    e.preventDefault();
    const n = parseInt(inputDOM.value);
    optionDOM.textContent = `${n}x${n}`;
    renderBoard(boardDOM, n);
})

function renderBoard(DOMelement, boardSize) {
    const rowHeight = 100 / boardSize;
    const cellWidth = 100 / boardSize;
    let rowHTML = '';
    let cellHTML = '';

    
    for (let i = 0; i < boardSize; i++) {
        cellHTML = `<div class="cell" style="width:${cellWidth}%;"></div>`;
        rowHTML += `<div class="row" style="height: ${rowHeight}%;">${cellHTML.repeat(inputDOM.value)}</div>`;
    }
    DOMelement.innerHTML = rowHTML;
}
