function subarray(arr) {
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (j = i; j < arr.length; j++) {
            sum += arr[j];

            if (sum === 0) {
                max = Math.max(max, j - i + 1);
            }
        }
    }

    return max;
}

console.log(subarray([15, -2, 2, -8, 1, 7, 10, 23]));
console.log(subarray([1, 0, -4, 3, 1, 0]));
