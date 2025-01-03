function sum(candidates, target) {
    candidates.sort((a, b) => a - b);
    let result = [];
    helper(candidates, target, result, [], 0);
    return result;
}

function helper(candidates, target, result, temp, start) {
    if (target === 0) {
        result.push([...temp]);
        return;
    }

    if (target < 0) {
        return;
    }

    for (let index = start; index < candidates.length; index++) {
        if (index > start && candidates[index] === candidates[index - 1]) {
            continue;
        }
        const element = target - candidates[index];
        temp.push(candidates[index]);
        helper(candidates, element, result, temp, index + 1);
        temp.pop();
    }
}

console.log(sum([2, 5, 2, 1, 2], 5));
