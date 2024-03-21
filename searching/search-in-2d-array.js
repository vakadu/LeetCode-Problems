// function search2darray(arr, target) {
//     let row = 0, col = arr[0].length-1;

//     while(row < arr.length && col >= 0) {
//         if(arr[row][col] === target) {
//             return {
//                 row,
//                 col
//             }
//         }

//         if(target < arr[row][col]) {
//             col--;
//         } else {
//             row++;
//         }
//     }

//     return -1;

// }

// let a = [
//     [10,20,30,40], 
//     [11,22,33,44],
//     [12,22,36,46],
//     [23,23,38,49]
// ];

// console.log(search2darray(a, 23));

function binarySearch(g, r, cStart, cEnd, t) {
    while(cStart <= cEnd) {
        let mid = Math.floor(cStart + (cEnd - cStart) / 2);

        if(g[r][mid] === t) {
            return {
                r, mid
            }
        }

        if(g[r][mid] > t) {
            cEnd = mid - 1;
        } else {
            cStart = mid + 1;
        }
    }
    return {
        row: -1, col: -1
    }
}

function search2darray(arr, target) {
    let rows = arr.length, cols = arr[0].length, rStart = 0, rEnd = rows - 1, cMid = Math.floor((cols)/2);

    //check if i have more than 2 rows
    //if true then reduce them
    while(rStart < (rEnd - 1)) {
        let mid = Math.floor(rStart + (rEnd - rStart)/2);
        if(arr[mid][cMid] === target) {
            return {
                mid, cMid
            }
        }

        if(arr[mid][cMid] > target) {
            rEnd = mid;
        } else {
            rStart = mid;
        }
    }

    //now check in the mid cols since we have only 2 rows
    if(arr[rStart][cMid] === target) {
        return {
            rStart, cMid
        }
    }

    if(arr[rEnd][cMid] === target) {
        return {
            rStart, cMid
        }
    }

    // if it is not in the mid search for the remaing parts except in the mid
    // 1st half
    if(target <= arr[rStart][cMid - 1]) {
        return binarySearch(arr, rStart, 0, cMid-1, target);
    }

    //2st half
    if(target >= arr[rStart][cMid + 1] && target <= arr[rStart][cols - 1]) {
        return binarySearch(arr, rStart, cMid+1, cols - 1, target);
    }

    //3rd half
    if(target <= arr[rEnd][cMid - 1]) {
        return binarySearch(arr, rEnd, 0, cMid - 1, target);
    }

    //4th half
    if(target >= arr[rEnd][cMid + 1]) {
        return binarySearch(arr, rEnd, cMid+1, cols - 1, target);
    }    

}

let a = [
    [1,2,3,4], 
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

console.log(search2darray(a, 5));
