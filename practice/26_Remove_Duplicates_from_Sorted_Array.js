function remove(nums) {
    let count = 1;

    // let set = new Set(nums);
    // return Array.from(set);

    // for (let index = 0; index < nums.length; index++) {
    //     if (!result.includes(nums[index])) {
    //         result.push(nums[index]);
    //     }
    // }
    // return result;

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== nums[index + 1]) {
            nums[count] = nums[index + 1];
            count++;
        }
    }
}

console.log(remove([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
