// function checkNumber(arr, target) {
//     // for(let i=0; i<arr.length; i++) {
//     //     if(arr[i] === target) {
//     //         return i;
//     //     }
//     // }

//     // return -1;

//     return helper(arr, target, 0)
// }

// function helper(a, t, i) {
//     if(i === a.length) {
//         return -1;
//     }

//     if(a[i] === t) {
//         return i;
//     }

//     return helper(a, t, i+1)
// }

// console.log(checkNumber([18, 12, 9, 14, 77], 14));

// function checkString(str, target) {

//     for(let i=0; i<str.length; i++) {
//         if(str[i] === target) {
//             return true;
//         }
//     }

//     return false;
// }

// console.log(checkString("vinod", "u"));

// function searchInRange(arr, range, target) {

//     for(let i=range[0]; i<=range[1]; i++) {

//         if(arr[i] === target) {
//             return i;
//         }
//     }

//     return -1;
// }

// console.log(searchInRange([18, 12, -7, 3, 14, 28], [1,4], 14));

// function minNumber(arr) {
//     // let min = arr[0];

//     // for(let i=1; i<arr.length; i++) {
//     //     // min = Math.min(min, arr[i]);
//     //     if(min > arr[i]) {
//     //         min = arr[i]
//     //     }
//     // }

//     // console.log(min);

//     return helper(arr, 1, arr[0]);
// }

// function helper(a, i, min) {
//     if(i === a.length) {
//         return min;
//     }

//     return helper(a, i+1, min > a[i] ? a[i] : min)
// }

// console.log(minNumber([18, 12, 3, 14, 28, 0]));

// function search2dArray(arr) {
//     // return helper(arr, target, 0, 0)
//     return helperMaxVal(arr, 0, 0, arr[0][0])

//     // for(let r=0; r<arr.length; r++) {
//     //     for(let c=0; c<arr[r].length; c++) {
//     //         if(arr[r][c] === target) {
//     //             return {
//     //                 r,
//     //                 c
//     //             }
//     //         }
//     //     }
//     // }

//     // return -1;
// }

// function helperMaxVal(g, r, c, max) {
//     let m = g.length - 1;
//     let n = g[0].length - 1;

//     if (r > m || c > n) {
//         console.log(max);
//         return max;
//     }

//     if(c < n) {
//         return helperMaxVal(g, r, c+1, Math.max(max, g[r][c]));
//     } else {
//         return helperMaxVal(g, r+1, 0, Math.max(max, g[r][c]));
//     }
// }

// function helper(g, t, r, c) {
//     let m = g.length - 1;
//     let n = g[0].length - 1;

//     if (r > m || c > n) {
//         return -1;
//     }

//     if(r <= m && g[r][c] === t) {
//         return {
//             r,
//             c
//         }
//     }

//     if(c < n) {
//         return helper(g, t, r, c+1);
//     } else {
//         return helper(g, t, r+1, 0);
//     }
// }

// let a = [
//     [23,4,1],
//     [18,22,3,9],
//     [78,99,34,56],
//     [18,12]
// ];
// // console.log(search2dArray(a, 12));
// console.log(search2dArray(a));

// function evenOrOdds(arr) {
//     // return helper(arr, 0);
//     let count = 0;
//     for(let i=0; i<arr.length; i++) {
//         if(even(arr[i])) {
//             count++;
//         }
//     }

//     return count;
// }

// function even(digits) {
//     let count = 0, n = digits;
//     while(n > 0) {
//         count++;
//         n = n/10;
//     }

//     return count % 2 === 0
// }

// function helper(g, i) {
//     let count = 0;
//     if(i >= g.length) {
//         return count;
//     }

//     if(g[i].toString().length % 2 === 0) {
//         count = count + 1;
//     }

//     return count + helper(g, i+1)
// }

// console.log(evenOrOdds([12,345,2,6,7896, 32]));

function maxWealth(arr) {
    // return helper(arr, 0, 0);

    let max = 0;

    for(let i=0; i<arr.length; i++) {
        let cs = arr[i].reduce((acc, j) => acc += j, 0);
        max = cs > max ? cs : max;
    }

    return max;
}

function helper(g, i, max) {
    if(i > g.length-1) {
        return max;
    }

    const currentSum = g[i].reduce((acc, i) => {
        return acc += i
    }, 0);
    max = Math.max(max, currentSum);

    return helper(g, i+1, max);
}

console.log(maxWealth([[2,8,7],[7,1,3],[1,9,5]]));
