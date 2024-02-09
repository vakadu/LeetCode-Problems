function sumOfNNumbers(n) {
    if(n === 0) {
        return 0;
    }

    let result = n + sumOfNNumbers(n-1);
    console.log(result);
    return result

}

sumOfNNumbers(4);
