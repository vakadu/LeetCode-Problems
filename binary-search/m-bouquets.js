function brute(bloomDay, m, k) {
    let min = Math.min(...bloomDay),
        max = Math.max(...bloomDay);
    for (let i = min; i <= max; i++) {
        const isValid = isDay(bloomDay, m, k, i);
        if (isValid) {
            return i;
        }
    }
}

function isDay(bloomDay, m, k, i) {
    let count = 0,
        noOfBoquets = 0;
    for (let j = 0; j < bloomDay.length; j++) {
        if (bloomDay[j] <= i) {
            count++;
        } else {
            console.log(count / k);
            noOfBoquets += Math.floor(count / k);
            count = 0;
        }
    }

    noOfBoquets += Math.floor(count / k);
    return noOfBoquets >= m;
}

// console.log(brute([1, 10, 3, 10, 2], 3, 1));
console.log(brute([7, 7, 7, 7, 12, 7, 7], 2, 3));
