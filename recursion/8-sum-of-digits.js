function sumOfDigits(n) {
    if(n===0) {
        return 0
    }

    let result = Math.floor(n % 10) + sumOfDigits(Math.floor(n/10));
    console.log(result);
    return result;
}

sumOfDigits(163)
