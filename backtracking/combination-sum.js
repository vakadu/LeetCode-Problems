function combinationSum(combination, target) {
    let result = [];
    helper(combination, target, 0, 0, [], result);
    return result;
}

function helper(arr, tar, index, cs, temp) {
    if(cs > tar || index >= arr.length) {
        return;
    }

    if(cs === tar) {
        result.push([...temp]);
        return;
    }

    cs = cs + arr[index];
    temp.push(arr[index]);
    helper(arr, tar, index, cs, temp, result);
    cs = cs - arr[index];
    temp.pop();

    helper(arr, tar, index+1, cs, temp, result);

}

console.log(combinationSum([2,3,6,7], 7));
