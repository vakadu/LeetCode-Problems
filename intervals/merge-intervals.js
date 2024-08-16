function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i],
            prev = result[result.length - 1],
            frontMax = Math.max(prev[0], curr[0]),
            backMin = Math.min(prev[1], curr[1]),
            diff = backMin - frontMax;

        if (Math.sign(diff) === -1) {
            result.push(curr);
        } else {
            result[result.length - 1][1] = Math.max(prev[1], curr[1]);
        }
    }

    return result;
}

console.log(
    merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
    ])
);
