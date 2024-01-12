// filter

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const values = myNum.filter((num) => num > 4);
console.log(values);



// Map

const newNums = myNum.map((num) => num + 10);
console.log(newNums);

// Chaining

const chainingNum = myNum.map((num) => num * 10).map((num) => ++num).filter((num) => num > 40);

console.log(chainingNum);


// Reduce

const sum = myNum.reduce((prev, curr) => prev + curr, 0);
console.log(`Sum of array is: ${sum}`);

