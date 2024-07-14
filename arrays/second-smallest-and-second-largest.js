function brute(arr) {
	//wont work for duplicates
	arr.sort((a, b) => a - b);

	return { f: arr[1], s: arr[arr.length - 2] };
}

function better(arr) {
	let max = Number.MIN_SAFE_INTEGER,
		min = Number.MAX_SAFE_INTEGER,
		secondMax = Number.MIN_SAFE_INTEGER,
		secondMin = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < arr.length; i++) {
		max = Math.max(max, arr[i]);
		min = Math.min(min, arr[i]);
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== max) {
			secondMax = Math.max(secondMax, arr[i]);
		}

		if (arr[i] !== min) {
			secondMin = Math.min(secondMin, arr[i]);
		}
	}

	return { f: secondMin, s: secondMax };
}

console.log(better([1, 2, 4, 7, 7, 5]));
