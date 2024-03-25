function rotatedSearch(nums, target) {

    let pivot = findPivot(nums);
    console.log(pivot);

    if(pivot === -1) {
        return binarySearch(nums, target, 0, nums.length-1)
    }
    
    if(nums[pivot] === target) {
        return pivot;
    }

    if(target >= nums[0]) {
        return binarySearch(nums, target, 0, pivot - 1);
    }
    return binarySearch(nums, target, pivot + 1, nums.length-1)
}

function binarySearch(arr, target, start, end) {    
    while(start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if(target > arr[mid]) {
            start = mid + 1;
        } else if(target < arr[mid]) {
            end = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}

function findPivot(arr) {
    let start = 0, end = arr.length-1;

    while(start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if(mid < end && arr[mid] > arr[mid+1]) {
            return mid;
        }

        if(mid > start && arr[mid] < arr[mid-1]) {
            return mid-1;
        }

        if(arr[mid] <= arr[start]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}

console.log(rotatedSearch([3,4,5,6,1,2], 2));
