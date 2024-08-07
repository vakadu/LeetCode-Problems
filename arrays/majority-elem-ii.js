var majorityElement = function (nums) {
    let result = [],
        max = Math.floor(nums.length / 3),
        map = new Map();

    for (let num of nums) {
        map.set(num, map.get(num) + 1 || 1);
    }

    for (let [key, val] of map) {
        if (val > max) {
            result.push(key);
        }
    }

    return result;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1, 2]));
