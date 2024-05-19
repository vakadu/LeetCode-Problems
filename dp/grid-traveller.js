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

function tabular(m, n) {
    let arr = new Array(m+1).fill(0).map(() => new Array(n+1).fill(0));
    arr[1][1] = 1;

    for(let i=1; i<=m; i++) {
        for(let j=1; j<=n; j++) {
            let current = arr[i][j];
            if(j+1 <= n) {
                arr[i][j+1] += current;
            }
            if(i+1 <= m) {
                arr[i+1][j] += current;
            }
        }
    }
    console.log(arr);

    return arr[m][n]
}

// console.log(gridTraveller(12, 12));
console.log(tabular(12, 13));
