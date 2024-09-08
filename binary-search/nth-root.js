function nthRoot(n, m) {
    let start = 1,
        end = m;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (Math.pow(mid, n) === m) {
            return mid;
        } else if (Math.pow(mid, n) > m) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;

    // for (let i = 1; i < m; i++) {
    //     if (Math.pow(i, n) === m) {
    //         return i;
    //     }
    // }

    // return -1;
}

console.log(nthRoot(2, 9));
console.log(nthRoot(3, 9));
