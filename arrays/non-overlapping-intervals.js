function nonoverlapping(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let prev = intervals[0][1],
        count = 0;

    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i][0];
        if (curr < prev) {
            count++;
        } else {
            prev = intervals[i][1];
        }
    }

    return count;
}

console.log(
    nonoverlapping([
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
    ])
);

console.log(
    nonoverlapping([
        [1, 2],
        [1, 2],
        [1, 2],
    ])
);

console.log(
    nonoverlapping([
        [1, 2],
        [2, 3],
    ])
);

console.log(
    nonoverlapping([
        [1, 100],
        [11, 22],
        [1, 11],
        [2, 12],
    ])
);
