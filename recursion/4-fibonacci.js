function fibonacci(n) {
    if(n < 2) {
        return n
    }
    const result = fibonacci(n-1) + fibonacci(n-2);
    console.log(result);
    return result;

}

function memoize(n, memo = {}) {
    if(memo[n]) {
        return memo[n]
    } else if(n <= 1) {
        return n
    }

    const result = memoize(n-1, memo) + memoize(n-2, memo);
    memo[n] = result;
    return result;
}

function tabulation(n) {
    if(n <= 1) {
        return n
    }

    const nums = [0, 1];

    for(let i=2; i<=n; n++) {
        nums[i] = nums[i-1] + nums[i-2];
    }

    return nums[n]
}

// fibonacci(4);
// memoize(4);
tabulation(4);
