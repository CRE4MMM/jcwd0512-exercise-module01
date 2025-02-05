// 1.
function stats(arr: number[]) {
    let lowest = arr[0];
    let highest = arr[0];
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    return {lowest, highest, average};
}

console.log(stats([12, 5, 23, 18, 4, 45, 32]));

// 2.
function join(words: string[]) {
    if (words.length === 0) {
        return "";
    } else if (words.length === 1) {
        return words[0];
    } else {
        let last = words.slice(0, -1).join(", ");
        return last + ", and " + words[words.length - 1];
    }
}

console.log(join(["apple", "banana", "cherry", "date"]));

// 3.


// 4.
function summ(arr1: number[], arr2: number[]) {
    let result: number[] = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    return result;
}

console.log(summ([1, 2, 3], [3, 2, 1]));

