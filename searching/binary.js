function binarySearch(array, target) {

    let start = 0, end = array.length - 1;

    // while(start <= end) {
    //     let mid = Math.floor(start + (end-start)/2);

    //     if(target < array[mid]) {
    //         end = mid - 1;
    //     } else if(target > array[mid]) {
    //         start = mid + 1;
    //     } else {
    //         return mid;
    //     }
    // }

    // return -1;

    //order agnostics BS
    //find weather array is asecending or descending
    let isAsc = false;

    while(start<=end) {
        let mid = Math.floor(start + (end-start)/2);

        if(array[mid] === target) {
            return mid;
        }

        if(isAsc) {
            if(target < array[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if(target > array[mid]) {
                end = mid - 1;
            } else{
                start = mid + 1;
            }
        }
    }

    return -1;
}

// console.log(binarySearch([1,34,45,78,92,122,134,156], 2));
console.log(binarySearch([100, 56, 45,32,24,12,6], 24));
