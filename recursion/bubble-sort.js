function bubbleSort(arr) {
    helper(arr, arr.length - 1, 0)
}

function helper(arr, row, colum) {
    if(row === 0) {
        console.log(arr);
        return arr;
    }

    if(colum < row) {

        if(arr[colum] > arr[colum + 1]) {
            let temp = arr[colum];
            arr[colum] = arr[colum + 1];
            arr[colum + 1] = temp;
        }

        return helper(arr, row, colum + 1);
    } else {
        return helper(arr, row - 1, 0);
    }
}

bubbleSort([1,4,2,5,3]);
