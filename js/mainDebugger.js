

const a = 5;
const b = 8;
const c = -7;
const d = 11;

function sum(x, y) {
    x *= 2;
    y += 5;
    return x + y;
}

const ats1 = sum(a, b);
const ats2 = sum(c, d);

for (let i = 0; i < 5; i++) {
    console.log(i);
}

debugger;

const pazymiai = [10, 8, 2, 4, 6];
let suma = 0;

for (let i = 0; i < pazymiai.length; i++) {
    const pazymys = pazymiai[i];
    suma += pazymys;
    console.log(suma);
}
const vidurkis = suma / pazymiai.length;