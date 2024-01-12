// for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!";

for (const greet of greetings) {
    console.log(greet);
}

// Maps

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
console.log(map);

for (const [key, value] of map) {
    console.log(key, ":", value);
}

const myObject = {
    'Game1': "NFS",
    "Game2": "Spiderman"
}

// for (const [key, value] of myObject) {    // not working
//     console.log(key, ":", value);
// }

// for-in loop

for (const key in myObject) {
    console.log(key, ":-", myObject[key]);
}


for (const idx in arr) {
    console.log(`${idx} : ${arr[idx]} `);
}

// for (const key in map) {   // Map are not iteratable  
//     console.log(key);
// }

// for-each loop

const coding = ["js", "java", "python", "cpp"];

coding.forEach((item) => {
    console.log(item);
});

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        langauge: "JavaScript",
        suffix: "js"
    },
    {
        langauge: "Python",
        suffix: "py"
    },
    {
        langauge: "Java",
        suffix: "java"
    }
];

myCoding.forEach((item) => {
    console.log(item.langauge, item.suffix);
})