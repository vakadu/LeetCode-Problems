function brute(nums, threshold) {
    let max = Math.max(...nums);
    for (let i = 1; i <= max; i++) {
        let sum = calcSum(nums, i);
        if (sum <= threshold) {
            return i;
        }
    }
}

function bs(nums, threshold) {
    let max = Math.max(...nums),
        start = 1,
        end = max;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        let sum = calcSum(nums, mid);

        if (sum > threshold) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return start;
}

function calcSum(nums, k) {
    let sum = 0;
    for (let num of nums) {
        let div = Math.ceil(num / k);
        sum += div;
    }
    return sum;
}

console.log(bs([1, 2, 5, 9], 6));
console.log(bs([44, 22, 33, 11, 1], 5));
