function qucikSort(arr, low, hi) {

    if(low >= hi) {
        return;
    }

    let s = low;
    let e = hi;
    let mid = Math.floor(s + (e-s) / 2);
    let pivot = arr[mid];

    while(s <= e) {

        while(arr[s] < pivot) {
            s++;
        }

        while(arr[e] > pivot) {
            e--;
        }

        if(s<=e) {
            let temp = arr[s];
            arr[s] = arr[e];
            arr[e] = temp;
            s++;
            e--;
        }

    }
    qucikSort(arr, low, e);
    qucikSort(arr, s, hi)

    console.log(s, arr[s], arr[e],e, arr, low, hi);

}

let a = [5,8,4,3,2,1];
qucikSort(a, 0, a.length-1);
