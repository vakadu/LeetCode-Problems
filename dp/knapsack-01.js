function recursive(wt, pt, w) {
    return helperRecursive(wt, pt, w, wt.length);
}

function helperRecursive(we, p, w, n) {

    if(n === 0 || w === 0) {
        return 0;
    }

    if(we[n-1] <= w) {
        return Math.max(p[n-1] + helperRecursive(we, p, w-we[n-1], n-1), helperRecursive(we, p, w, n-1));
    } else if(we[n-1] > w) {
        return helperRecursive(we, p, w, n-1);
    }
}

function memoize(wt, pt, w) {
    let dp = new Array(wt.length+1).fill(-1).map((el) => new Array(w+1).fill(-1));
    return helperMemoize(wt, pt, w, wt.length, dp);
}

function helperMemoize(wt, p, w, n, dp) {
    if(n === 0 || w === 0) {
        return 0;
    }

    if(dp[n][w] !== -1) {
        console.log(n, w);
        return dp[n][w];
    }
    console.log(dp);

    if(wt[n-1] <= w) {
        return dp[n][w] = Math.max(p[n-1] + helperMemoize(wt, p, w-wt[n-1], n-1, dp), helperMemoize(wt, p, w, n-1, dp));
    } else if(wt[n-1] > w) {
        return dp[n][w] = helperMemoize(wt, p, w, n-1, dp);
    }
}

// console.log(recursive([4,5,1], [1,2,3], 4));
console.log(memoize([4,5,1], [1,2,3], 4));
