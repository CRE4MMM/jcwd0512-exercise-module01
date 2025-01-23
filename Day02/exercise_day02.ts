// 1.
let _1: number = 5;
let _2: number = 10;

if (_1 > _2) {
    console.log("_1 lebih besar dari _2");
} else if (_1< _2){
    console.log("_1 tidak lebih besar dari _2");
} else {
    console.log("kedua angka sama");
    
}

// 2.
let _umur: number = 18;

if (_umur >= 17 && _umur < 19) {
    console.log("Bisa membuat ktp");
} else if (_umur > 19){
    console.log("Sudah mempunyai ktp");
} else {
    console.log("Belum bisa membuat ktp");
}

// 3.
let _angka: number = 9;

if (_angka % 2 === 0) {
    console.log("genap");
} else {
    console.log("ganjil");
}

// ----------------------------

let sum = 0;

for (let i = 1; i < 6; i++ ) {
    sum += i;
}
console.log(sum);

// ----------------------------

let _N = 6;
let _F = 1;

for (let i = 1; i <= _N; i++) {
    _F *= i;
}
console.log(_F);