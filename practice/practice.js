// function sortedArr(arr) {
//     return helperSortedArr(arr, 0);
// }

// function helperSortedArr(arr, i) {
//     console.log(arr.length, i);
//     if(i === arr.length - 1) {
//         return true;
//     }

//     if(arr[i] < arr[i+1]) {
//         return helperSortedArr(arr, i+1);
//     } else {
//         return false;
//     }
// }

// console.log(sortedArr([1,2,4,3,7]));

// function linearSearch(arr, target) {
//     return helper(arr, target, 0);
// }

// function helper(a, t, i) {
//     const resArr = [];
//     if(i === a.length) {
//         return resArr;
//     }

//     if(a[i] === t) {
//         resArr.push(i);
//     }
//     const result = helper(a, t, i+1);
//     return [...resArr, ...result]
// }

// console.log(linearSearch([3,2,1,2,18,9], 2));

// function triangle(rows) {
//     return helper(rows, 0, '');
// }

// function helper(r, c, s) {
//     if(r === 0) {
//         return 
//     }

//     if(c >= r) {
//         helper(r-1, 0, '');
//         console.log(s);
//     } else {
//         helper(r, c+1, s + '*')
//     }
// }

// triangle(4);

// function bubbleSort(arr) {
//     for(let i=0; i<arr.length; i++) {
//         for(let j=1; j<arr.length - i; j++) {
//             if(arr[j] < arr[j-1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j-1];
//                 arr[j-1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// function bubbleSort2(arr) {
//     return helper(arr, 0, arr.length);
// }

// function helper(a, c, r) {
//     if(r === 0) {
//         return a;
//     }

//     if(c < r) {
//         if(a[c] > a[c+1]) {
//             let temp = a[c];
//             a[c] = a[c+1];
//             a[c+1] = temp;
//         }
//         return helper(a, c+1, r);
//     } else {
//         return helper(a, 0, r-1)
//     }

//     // if(a[c] > a[c+1]) {
//         // let temp = a[c];
//         // a[c] = a[c+1];
//         // a[c+1] = temp;
//         // return helper(a, c+1, r);
//     // } else {
//     //     return helper(a, 0, r-1)
//     // }
// }

// console.log(bubbleSort2([2,1,5,6, 10,3]));



// function selectionSort(arr) {
//     return helper(arr,0, arr.length, 0)
// }

// function helper(a, c, r, max) {
//     if(r === 0) {
//         return a;
//     }

//     if(c<r) {
//         if(a[c] > a[max]) {
//             return helper(a, c+1, r, c)
//         } else {
//             return helper(a, c+1, r, max)
//         }
//     } else {
//         let temp = a[max];
//         a[max] = a[r-1];
//         a[r-1] = temp;
//         return helper(a, 0, r-1, 0);
//     }
// }

// console.log(selectionSort([2,1,5,6,3]));


// function selectionSort2(a) {

//     for(let i=0; i<a.length; i++) {
//         let last = a.length - i - 1;
//         let max = getMax(a, 0, last);
//         let temp = a[max];
//         a[max] = a[last];
//         a[last] = temp
//     }
//     return a;
// }

// function getMax(a, s, e) {
//     let max = s;
//     for(let i=0; i<e; i++) {
//         if(a[max] < arr[i]) {
//             max = i;
//         }
//     }

//     return max;
// }

// console.log(selectionSort2([2,1,5,6,3]));

