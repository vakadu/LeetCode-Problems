function merge(nums1, m, nums2, n) {
    let left = 0,
        right = 0,
        index = 0,
        result = [];

    while (left < m && right < n) {
        if (nums1[left] < nums2[right]) {
            result[index] = nums1[left];
            left++;
            index++;
        } else {
            result[index] = nums2[right];
            right++;
            index++;
        }
    }

    while (left < n) {
        result[index] = nums1[left];
        index++;
        left++;
    }

    while (right < m) {
        result[index] = nums2[right];
        index++;
        right++;
    }

    for(let )
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
