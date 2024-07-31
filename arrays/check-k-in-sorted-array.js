function check(arr, k) {
    let start=0, end =arr.length-1;

    while(start<=end) {
        let mid = Math.floor(start+(end-start)/2);

        if(arr[mid] === k) {
            return 1;
        } else if(arr[mid] < k) {
            start = mid+1;
        } else {
            end = mid-1
        }
    }

    return -1;
}

console.log(check([1,2,3,4,6], 6));
console.log(check([1,3,4,6], 2));
