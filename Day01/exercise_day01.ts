// 1. Area of rectangle
const P: number = 5;
const L: number = 3;
const area: number = P * L;
console.log(area);


// 2. Perimeter of rectangle
const perimeter: number = 2 * (P + L);
console.log(perimeter);


// 3. Diameter, Circumference, Area
// Diameter
const radius: number = 5;

const diameter: number = 2 * radius
console.log( diameter);

// Circumference
const circumference: number = Math.PI * diameter;
console.log(circumference);

// Area
const z: number = radius ** 2;
console.log(z);

const _area: number = Math.PI * z;
console.log(_area);


// 4. angles of triangle if two angles are given
const totalSudutSegitiga: number = 180;
const sudutA: number = 80;
const sudutB: number = 65;
const sudutC: number = sudutA + sudutB;
console.log(sudutC);

const angle: number = totalSudutSegitiga - sudutC;
console.log(angle);


// 5. Convert days to years
const _days: number = 400;

const _years: number = Math.floor(400/365);
console.log(_years);

const _months: number = Math.floor((_days % 365) / 30);
console.log(_months);

const _day: number = Math.floor((_days % 365) % 30);
console.log(_day);

console.log(`${_days} days -> ${_years} years, ${_months} month, ${_day} day`);


// 6. DIff Date
const _startDate: Date = new Date("2022-01-20");
const _endDate: Date = new Date("2025-01-22");

const _diffDate: number = (_endDate.getTime() - _startDate.getTime()) / (12 * 30 * 24 * 60 * 60 * 1000);
console.log(24 * 60 * 60 * 1000);
console.log((_endDate.getTime()) - _startDate.getTime());
console.log(_diffDate);