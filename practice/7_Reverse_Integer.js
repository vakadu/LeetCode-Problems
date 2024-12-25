function reverse(x) {
    let reversed = 0;

    while (x !== 0) {
        const digit = x % 10;
        x = Math.trunc(x / 10);

        if (
            reversed > Math.pow(2, 31) / 10 ||
            reversed < Math.pow(-2, 31) / 10
        ) {
            return 0;
        }

        reversed = reversed * 10 + digit;
    }

    return reversed;
}

console.log(reverse(321));
console.log(reverse(-345));
console.log(reverse(3210));
