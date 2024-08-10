function brute(weights, days) {
    let max = weights.reduce((acc, curr) => {
            return (acc += curr);
        }, 0),
        maxi = Math.max(...weights);

    for (let i = maxi; i <= max; i++) {
        if (findCapacity(weights, days, i)) {
            return i;
        }
    }
}

function bs(weights, days) {
    let max = weights.reduce((acc, curr) => {
            return (acc += curr);
        }, 0),
        maxi = Math.max(...weights),
        start = maxi,
        end = max;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (findCapacity(weights, days, mid)) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return start;
    console.log(start, end);
}

function findCapacity(weights, days, i) {
    let count = 1,
        sum = 0;

    for (let k = 0; k < weights.length; k++) {
        sum += weights[k];

        if (sum > i) {
            sum = weights[k];
            count++;
        }

        if (count > days) {
            return false;
        }
    }

    return true;
}

console.log(bs([3, 2, 2, 4, 1, 4], 3));
console.log(bs([1, 2, 3, 1, 1], 4));
console.log(bs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
