function search(nums, target) {
	let s = 0,
		e = nums.length - 1;

	while (s <= e) {
		let mid = Math.floor(s + (e - s) / 2);

		if (target === nums[mid]) {
			let left = bs(nums, target, 0, mid - 1);
			let right = bs(nums, target, mid, nums.length - 1);
			console.log(left, right);
			return [left, right];
		} else if (target < nums[mid]) {
			e = mid - 1;
		} else {
			s = mid + 1;
		}
	}
}

function bs(nums, target, s, e) {
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

	return -1;
}

// console.log(search([5, 7, 7, 8, 8, 10], 8));
console.log(search([1], 1));
