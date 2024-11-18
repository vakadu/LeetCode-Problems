function prime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;

    // if (count === 2) {
    //     return true;
    // } else {
    //     return false;
    // }
}

console.log(prime(6));
