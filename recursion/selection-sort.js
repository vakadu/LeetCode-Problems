function selectionSort(arr) {
    console.log(helper(arr, arr.length, 0, 0));
}

function helper(arr, row, column, max) {
    // by default we start max at 0
    if(row === 0) {
        return arr;
    }

    if(column < row) {

        // when max is less than column that means i have a max elemnt in the column 
        // so update max
        if(arr[column] > arr[max]) {
            return helper(arr, row, column + 1, column);
        } else {
            return helper(arr, row, column + 1, max);
        }
    } else {

        let temp = arr[max];
        arr[max] = arr[row-1];
        arr[row-1] = temp;
        console.log(arr, arr[row], arr[max], max);

        return helper(arr, row - 1, 0, 0);
    }
}

selectionSort([4,3,2,1])
