// Immedietly Invoked Function Expression(IIFE)

(function fun() {   // named iife
    console.log("DB Connected");
})();

((name) => {   //unnamed iife
    console.log(`DB Connected2 ${name}`);
})("Pankaj");