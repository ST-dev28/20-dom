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
*//*
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
*/
// #19d uzduotis - laiko tarpas per vidurnakti
function timeOverMidnight(from, till, interval) {
    const day = 24;
    const newTill = till + day;
    for (let c = from * 60; c <= newTill * 60; c += interval) {
        const hr = Math.floor(c / 60);
        const ms = c - hr * 60;
        const hrModf = hr % 24;
        console.log(`${hrModf < 10 ? '0' + hrModf : hrModf}:${ms < 10 ? '0' + ms : ms}`);
    }
}
timeOverMidnight(22, 1, 45);
/*
// ----ARBA ----
function timeOverNight(from, till, interval) {
    let changedTill = till;
    const day = 24;
    if (from > till) {
        changedTill = till + day;
    }
    for (let e = from * 60; e <= changedTill * 60; e += interval) {
        const hrs = Math.floor(e / 60);
        const mns = e - hrs * 60;
        const hrsModified = hrs % 24;
        console.log(`${hrsModified < 10 ? '0' + hrsModified : hrsModified}:${mns < 10 ? '0' + mns : mns}`);
    }
}
timeOverNight(22, 12, 45);
*/
