function search(arr, target, start, end) {

    if(start > end) {
        return -1;
    }

    let mid = Math.floor(start + (end-start) / 2);

    if(arr[mid] === target) {
        return mid;
    }

    if(arr[start] <= arr[mid]) {
        if(target >= arr[start] && target <= arr[mid]) {
            return search(array, target, start, mid - 1);
        } else {
            return search(array, target, mid + 1, end)
        }
    }

    if(target >= arr[mid] && target <= arr[end]) {
        return search(array, target, mid + 1, end);
    }

    return search(array, target, start, mid - 1);
}

let array = [5,6,7,8,9,1,2,3,10];
console.log(search(array, 10, 0, array.length - 1));
