function mergeSort(arr) {

    if(arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));

    return merge(left, right);
}

function merge(l, r) {
    let i=0, j=0, sortedArr=[];

    // while(l && l.length && r && r.length) {
    //     if(l[0] < r[0]) {
    //         sortedArr.push(l.shift());
    //     } else {
    //         sortedArr.push(r.shift());
    //     }
    // }
    // return [...sortedArr, ...l, ...r]
    // console.log(sortedArr);

    while(l && i < l.length && r && j < r.length) {
        if(l[i] < r[j]) {
            sortedArr.push(l[i]);
            i++;
        } else {
            sortedArr.push(r[j]);
            j++;
        }
    }
    console.log(sortedArr, l, r);

    return sortedArr.concat(l.slice(i)).concat(r.slice(j));


}

//without creating a new array
function mergeSort2(arr) {
    helper(arr, 0, arr.length)
}

function helper(arr, start, end) {
    if(end - start === 1) {
        return;
    }

    let mid = Math.floor(start + (end - start) / 2);

    helper(arr, start, mid);
    helper(arr, mid, end)

    return mergePlace(arr, start, mid, end)
}

function mergePlace(arr, s, m, e) {
    console.log(s,m,e);
}

// console.log(mergeSort([3,1,5]));
console.log(mergeSort2([3,1,5, 4]));
