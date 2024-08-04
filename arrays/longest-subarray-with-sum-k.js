function longest(arr, k) {
	let i = 0,
		j = 0,
		sum = 0,
		max = 0;

	while (j < arr.length) {
		sum += arr[j];
		j++;

		while (sum > k && i <= j) {
			sum -= arr[i];
			i++;
		}

		if (sum === k) {
			max = Math.max(max, j - i);
		}
	}

	return max;
}

console.log(longest([10, 5, 2, 7, 1, 9], 15));
console.log(longest([-1, 2, 3], 6));
console.log(longest([1, 2, 3, 4, 5], 9));
console.log(longest([5, -1, 2, 3, -2, 4, 1], 6));
