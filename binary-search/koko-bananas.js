function calHours(piles, i) {
    let sum = 0;
    for (let j = 0; j < piles.length; j++) {
        let total = Math.ceil(piles[j] / i);
        sum += total;
    }

    return sum;
}

function brute(piles, h) {
    let max = Math.max(...piles);

    for (let i = 1; i <= max; i++) {
        let reqTIme = calHours(piles, i);

        if (reqTIme <= h) {
            return i;
        }
    }
}

function bs(piles, h) {
    let max = Math.max(...piles),
        start = 0,
        end = max;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let totalHours = calHours(piles, mid);

        if (totalHours <= h) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return start;
}

console.log(bs([3, 6, 7, 11], 8));
console.log(bs([30, 11, 23, 4, 20], 5));
console.log(bs([30, 11, 23, 4, 20], 6));
