function insertionSort(arr) {
    for(let i=0; i<arr.length-1; i++) {

        for(j=i+1; j>0; j--) {
            if(arr[j] < arr[j-1]) {
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            } else {
                break;
            }
        }

    }
    console.log(arr);
    return arr;
}

insertionSort([5,3,4,1,2]);
