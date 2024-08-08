function occurences(arr, x) {
    let left = bs(arr, x, true);
    let right = bs(arr, x, false);

    return left + right;
}

function bs(arr, target, isFirst) {
    let start = 0,
        end = arr.length - 1,
        count = 0;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (arr[mid] === target) {
            count++;
            if (isFirst) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return count;
}

console.log(occurences([1, 1, 2, 2, 2, 2, 3], 2));
console.log(occurences([1, 1, 2, 2, 2, 2, 3], 4));
