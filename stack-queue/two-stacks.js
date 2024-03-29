function twoStacks(a, b, x) {

    return helper(a, b, x, 0, 0) - 1;

}

function helper(a1, b1, target, sum, count) {

    if(sum > target) {
        return count;
    }

    if(a1.length === 0 || b1.length === 0) {
        return count;
    }

    let left = helper(a1.slice(1, a1.length), b1, target, sum+a1[0], count+1);
    let right = helper(a1, b1.slice(1, b1.length), target, sum+b1[0], count+1);

    return Math.max(left, right);
}

console.log(twoStacks([4,2,4,6,1], [2,1,8,5], 10));
