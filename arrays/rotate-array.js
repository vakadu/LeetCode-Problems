function rotate(nums, k) {
	k = k % nums.length;
	reverse(0, nums.length - 1, nums);
	reverse(0, k - 1, nums);
	reverse(k, nums.length - 1, nums);
	console.log(nums);
}

function reverse(start, end, nums) {
	console.log(start, end);
	while (start < end) {
		let temp = nums[start];
		nums[start] = nums[end];
		nums[end] = temp;
		start++;
		end--;
	}

	return nums;
}

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate([-1, -100, 3, 99], 2));
// console.log(rotate([-1], 2));
console.log(rotate([1, 2], 3));
