function missing(arr, k) {
    let result = [],
        i = 0,
        count = 1;

    while (result.length < k) {
        if (arr[i] !== count) {
            result.push(count);
        } else {
            i++;
        }
        count++;
    }

    console.log(result);
}

console.log(missing([2, 3, 4, 7, 11], 5));
