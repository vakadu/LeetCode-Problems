function search(nums, target) {
	let s = 0,
		e = nums.length - 1,
		ans = 0;

	while (s <= e) {
		let mid = Math.floor(s + (e - s) / 2);

		if (target === nums[mid]) {
			return mid;
		} else if (target < nums[mid]) {
			e = mid - 1;
		} else {
			s = mid + 1;
		}
	}

	return s;
}

// console.log(search([1, 3, 5, 6], 5));
console.log(search([1, 3, 5, 6], 2));
console.log(search([1, 3, 5, 6], 7));
