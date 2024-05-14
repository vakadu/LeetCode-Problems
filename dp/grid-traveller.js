function gridTraveller(m, n, memo = {}) {
    //m => row   n=> column
    const key = m + ',' + n;

    if(key in memo) {
        return memo[key]
    }

    if(m <=0 || n <= 0) {
        return 0;
    }

    if(m === 1 && n === 1) {
        return 1;
    }

    memo[key] = gridTraveller(m, n-1, memo) + gridTraveller(m-1, n, memo);
    return memo[key]

}

console.log(gridTraveller(12, 12));
