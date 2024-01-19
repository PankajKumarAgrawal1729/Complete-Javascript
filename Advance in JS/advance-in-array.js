// const myArray = [];
// %DebugPrint(myArray);


//  Types of array in JS: 
// 1. continues 
// 2. Holey : some hole in array, it means that array element are not stored in continues location

// based on storing element in array and the type of these element JS engines internally do the optimization


// optimization in JS array: 
// SMI (small integer) 
// Packed element
// Double(float, string, function)

const arr2 = [1, 2, 3, 4, 5];  // PACKED_SMI_ELEMENT: No holes in array, it is very optimize, best type of array(only small integer)

arr2.push(6.0); // PACKED_DOUBLE_ELEMENT

arr2.push('7'); // PACKED_ELEMENT

// if once array is chamnge from one type to another it never change back to previous type


arr2[10] = 10; // HOLEY_ELEMENT

console.log(arr2);  // [ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 10 ]
console.log(arr2.length);  // 11
console.log(arr2[9]); // undefined

// steps followed by array to find any index value :- 
// 1. Bound Check: if we try to access any element beyond the array length (e.g,: arr2[19])
// 2. Steps for Under the length of array(for holey):
//      a. check hasOwnProperty(arr2, 9) : it is checked that, is this index that we want to access is belong to any array property or not(is any value present at that index or not)
//      b. check hasOwnProperty(arr2.prototype, 9) : same check value in prototype and keep checking becz of JS prototype behaviour
//      c. check hasOwnProperty(Object, 9) : same check value in Object prototype and it's a very expensive check


// holes are very expensive in js

const arr3 = [1, 2, 3, 4, 5];
console.log(arr3[5]); // undefined - bound check only done here (take 1 step)
console.log(arr3[2]); // 2 steps - bound check  and then finally hasOwnProperty of array

// SMI > DOUBLE > PACKED (optimization order)
// H_SMI > H_DOUBLE > H_PACKED

// PACKED when we start inserting different type of element in array

// Once array is down grade it's never upgrade again

const arr4 = new Array(3);
// just 3 holes. HOLY_SMI_ELEMENTS
arr4[0] = '1'; // HOLY_PACKED_ELEMENT
arr4[1] = '2'; // HOLY_PACKED_ELEMENT
arr4[2] = '3'; // HOLY_PACKED_ELEMENT

// better approach
const arr5 = [];
arr5.push('1'); // PACKED_ELEMENT
arr5.push('2'); // PACKED_ELEMENT
arr5.push('3'); // PACKED_ELEMENT


const arr6 = [1, 2, 3, 4, 5];  // SMI_ELEMENT
arr6.push(NaN); // PACKED_DOUBLE, if we removed it or not it does make any difference it's always be PACKED_DOUBLE

// for, forOf, forEach (preferable use in-built methods)
