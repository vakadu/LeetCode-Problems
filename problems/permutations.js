function permutations(nums) {
    return helper(nums, [])
}

function helper(up, p) {    
    if(up.length === 0) {
        return [p]
    }

    let first = up.slice(0,1), remain = up.slice(1), result = [];

    for(let i=0; i<=p.length; i++) {
        let r = p.slice(0,i).concat(first, p.slice(i));
        let ans = helper(remain, r);
        result.push(...ans)
    }

    return result
}

console.log(permutations([1,2,3]));
