// 1. write a code to display the multiplication table of a given integer.
const _numb: number = 9;

for (let i = 1; i <= 10; i++) {
    console.log(`${_numb} x ${i} = ${_numb * i}`);
}

// 2. write a code to check whether a string is a palindrome or not.
let _pal: string = "madam";

if (_pal.split("").reverse().join("") === _pal) {
    console.log(`${_pal} is a palindrome`);
} else {
    console.log(`${_pal} is not a palindrome`);
}

// 3. write a code to convert centimeter to kilometer
const _numb1: number = 100000;
const _convert: number = _numb1 / 100000;

console.log(`${_convert}km`);


// 4. write a code to format number as currency
let _mny: number = 1000;

console.log(_mny.toLocaleString('id-ID', {style: 'currency', currency: 'idr' }))

// 5. write a code to remove the first occurrence of a given "search string" form string
let _str: string = "hello world";

console.log(_str.split("ell").join(""));


// 6. write a code to capitalize the first letter of each word in a string
let _cap: string = "hello world";

console.log(_cap.slice(0, 1).toUpperCase() + "ello " + _cap.slice(6,7).toUpperCase() + "orld");


// 7. write a code to swap the case of each character from string
const _txt: string = "tHe QUiCk BrOWn FOx";
let _newtxt: string = "";

for (let i = 0; i < _txt.length; i++) {
    if (_txt[i] === _txt[i].toUpperCase()) {
        _newtxt += _txt[i].toLowerCase()
    } else {
        _newtxt += _txt[i].toUpperCase()
    }
}
console.log(_newtxt);


// 8. write a code to find the larger of two given integers
const _numb2: number = 42;
const _numb3: number = 55;

if (_numb2 > _numb3) {
    console.log(_numb2);
} else if (_numb3 > _numb2){
    console.log(_numb3);
} else {
    console.log("sama");
}

// 9. write a conditional statement to sort three numbers


// 10. write a code to show 1 if the input string, 2 if the input a number, and 3 for others date type


// 11. write a code to change every letter a into * from a string of input

