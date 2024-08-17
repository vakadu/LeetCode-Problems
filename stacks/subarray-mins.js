function subArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let min = Number.MAX_SAFE_INTEGER;
            let temp = arr.slice(i, j + 1);
            min = Math.min(min, ...temp);
            sum += min;
        }
    }

    return sum;
}

console.log(subArray([3, 1, 2, 4]));
