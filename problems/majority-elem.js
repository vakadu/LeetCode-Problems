function majority(nums) {
    let map = new Map(), count = Math.floor(nums.length / 2);

    for(let num of nums) {
        map.set(num, map.get(num)+1 || 1)
    }

    for(let [key, val] of map) {
        if(val > count) {
            return key
        }
    }

}

console.log(majority([3,2,3]));
console.log(majority([1,2,1,1,2,2,2,1]));
console.log(majority([1,1,2,2,2,1,1]));
