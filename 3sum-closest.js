function sumClose(nums, target) {
	let i = 0,
		j = nums.length - 1,
		sorted = nums.sort(),
		result = 0;

	while (i <= j) {
		let mid = Math.floor(i + (j - i) / 2);
		let sum = sorted[mid - 1] + sorted[mid] + sorted[mid + 1];
		if (target < sum) {
			result = sum;
			j = mid - 1;
		} else {
			i = mid + 1;
		}
	}
	console.log(result);
}

sumClose([-1, 2, 1, -4], 1);
