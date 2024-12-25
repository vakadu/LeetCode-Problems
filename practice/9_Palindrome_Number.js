function palindrome(x) {
    let reversed = 0,
        temp = x;

    if (Math.sign(x) === -1) {
        return false;
    }

    while (x !== 0) {
        let last = x % 10;
        x = Math.trunc(x / 10);

        reversed = reversed * 10 + last;
    }

    return reversed === temp;
}

console.log(palindrome(10));
