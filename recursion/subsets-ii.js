function recursion(nums) {
    nums.sort((a,b) => a-b);
    let set = new Set(), result = [];  
    helper(nums, [], result, set);
    return result;
}

function helper(nums, temp, result, set) {
    if(nums.length <= 0) {
        let currSet = JSON.stringify(temp);

        if(!set.has(currSet)) {
            set.add(currSet);
            result.push(temp);
        }

        return;
    }

    const first = nums[0];
    helper(nums.slice(1), temp.concat(first), result, set);
    helper(nums.slice(1), temp, result, set);

}

console.log(recursion([1,2,2]));
