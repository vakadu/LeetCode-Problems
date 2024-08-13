function insert(intervals, newInterval) {
    // if (intervals.length <= 0) {
    //     return [newInterval];
    // }
    // let updatedIntervals = [],
    //     count = 0;
    // intervals.sort((a, b) => a[0] - b[0]);
    // for (let i = 0; i < intervals.length; i++) {
    //     if (intervals[i][0] > newInterval[0]) {
    //         updatedIntervals.push(newInterval);
    //         count = i;
    //         break;
    //     }
    //     updatedIntervals.push(intervals[i]);
    // }
    // let temp = intervals.slice(count);
    // updatedIntervals.push(...temp);
    // let result = [updatedIntervals[0]];
    // for (let i = 1; i < updatedIntervals.length; i++) {
    //     let last = result[result.length - 1],
    //         curr = updatedIntervals[i];
    //     if (last[1] >= curr[0]) {
    //         last[1] = Math.max(last[1], curr[1]);
    //     } else {
    //         result.push(curr);
    //     }
    // }
    // return result;

    let result = [],
        i = 0;

    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }
    result.push(newInterval);

    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;

    console.log(result);
}

console.log(
    insert(
        [
            [1, 3],
            [6, 9],
        ],
        [2, 5]
    )
);

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
