function combination(candidates, target) {
    let result = [];
    helper(candidates, target, result, [], 0);
    return result;
}

function helper(candidates, target, result, temp, k) {
    if (target === 0) {
        let t = [...temp];
        result.push(t);
        return;
    }

    if (target < 0) {
        return;
    }

    for (let i = k; i < candidates.length; i++) {
        let t = target - candidates[i];
        temp.push(candidates[i]);
        helper(candidates, t, result, temp, i);
        temp.pop();
    }
}

console.log(combination([2, 3, 6, 7], 7));
