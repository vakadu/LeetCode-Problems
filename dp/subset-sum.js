function subSet(arr, sum) {
    return helper(arr, sum, 0);
}

function helper(arr, sum, i) {
    if (sum === 0) {
        return 1;
    }

    if (sum < 0 || i >= arr.length) {
        return 0;
    }

    if (sum >= arr[i]) {
        return helper(arr, sum - arr[i], i + 1) + helper(arr, sum, i + 1);
    } else {
        return helper(arr, sum, i + 1);
    }
}

console.log(subSet([3, 34, 4, 12, 5, 2], 9));
console.log(subSet([3, 34, 4, 12, 5, 2], 30));
