function occur(arr, target) {
	let start = 0,
		end = arr.length - 1,
		result = -1;

	while (start <= end) {
		let mid = Math.floor(start + (end - start) / 2);

		if (target === arr[mid]) {
			result = mid;
			end = mid - 1;
		} else if (target > target) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	console.log(result);
}

console.log(occur([2, 4, 10, 10, 10, 18, 20], 10));
