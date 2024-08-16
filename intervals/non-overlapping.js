function nonOverlapping(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 0,
        prev = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i][0];
        if (prev > curr) {
            count++;
        } else {
            prev = intervals[i][1];
        }
    }

    return count;
}

console.log(
    nonOverlapping([
        [1, 100],
        [11, 22],
        [1, 11],
        [2, 12],
    ])
);

console.log(
    nonOverlapping([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
    ])
);

console.log(
    nonOverlapping([
        [1, 2],
        [1, 2],
        [1, 2],
    ])
);

console.log(
    nonOverlapping([
        [1, 2],
        [2, 3],
    ])
);
