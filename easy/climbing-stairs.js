function climbingStairs(n) {

    if(n === 1 || n === 0) {
        return 1;
    }

    return climbingStairs(n-1) + climbingStairs(n-2);
}

console.log(climbingStairs(3));
