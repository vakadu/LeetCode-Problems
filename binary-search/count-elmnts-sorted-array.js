function count(nums, target) {
	let first = firstBs(nums, target);
	let last = lastBs(nums, target);
	console.log(last - first + 1);
}

function firstBs(arr, target) {
	let start = 0,
		end = arr.length - 1,
		res = -1;

	while (start <= end) {
		let mid = Math.floor(start + (end - start) / 2);

		if (target === arr[mid]) {
			end = mid - 1;
			res = mid;
		} else if (target > arr[mid]) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	return res;
}

function lastBs(arr, target) {
	let start = 0,
		end = arr.length - 1,
		res = -1;

	while (start <= end) {
		let mid = Math.floor(start + (end - start) / 2);

		if (target === arr[mid]) {
			start = mid + 1;
			res = mid;
		} else if (target > arr[mid]) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	return res;
}

count([2, 4, 10, 10, 10, 18, 20], 10);
