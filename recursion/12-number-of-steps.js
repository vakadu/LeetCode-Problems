function numberOfSteps(n) {
    return helper(n, 0)
}

function helper(n, count) {
    if(n===0) {
        return count;
    }
    count++;
    console.log(count);

    if(n%2 === 0) {
        let step = n/2;
        return helper(step, count);
    } else {
        let step = n-1;
        return helper(step, count);
    }
}

numberOfSteps(14)
