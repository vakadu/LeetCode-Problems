function subarray(arr) {
    let max = Number.MIN_SAFE_INTEGER,
        map = new Map(),
        sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum === 0) {
            max = i + 1;
        } else {
            if (map.has(sum)) {
                max = Math.max(max, i - map.get(sum));
            } else {
                map.set(sum, i);
            }
        }
    }

    return max;

    // for (let i = 0; i < arr.length; i++) {
    //     let sum = 0;
    //     for (j = i; j < arr.length; j++) {
    //         sum += arr[j];

    //         if (sum === 0) {
    //             max = Math.max(max, j - i + 1);
    //         }
    //     }
    // }

    // return max === Number.MIN_SAFE_INTEGER ? 0 : max;
}

console.log(subarray([15, -2, 2, -8, 1, 7, 10, 23]));
console.log(subarray([1, 0, -4, 3, 1, 0]));
console.log(subarray([2, 10, 4]));
