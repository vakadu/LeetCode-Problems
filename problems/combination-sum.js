function recursion(candidates, target) {
    return helper(candidates, target, [], [], 0)
}

function helper(candidates, target, temp, result, start) {
    if(target < 0) {
        return;
    }

    if(target === 0) {
        result.push([...temp]);
        return;
    }

    for(let i=start; i<candidates.length; i++) {
        let sum = target - candidates[i];
        temp.push(candidates[i])
        helper(candidates, sum, temp, result, i);
        temp.pop()
    }
    
    return result
}

// console.log(recursion([2,3,6,7], 7));
console.log(recursion([2,3,5], 8));
