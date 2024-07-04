function findFirstLast(nums, target) {
	let start = 0,
		end = nums.length - 1;

	while (start <= end) {
		let mid = Math.floor(start + (end - start) / 2);
		if (target === nums[mid]) {
			let left = bs(nums, 0, mid - 1, target);
			let right = bs(nums, mid, nums.length - 1, target);
			return [left, right];
		} else if (target < nums[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}

	return [-1, -1];
}

function bs(nums, s, e, t) {
	while (s <= e) {
		let mid = Math.floor(s + (e - s) / 2);
		if (t === nums[mid]) {
			return mid;
		} else if (t < nums[mid]) {
			e = mid - 1;
		} else {
			s = mid + 1;
		}
	}
	return -1;
}

// console.log(findFirstLast([5, 7, 7, 8, 8, 10], 8));
// console.log(findFirstLast([5, 7, 7, 8, 8, 10], 6));
// console.log(findFirstLast([], 0));
console.log(findFirstLast([1], 1));
