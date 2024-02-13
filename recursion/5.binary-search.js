function binarySearch(arr, target, start, end) {

    let mid = Math.floor(start + (end-start) / 2);

    if(start>end) {
        return -1
    }

    if(target === arr[mid]) {
        const result = arr[mid];
        console.log(result, arr.indexOf(result));
        return result;
    }

    if(target > arr[mid]) {
        return binarySearch(arr, target, mid + 1, end)
    }

    return binarySearch(arr, target, start, mid - 1)
}

const nums = [1,2,3,4,55,66, 78]
binarySearch(nums, 22, 0, nums.length);
