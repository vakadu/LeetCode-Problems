function meetingRoom(arr) {
    arr.sort((a, b) => a[1] - b[1]);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i][0] < arr[i - 1][1]) {
            return false;
        }
    }

    return true;
}

console.log(
    meetingRoom([
        [0, 30],
        [5, 10],
        [15, 20],
    ])
);

console.log(
    meetingRoom([
        [7, 10],
        [2, 4],
    ])
);
