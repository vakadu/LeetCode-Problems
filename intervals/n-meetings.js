function nmeeting(start, end) {
    let meetings = [],
        max = 1;

    for (let i = 0; i < start.length; i++) {
        meetings.push([start[i], end[i]]);
    }
    meetings.sort((a, b) => a[1] - b[1]);
    let lastEndTime = meetings[0][1];

    for (let i = 1; i < meetings.length; i++) {
        if (meetings[i][0] > lastEndTime) {
            max++;
            lastEndTime = meetings[i][1];
        }
    }

    return max;
}

console.log(nmeeting([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9]));
console.log(nmeeting([10, 12, 20], [20, 25, 30]));
