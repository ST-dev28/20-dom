// #19 uzduotis
/*
// VIENAS variantas
function time() {
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 4; j++) {
            console.log(`${i}:${j * 15}`);
        }
    }
}
time();

j=0 -->> 0
j=1 -->> 15
j=2 -->> 30
j=3 -->> 45

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
*/
/*
//  #19b uzduotis
function times(start, end) {
    for (let p = start; p < end; p++) {
        for (let r = 0; r < 60; r += 15) {
            console.log(`${p}:${r}`);  //  console.log(`${p}:${r < 10 ? '0' + m : m}`); -->> minutes dvizenkliu skaiciumi
        }
    }
}
times(1, 7);
*/
//  #19c uzduotis
function timesInterval(start, end, step) {
    const mins = 60;
    //const tm = Math.floor((end - start) * mins / step) + 1;
    //console.log(tm);
    for (let b = start * mins; b <= end * mins; b += step) {
        const h = Math.floor(b / mins);
        //arba h kitaip -->>
        //const h = (b - m) / 60;
        const m = b - (h * 60);
        //arba vietoje sio tiesiog -->> 
        //const m = b % 60;
        console.log(`${h}:${m < 10 ? '0' + m : m}`);   //-->> minutes dvizenkliu skaiciumi
    }
}
timesInterval(1, 4, 31);
