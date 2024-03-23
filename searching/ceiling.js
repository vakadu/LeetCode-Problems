function ceiling(arr, target) {

    let start = 0, end = arr.length-1;
    
    while(start <= end) {
        let mid = start + (end - start) / 2;
        if(target === arr[mid]) {
            return arr[mid];
        }

        if(target > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }

    }

    console.log(start, end);

    return arr[start];

}

console.log(ceiling([2,3,5,9,14,16,18], 15));
