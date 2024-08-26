function climbStairs(n) {
    // if (n in memo) {
    //     return memo[n];
    // }
    // if (n <= 1) {
    //     return 1;
    // }

    // memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    // return memo[n];

    let dp = new Array(n + 1).fill(0);
    (dp[1] = 1), (dp[2] = 2);

    for (let index = 3; index <= n; index++) {
        dp[index] = dp[index - 2] + dp[index - 1];
    }

    console.log(dp);

    return dp[n];
}

console.log(climbStairs(3));
