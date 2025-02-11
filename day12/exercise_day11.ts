// 1.
function conv(column: string): number {
    let result = 0;
    for (let i = 0; i < column.length; i++) {
        const charCode = column.charCodeAt(i) - 64; 
        result = result * 26 + charCode;
    }
    return result;
}

console.log(conv("A"));  
console.log(conv("Z"));  
console.log(conv("AA")); 
console.log(conv("AB")); 



// 2.
function num(nums: number[]): number {
    let result = 0;
    for (let num of nums) {
        result ^= num; 
        console.log(result);
        
    }
    return result;
}

console.log(num([2, 2, 1]));
console.log(num([4, 1, 2, 1, 2])); 
console.log(num([1])); 




// 3.
function anagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    return s.split('').sort().join('') === t.split('').sort().join('');
}

console.log(anagram("anagram", "nagaram")); 
console.log(anagram("rat", "car")); 



// 4.
function stairs(n: number): number {
    if (n <= 2) {
        return n; 
    }

    let first = 1; 
    let second = 2; 

    for (let i = 3; i <= n; i++) {
        let current = first + second; 
        first = second; 
        second = current; 
    }
    return second;
}

console.log(stairs(2));
console.log(stairs(3));