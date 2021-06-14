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

buttonDOM.addEventListener('click', (e) => {
    e.preventDefault();
    const n = parseInt(inputDOM.value);
    optionDOM.textContent = `${n}x${n}`;
    renderBoard(boardDOM, n);
})

function renderBoard(DOMelement, boardSize) {
    const elementSize = 100 / boardSize;
    //const cellHTML = `<div class="cell" style="width: ${elementSize}%;"></div>`.repeat(boardSize);  //variantas su repeat
    //const rowHTML = `<div class="row" style="height: ${elementSize}%;">${cellHTML}</div>`; 
    // DOMelement.innerHTML = rowHTML.repeat(boardSize);

    let rowHTML = '';
    let cellHTML = '';

    for (let j = 1; j <= boardSize; j++) {
        cellHTML += `<div class="cell" style="width: ${elementSize}%;"></div>`;
    }
    for (let i = 0; i < boardSize; i++) {
        rowHTML += `<div class="row" style="height: ${elementSize}%;">${cellHTML}</div>`;
    }

    DOMelement.innerHTML = rowHTML;

    const allCells = DOMelement.querySelectorAll('.cell');
    const cells = Array.from(allCells);
    //console.log(langeliai);

    for (let j = 0; j < cells.length; j++) {
        const cell = cells[j];
        if (j % 2 === 0) {
            cell.classList.add('black');
        }
    }
}

/*
if (j % 2 === 0) {
    cellHTML = `<div class="cell" style="width:${elementSize}%; background-color: black"></div>`;
} else {
    cellHTML = `<div class="cell" style="width:${elementSize}%; background-color: white"></div>`;
}*/