// function partionString(str) {
//     const result = helper(str, 0);
//     return result.length > 0 ? result.length : -1;
// }

// function helper(s, i) {
//     if(i === s.length) {
//         return [];
//     }

//     let crop = s.slice(0, i+1), res = [];
//     if(Number(crop) % 5 === 1) {
//         res.push(crop);
//     }

//     let result = helper(s, i+1);
//     return result.concat(res);
// }

// console.log(partionString("1011"));

function partionString(str) {
    return helper(str, 0);
}

function helper(s, i) {
    if(i === s.length) {
        return;
    }

    let left = s.slice(0, i+1);
    let right = s.slice(i+1);
    console.log(left, right);
}

console.log(partionString("1011"));
