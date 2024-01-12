// for
for (let index = 0; index < 10; index++) {
    console.log(index);
}

for (let i = 1; i <= 5; i++) {
    console.log(`Table of: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log();
}

// break and continue keywords

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of index is: ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of index is: ${index}`);
}