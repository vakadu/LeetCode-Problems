function greedy(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i;
		}
	}

	return -1;
}

function elmntInRotated(arr, target) {
	const getPeak = findPeak(arr);
	const first = bs(arr, 0, getPeak - 1, target);
	const last = bs(arr, getPeak, arr.length - 1, target);
	console.log(last, first);
}

function bs(nums, start, end, target) {
	while (start <= end) {
		let mid = Math.floor(start + (end - start) / 2);

		if (target === nums[mid]) {
			return mid;
		} else if (target > nums[mid]) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	return -1;
}

function findPeak(nums) {
	let start = 0,
		end = nums.length - 1;

	while (start <= end) {
		let mid = Math.floor(start + (end - start) / 2);

		if (nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1]) {
			return mid;
		}

		if (nums[mid] > nums[end]) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	return -1;
}

// console.log(greedy([11, 12, 13, 14, 2, 4, 5, 6], 13));
console.log(elmntInRotated([11, 12, 13, 14, 2, 4, 5, 6], 5));
