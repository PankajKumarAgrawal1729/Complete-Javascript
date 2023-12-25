const myArr = [1, 2, 3, 4, 5];
console.log(myArr);   // [ 1, 2, 3, 4, 5 ]

const myArr2 = new Array("val1", "val2", "val3");
console.log(myArr2);  // [ 'val1', 'val2', 'val3' ]

// Array Method

myArr.push(6);
console.log(myArr);  // [ 1, 2, 3, 4, 5, 6 ]

myArr.pop();
console.log(myArr);  // [ 1, 2, 3, 4, 5 ]

myArr.unshift(0);
console.log(myArr);  // [ 0, 1, 2, 3, 4, 5 ]

myArr.shift();
console.log(myArr);  // [ 1, 2, 3, 4, 5 ]

console.log(myArr.includes(9));  // false

console.log(myArr.indexOf(9));  // -1
console.log(myArr.indexOf(5));  // 4

const newArr = myArr.join();
console.log(newArr, typeof newArr);   // 1,2,3,4,5 string


// slice, splice

console.log("A ", myArr);   // A  [ 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3);   
console.log(myn1);   // [ 2, 3 ]
console.log("B ", myArr);   // B  [ 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3);
console.log(myn2);   // [ 2, 3, 4 ]
console.log("C ", myArr);   // C  [ 1, 5 ]

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

console.log(marvel_heros);   // [ 'thor', 'Ironman', 'spiderman' ]
console.log(dc_heros);   // [ 'superman', 'flash', 'batman' ]

// marvel_heros.push(dc_heros);
console.log(marvel_heros);  // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const heros = marvel_heros.concat(dc_heros);
console.log(heros);   // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_heros = [...marvel_heros, ...dc_heros];
console.log(all_heros);   // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const mix_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
const real_arr = mix_array.flat(Infinity);
console.log(real_arr);  // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11 ]

console.log(Array.isArray("Pankaj"));  // false
console.log(Array.from("Pankaj"));   // [ 'P', 'a', 'n', 'k', 'a', 'j' ]
console.log(Array.from({
    name: "Pankaj"
}));   // []

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log((Array.of(score1, score2, score3)));   // [ 100, 200, 300 ]
