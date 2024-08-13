function minCoins(coins, v) {
    // let result = [];
    // for (let i = coins.length; i >= 0; i--) {
    //     while (v >= coins[i]) {
    //         v -= coins[i];
    //         result.push(coins[i]);
    //     }
    // }

    // return result;

    return helper(coins, v);
}

function helper(coins, v) {
    if (v <= 0) {
        return 0;
    }
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < coins.length; i++) {
        if (coins[i] <= v) {
            const subResult = minCoins(coins, v - coins[i]);

            if (subResult !== Number.MAX_SAFE_INTEGER && subResult + 1 < min) {
                min = subResult + 1;
            }
        }
    }

    return min;
}

console.log(minCoins([1, 2, 5, 10, 20, 50, 100, 500, 1000], 49));
