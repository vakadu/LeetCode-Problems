function minScore(arr) {
	let max = Number.MIN_SAFE_INTEGER;

	for (let i = 0; i < arr.length; i++) {
		let firstMin = Number.MAX_SAFE_INTEGER,
			secondMin = Number.MAX_SAFE_INTEGER;
		for (let j = i; j < arr.length; j++) {
			if (arr[j] < firstMin) {
				secondMin = firstMin;
				firstMin = arr[j];
			} else if (arr[j] < secondMin) {
				secondMin = arr[j];
			}

			if (secondMin !== Number.MAX_SAFE_INTEGER) {
				max = Math.max(max, firstMin + secondMin);
			}
		}
	}

	return max;
}

console.log(minScore([4, 3, 1, 5, 6]));
console.log(minScore([5, 4, 3, 1, 6]));
