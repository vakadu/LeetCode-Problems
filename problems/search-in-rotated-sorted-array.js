function search(nums, target) {
	let peak = findPeak(nums);
	if (peak === -1) {
		return bs(nums, target, 0, nums.length - 1);
	}

	let left = bs(nums, target, 0, peak);
	let right = bs(nums, target, peak + 1, nums.length - 1);

	if (left !== -1) {
		return left;
	} else if (right !== -1) {
		return right;
	} else {
		return -1;
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

function findPeak(nums) {
	let s = 0,
		e = nums.length - 1;
	while (s <= e) {
		let mid = Math.floor(s + (e - s) / 2);

		if (mid > 0 && nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
			return mid;
		} else if (mid === 0 && nums[mid] > nums[mid + 1]) {
			return mid;
		} else if (nums[mid] > nums[e]) {
			s = mid + 1;
		} else {
			e = mid - 1;
		}
	}
	return -1;
}

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
// console.log(search([1], 0));
console.log(search([3, 1], 1));
