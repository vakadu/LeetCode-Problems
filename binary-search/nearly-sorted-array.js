function nearlySorted(nums, target) {
	let start = 0,
		end = nums.length - 1;

	while (start <= end) {
		let mid = Math.floor(start + (end - start) / 2);
		console.log(start, end, mid);

		if (target === nums[mid]) {
			return mid;
		}
		if (mid + 1 <= end && target === nums[mid + 1]) {
			return mid + 1;
		}
		if (mid - 1 >= start && target === nums[mid - 1]) {
			return mid - 1;
		}

		if (target > nums[mid]) {
			start = mid + 2;
		} else {
			end = mid - 2;
		}
	}

	return -1;
}

console.log(nearlySorted([5, 10, 30, 20, 40, 60, 70, 90], 90));
