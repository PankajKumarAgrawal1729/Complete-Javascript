// promice creation
const promise1 = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls
    // Cryptography
    // network
    setTimeout(function () {
        console.log("Async task is complete");
        resolve();
    }, 1000);
});

// promise consumption
promise1.then(function () {
    console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task2 completed");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async2 Resolved");
});

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "Pankaj",
            email: "pankaj@example.com"
        });
    }, 1000);
});

promise3.then(function (user) {
    console.log(user);
})

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({
                username: "User1",
                email: "user1@example.com"
            });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000)
});

promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((userName) => {
    console.log(userName);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("The promise is either resolved or rejected.");
});


const promise5 = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({
                username: "User2",
                email: "user2@example.com"
            });
        } else {
            reject("ERROR: error coming");
        }
    }, 1000)
});

async function consumePromise5() {
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise5();

// async function getAllUsers() {
//     try {
//         const users = await fetch("https://jsonplaceholder.typicode.com/users");
//         // console.log(users); // working
//         const data = await users.json(); // to convert in json it takes time so, we need await here
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response.json();
}).then((users) => {
    console.log(users);
}).catch((err) => {
    console.log(err);
})