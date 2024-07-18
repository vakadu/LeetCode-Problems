function recursion(arr, sum) {
	return helper(arr, sum, 0);
}

function helper(arr, sum, n) {
	if (sum === 0) {
		return 1;
	}

	if (sum < 0) {
		return 0;
	}

	if (n > arr.length) {
		return 0;
	}

	return helper(arr, sum - arr[n], n + 1) + helper(arr, sum, n + 1);
}

console.log(recursion([5, 2, 3, 10, 6, 8], 10));
console.log(recursion([2, 5, 1, 4, 3], 10));
