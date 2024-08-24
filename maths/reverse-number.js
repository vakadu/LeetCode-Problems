function reverse(x) {
    let temp = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    if (temp > 2147483647) return 0;
    return Math.sign(x) === -1 ? -1 * temp : temp;
}

console.log(reverse(123));
console.log(reverse(120));
console.log(reverse(-123));
