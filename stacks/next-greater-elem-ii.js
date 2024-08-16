function greater(nums) {
    let result = [],
        stack = [];

    for (let i = 0; i < nums.length; i++) {
        // let found = false;
        // for (let j = 1; j < nums.length; j++) {
        //     let nextIndex = (i + j) % nums.length;
        //     if (nums[nextIndex] > nums[i]) {
        //         result.push(nums[nextIndex]);
        //         found = true;
        //         break;
        //     }
        // }
        // if (!found) {
        //     result.push(-1);
        // }
    }

    return result;
}

console.log(greater([1, 2, 3, 4, 3]));
console.log(greater([1, 2, 1]));
console.log(greater([1, 2, 3, 4, 5]));
console.log(greater([5, 4, 3, 2, 1]));
