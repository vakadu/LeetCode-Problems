function removeElem(nums, val) {
    // let j = 0;

    // for (let index = 0; index < array.length; index++) {
    //     if (nums[index] !== val) {
    //         nums[j] = nums[index];
    //         j++;
    //     }
    // }

    // return j;

    let vals = nums.filter((num) => num !== val);
    return vals.length;
}

console.log(removeElem([3, 2, 2, 3], 3));
console.log(removeElem([0, 1, 2, 2, 3, 0, 4, 2], 2));
