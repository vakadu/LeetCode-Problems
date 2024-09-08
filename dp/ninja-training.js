function ninja(arr) {
    return helper(arr, 0, 0);
}

function helper(array, day, last) {
    if (day === array.length) {
        return 0;
    }

    let max = Number.MIN_SAFE_INTEGER;

    for (let index = 0; index < 3; index++) {
        if (index !== last) {
            let activity = array[day][index] + helper(array, day + 1, index);
            max = Math.max(activity, max);
        }
    }

    return max;
}

console.log(
    ninja([
        [1, 2, 5],
        [3, 1, 1],
        [3, 3, 3],
    ])
);
