function rightInterval(intervals) {
    // intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length; i++) {
        for (let j = i + 1; j < intervals.length; j++) {
            if (intervals[i][1] >= intervals[j][0]) {
            }
        }
    }
}

console.log(
    rightInterval([
        [3, 4],
        [2, 3],
        [1, 2],
    ])
);
