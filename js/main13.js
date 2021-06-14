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

Kiekvienoje eiluteje langeliai turi buti piesiami pakaitomis. Pirmoje - balta/juoda, antroje - juoda/balta ir t.t.
*/

const optionDOM = document.querySelector('.option');
const buttonDOM = document.querySelector('button');
const inputDOM = document.getElementById('board');
const boardDOM = document.querySelector('.board');

buttonDOM.addEventListener('click', (e) => {
    e.preventDefault();
    const n = parseInt(inputDOM.value);
    optionDOM.textContent = `${n}x${n}`;
    inputDOM.value = '';
    renderBoard(boardDOM, n);
})

function renderBoard(DOMelement, boardSize) {
    const elementSize = 100 / boardSize;
    //const cellHTML = `<div class="cell" style="width: ${elementSize}%;"></div>`.repeat(boardSize);  //variantas su repeat
    //const rowHTML = `<div class="row" style="height: ${elementSize}%;">${cellHTML}</div>`; 
    //DOMelement.innerHTML = rowHTML.repeat(boardSize);

    let whiteBlackCellHTML = '';
    let blackWhiteCellHTML = '';
    let HTML = '';
    const whiteCellHTML = `<div class="cell" style="width: ${elementSize}%; background-color: white;"></div>`;
    const blackCellHTML = `<div class="cell" style="width: ${elementSize}%; background-color: black;"></div>`;

    for (let c = 0; c < boardSize; c++) {
        if (c % 2 === 0) {
            whiteBlackCellHTML += whiteCellHTML;
            blackWhiteCellHTML += blackCellHTML;
        } else {
            whiteBlackCellHTML += blackCellHTML;
            blackWhiteCellHTML += whiteCellHTML;
        }
    }

    let cellHTML = '';
    for (let r = 0; r < boardSize; r++) {
        if (r % 2 === 0) {
            cellHTML = whiteBlackCellHTML;
        } else {
            cellHTML = blackWhiteCellHTML;
        }
        // cellHTML = r % 2 === 0 ? whiteBlackCellHTML : blackWhiteCellHTML;       // ternaly -->> IF sutrumpinimas
        HTML += `<div class="row" style="height: ${elementSize}%;">${cellHTML}</div>`;
    }

    DOMelement.innerHTML = HTML;
}