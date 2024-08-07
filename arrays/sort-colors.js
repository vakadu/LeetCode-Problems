function sortColors(nums) {
    // let c0 = 0,
    //     c1 = 0,
    //     c2 = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === 0) {
    //         c0++;
    //     } else if (nums[i] === 1) {
    //         c1++;
    //     } else {
    //         c2++;
    //     }
    // }

    // for (let i = 0; i < c0; i++) {
    //     nums[i] = 0;
    // }

    // for (let i = c0; i < c0 + c1; i++) {
    //     nums[i] = 1;
    // }

    // for (let i = c0 + c1; i < c0 + c1 + c2; i++) {
    //     nums[i] = 2;
    // }

    let low = 0,
        mid = 0,
        high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            let temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            mid++;
            low++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            let temp = nums[high];
            nums[high] = nums[mid];
            nums[mid] = temp;
            high--;
        }
    }

    console.log(nums);
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
console.log(sortColors([0, 0]));
