function kthElem(arr1, arr2, k) {
    let i = 0,
        j = 0,
        result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result[k - 1];
}

console.log(kthElem([2, 3, 6, 7, 9], [1, 4, 8, 10], 5));
console.log(
    kthElem([100, 112, 256, 349, 770], [72, 86, 113, 119, 265, 445, 892], 7)
);
