function union(arr1, arr2) {
    let i = 0,
        j = 0,
        result = [],
        prev = null;

    while (i < arr1.length && j < arr1.length) {
        if (arr1[i] === arr2[j]) {
            if (arr1[i] !== prev) {
                result.push(arr1[i]);
                prev = arr[i];
            }
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            if (arr1[i] !== prev) {
                result.push(arr1[i]);
                prev = arr1[i];
            }
            i++;
        } else {
            if (arr2[j] !== prev) {
                result.push(arr2[j]);
                prev = arr2[j];
            }
            j++;
        }
    }

    while (i < arr1.length) {
        if (arr1[i] !== prev) {
            result.push(arr1[i]);
            prev = arr1[i];
        }
        i++;
    }

    // if (i <= arr1.length) {
    //     let a1 = arr1.slice(i);
    //     result.push(...a1);
    // }

    while (j < arr2.length) {
        if (arr2[j] !== prev) {
            result.push(arr2[j]);
            prev = arr2[j];
        }
        j++;
    }

    // if (j <= arr2.length) {
    //     let a2 = arr2.slice(j);
    //     result.push(...a2);
    // }

    return result;
}

// console.log(union([1, 2, 3, 4, 5], [1, 2, 3, 6, 7]));
console.log(union([1, 1, 1], [2, 2, 2]));
