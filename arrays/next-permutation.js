function permutation(nums) {
    let result = [],
        map = new Map(),
        vMap = new Map();
    helper(nums, [], result);

    for (let i = 0; i < result.length; i++) {
        map.set(result[i].join(''), i);
        vMap.set(i, result[i]);
    }

    let ind = map.get(nums.join(''));
    let val = vMap.get(ind + 1);
    console.log(val);

    return result;
}

function helper(nums, temp, result) {
    if (nums.length <= 0) {
        result.push([...temp]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        let f = nums.slice(0, i),
            l = nums.slice(i + 1),
            c = nums[i];

        temp.push(c);
        helper([...f, ...l], temp, result);
        temp.pop();
    }
}

console.log(permutation([3, 2, 1]));
