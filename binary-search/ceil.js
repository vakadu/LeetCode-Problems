function ceil(nums, target) {
	let start = 0,
		end = nums.length - 1,
		result = -1;

	while (start <= end) {
		let mid = Math.floor(start + (end - start) / 2);

		if (target === nums[mid]) {
			return mid;
		} else if (target < nums[mid]) {
			result = nums[mid];
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return result;
}

console.log(ceil([1, 2, 3, 4, 6, 10, 10, 11, 19], 7));
