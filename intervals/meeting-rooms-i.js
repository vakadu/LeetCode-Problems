function meetingRooms(nums) {
    nums.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < nums.length; i++) {
        let frontMax = Math.max(nums[i][0], nums[i - 1][0]),
            backMin = Math.min(nums[i][1], nums[i - 1][1]),
            diff = backMin - frontMax;

        if (Math.sign(diff) !== -1) {
            return false;
        }
    }

    return true;
}

console.log(
    meetingRooms([
        [0, 30],
        [5, 10],
        [15, 20],
    ])
);

console.log(
    meetingRooms([
        [7, 10],
        [2, 4],
    ])
);
