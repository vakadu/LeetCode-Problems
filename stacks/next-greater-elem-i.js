function nextGreater(nums1, nums2) {
    let stack = [],
        result = [],
        ans = [];

    for (let i = nums2.length - 1; i >= 0; i--) {
        if (stack.length === 0) {
            result.push(-1);
        } else if (stack.length > 0 && nums2[i] > stack[0]) {
            while (stack.length > 0 && nums2[i] > stack[0]) {
                stack.shift();
            }
            if (stack.length === 0) {
                result.push(-1);
            } else {
                result.push(stack[0]);
            }
        } else if (stack.length > 0 && nums2[i] <= stack[0]) {
            result.push(stack[0]);
        }
        stack.unshift(nums2[i]);
    }
    result.reverse();

    for (let i = 0; i < nums1.length; i++) {
        let ind = nums2.indexOf(nums1[i]),
            temp = result[ind];
        ans.push(temp);
    }

    return ans;
}

// console.log(nextGreater([4, 1, 2], [1, 3, 4, 2]));
// console.log(nextGreater([2, 4], [1, 2, 3, 4]));
console.log(nextGreater([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]));
