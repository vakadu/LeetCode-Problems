function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let last = result[result.length - 1],
            curr = intervals[i];

        if (curr[0] <= last[1]) {
            last[1] = Math.max(last[1], curr[1]);
        } else {
            result.push(curr);
        }
    }

    return result;
}

console.log(
    mergeIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
    ])
);

console.log(
    mergeIntervals([
        [1, 4],
        [4, 5],
    ])
);

console.log(
    mergeIntervals([
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
    ])
);

console.log(
    mergeIntervals([
        [1, 4],
        [0, 4],
    ])
);
