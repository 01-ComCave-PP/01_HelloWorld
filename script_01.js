
// Hello World

let v;



function plus(a, b) {

    return v = a + b;

}

function minus(a, b) {

    return v = a - b;

}

function rechner(a, b, c) {



    if (c == "plus") {
        v = plus(a, b);

    } else if (c == "minus") {
        v = minus(a, b);
    }

}

rechner(1, 2, "plus");
console.log("DEergebnis: " + v);

rechner(2, 3, "minus");
console.log("DEergebnis: " + v);