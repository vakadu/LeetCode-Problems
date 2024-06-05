function infiniteSortedArray(nums, target) {
	let start = 0,
		end = 1;

	while (start <= end) {
		if (target === nums[end]) {
			return end;
		} else if (target > nums[end]) {
			start = end;
			end = end * 2;
		} else {
			return bs(start, end, nums, target);
		}
	}
	return -1;
}

function bs(s, e, nums, t) {
	while (s <= e) {
		let mid = Math.floor(s + (e - s) / 2);
		if (t === nums[mid]) {
			return mid;
		} else if (t > nums[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return -1;
}

console.log(infiniteSortedArray([9, 11, 17, 26, 37, 52, 89, 111, 129, 144, 198], 89));
console.log(infiniteSortedArray([2, 4, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26], 20));
