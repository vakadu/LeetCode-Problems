function maxProduct(nums) {
    let max = Number.MIN_SAFE_INTEGER, product = 1;

    for(let i=0; i<nums.length; i++) {
        product = product * nums[i];
        max = Math.max(max, product);

        if(product <= 0) {
            product = 1;
        }
    }

    console.log(max);
}

console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,0,-1]));
