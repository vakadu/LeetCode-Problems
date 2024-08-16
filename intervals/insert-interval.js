function insert(intervals, newInterval) {
    let result = [],
        i = 0;

    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        let curr = intervals[i];
        newInterval[0] = Math.min(newInterval[0], curr[0]);
        newInterval[1] = Math.max(newInterval[1], curr[1]);
        i++;
    }
    result.push(newInterval);

    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    console.log(result);
}

console.log(
    insert(
        [
            [1, 2],
            [3, 5],
            [6, 7],
            [8, 10],
            [12, 16],
        ],
        [4, 8]
    )
);
