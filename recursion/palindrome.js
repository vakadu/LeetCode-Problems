function palindrome(n) {
    let rev = reverseNumber(n);
    console.log(rev, n === rev);
    return n === rev;
}

function reverseNumber(n) {
    if(n%10 === n) {
        return n;
    }

    let remainder = n%10;
    let result = (remainder * Math.pow(10, n.toString().length - 1)) + reverseNumber(Math.floor(n/10));
    return result;
}

palindrome(123454321)
