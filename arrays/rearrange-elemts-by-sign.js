function rearrange(nums) {
    let pos = [],
        neg = [],
        result = [];

    for (let num of nums) {
        if (Math.sign(num) === -1) {
            neg.push(num);
        } else {
            pos.push(num);
        }
    }

    for (let i = 0; i < pos.length; i++) {
        let p = pos[i],
            n = neg[i];

        result.push(p, n);
    }

    console.log(result);
}

console.log(rearrange([3, 1, -2, -5, 2, -4]));
