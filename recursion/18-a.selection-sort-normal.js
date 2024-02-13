function selectionSort(arr) {

    for(let i=0; i<arr.length; i++) {
        let last = arr.length-i-1;
        let maxIndex = getMaxIndex(arr, 0, last);
        let temp = arr[maxIndex];
        arr[maxIndex] = arr[last];
        arr[last] = temp;

    }
    console.log(arr);
    return arr;

}

function getMaxIndex(arr, start, end) {
    let max = start;
    for(let i=start; i<=end; i++) {
        if(arr[max] < arr[i]) {
            max = i;
        }
    }
    return max;
}

selectionSort([7,8,6,3,2])
