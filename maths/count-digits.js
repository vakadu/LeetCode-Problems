function evenly(n) {
    let count = 0,
        real = n.toString().split('');

    while (n > 0) {
        // Increment the counter
        // for each digit encountered.
        count = count + 1;
        // Divide 'n' by 10 to
        // remove the last digit.
        n = Math.floor(n / 10);
    }

    // for (let num of real) {
    //     if (parseInt(n % num) === 0) {
    //         count++;
    //     }
    // }

    return count;
}

console.log(evenly(12));
console.log(evenly(2446));
console.log(evenly(23));
