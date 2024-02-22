let d = [1,2,3,4,5,6];

function dice(p, target) {

    if(target === 0) {
        return [p];
    }
    let result = [];

    for(let i=1; i<=6 && i<=target; i++) {
        let up = target - i;
        let d = dice(p+i, up);
        // result.push(...d);
        result = result.concat(d)
    }
    return result;
}

console.log(dice('' ,4));

