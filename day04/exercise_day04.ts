// 2. 
function fizzbuzz(n:number) {
    const hasil: string[] = [];
    for (let i: number = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            hasil.push("fizzbuzz");
        } else if (i % 3 ===0) {
            hasil.push("fizz");
        } else if (i % 5 ===0) {
            hasil.push("buzz");
        } else {
            hasil.push (i.toString());
        }
    }
    return hasil.join(", ");
}

console.log(fizzbuzz(6));
console.log(fizzbuzz(15));
console.log(fizzbuzz(25));


// 3.
function b(w:number, h:number) {
    const bmi = w / (h * h);
    if (bmi < 18.5) {
        return "less weight";
    } else if ( bmi >= 18.5 && bmi <= 24.9) {
        return "ideal";
    } else if ( bmi >= 25.0 && bmi <= 29.9) {
        return "overweight";
    } else if ( bmi >= 30.0 && bmi <= 39.9) {
        return "very overweight";
    } else {
        return "obesity";
    }
}

console.log(b(70, 1.75));
console.log(b(50, 1.85));
console.log(b(100, 1.95));
console.log(b(100, 1.75));
console.log(b(180, 1.85));


// 4.
function removeNumber(arr: number[]) {
    return arr.filter(function(numbers) {
        return numbers % 2 === 0;
    });
}

const numbers = [1, 5, 2, 4, 3, 7, 6, 8, 9, 10];
const evenNumber = removeNumber(numbers);
console.log(evenNumber);


// 5.
function splitString(str: string): string[] {
    return str.split(" ");
}

const res = splitString("Hello World");
console.log(res);