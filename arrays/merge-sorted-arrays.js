function merge(nums1, m, nums2, n) {
    // let temp = nums1.slice(0, m);
    // let temp2 = nums2.slice(0, n);
    // return [...temp, ...temp2].sort();

    let left = 0,
        right = 0;

    while (left < m && right < n) {
        if (nums1[left] < nums2[right]) {
            [nums1[left], nums2[right]] = [nums2[right], nums1[left]];
            left++;
            right++;
        }
    }
    console.log(nums1, nums2);
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
