function infiniteSortedArray(array, target) {
    let start = 0, end = 1;

    while(target > array[end]) {
        let temp = end+1;
        end = end + (end - start + 1) * 2;
        start = temp;
    }

    let s = binarySearch(start, end, target, array);
    console.log(s);

};

function binarySearch(s, e, t, g) {

    while(s <= e) {
        let mid = Math.floor(s + (e-s)/2);

        if(t === g[mid]) {
            return mid;
        }

        if(t < g[mid]) {
            e = mid - 1;
        } else {
            s = mid + 1;
        }
    }
    return -1;
}

infiniteSortedArray([1,2,3,4,5,6,7,8,9,11,12,13,14,18,22,25,27,32], 18)
