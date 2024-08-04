function findUnion(arr1, arr2) {
    let i=0, j=0, result = [];

    while(i<arr1.length && j <arr2.length) {
        if(arr1[i] >= arr2[j]) {
            result.push(arr1[i])
            let t =result.some((s) => s === arr1[i]);
            console.log();
            i++;
        } else {
            result.push(arr2[j])
            j++;
        }
    }
    console.log(result);
}

// console.log(findUnion([1, 2, 3, 4, 5], [1, 2, 3, 6, 7]));
console.log(findUnion([2, 2, 3, 4, 5], [1, 1, 2, 3, 4]));
