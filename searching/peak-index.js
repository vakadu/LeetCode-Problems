function peakIndex(arr) {
    // let max = arr[0], ind=0;

    // for(let i=1; i<arr.length; i++) {
    //     if(arr[i] > max) {
    //         max = arr[i];
    //         ind = i;
    //     }
    // }

    // return ind;

    let s = 0, e = arr.length-1;

    while(s<e) {
        let mid = Math.floor(s + (e-s)/2);

        if(arr[mid] > arr[mid+1]) {
            e = mid;
        } else {
            s = mid + 1
        }
    }
    
    return s;

}

console.log(peakIndex([24,69,100,99,79,78,67,36,26,19]));
