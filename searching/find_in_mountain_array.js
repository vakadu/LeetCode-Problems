function mountainArray(target, mountainArr) {

    let peak = findPeak(mountainArr);
    let left = binarySearch(mountainArr, target, 0, peak, false);
    let right = binarySearch(mountainArr, target, peak+1, mountainArr.length, true);

    if(left !== -1) {
        return left;
    }

    return Math.min(left, right);
}

function binarySearch(arr, target, s, e, asc) {

    while (s<=e) {
        let mid = s + (e-s)/2;

        if(target === arr[mid]) {
            return mid;
        }

        if(target < arr[mid]) {
            s = mid + 1;
        } else {
            e = mid - 1
        }
    }

    return -1;
}

function findPeak(arr) {
    let start = 0, end = arr.length;

    while(start < end) {
        let mid = Math.floor(start + (end - start) / 2);

        if(arr[mid] < arr[mid+1]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return start;
}

console.log(mountainArray(3, [1,2,3,4,5,3,1]));
