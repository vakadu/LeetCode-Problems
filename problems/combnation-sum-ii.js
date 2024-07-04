function recursion(candidates, target) {
    candidates.sort((a,b) => a-b);
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
        if(i>start&&candidates[i-1] === candidates[i]) {
            continue;
        }
        let sum = target - candidates[i];
        temp.push(candidates[i])
        helper(candidates, sum, temp, result, i+1);
        temp.pop()
    }
    
    return result
}

console.log(recursion([10,1,2,7,6,1,5], 8));

