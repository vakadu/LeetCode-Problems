function brute(bloomDay, m, k) {
    let val = m * k;
    if (val > bloomDay.length) {
        return -1;
    }

    let min = Math.min(...bloomDay),
        max = Math.max(...bloomDay);

    let start = min,
        end = max;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (possible(mid, m, k, bloomDay)) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return start;
}

function possible(i, m, k, days) {
    let numberOfBlooms = 0,
        count = 0;
    for (let j = 0; j < days.length; j++) {
        if (days[j] <= i) {
            count++;
        } else {
            numberOfBlooms += Math.floor(count / k);
            count = 0;
        }
    }
    numberOfBlooms += Math.floor(count / k);
    return numberOfBlooms >= m;
}

// console.log(brute([1, 10, 3, 10, 2], 3, 1));
console.log(brute([7, 7, 7, 7, 12, 7, 7], 2, 3));
