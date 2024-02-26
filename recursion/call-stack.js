function one() {
    console.log(1);
    return two();
}

function two() {
    console.log(2);
    return three();
}

function three() {
    console.log(3);
}

one();
two();
three();
