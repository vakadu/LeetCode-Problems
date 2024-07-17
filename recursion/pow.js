function pow(x,n) {
    if(Math.sign(n) === -1) {
        return negative(x,Math.abs(n), 1)
    } else {
        return positive(x,n, 1)
    }
}

function negative(x,n, result) {
    if(n<=0) {
        return 1/result;
    }

    return negative(x,n-1, result*x);
}

function positive(x,n, result) {
    if(n<=0) {
        return result;
    }

    return positive(x,n-1, result*x);
}

// console.log(pow(2.00000, 10));
console.log(pow(2.00000, -2));
