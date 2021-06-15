// #19 uzduotis

// VIENAS variantas
function time() {
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 4; j++) {
            console.log(`${i}:${j * 15}`);
        }
    }
}
time();
/*
j=0 -->> 0
j=1 -->> 15
j=2 -->> 30
j=3 -->> 45
*/
//  ANTRAS variantas
function times() {
    for (let p = 0; p < 24; p++) {
        for (let r = 0; r < 60; r += 15) {
            console.log(`${p}:${r}`);
        }
    }
}
times();

// TRECIAS variantas
const timeinterval = [0, 15, 30, 45];
function timeset() {
    for (let h = 0; h < 24; h++) {
        for (let m = 0; m < timeinterval.length; m++) {
            console.log(`${h}:${timeinterval[m]}`);
        }
    }
}
timeset(timeinterval);
