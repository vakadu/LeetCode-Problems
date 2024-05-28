// function rotatedArr(arr) {
// 	let start = 0,
// 		end = arr.length - 1;

// 	while (start <= end) {
// 		let mid = Math.floor(start + (end - start) / 2);

// 		if (
// 			(mid === 0 || arr[mid] < arr[mid - 1]) &&
// 			(mid === arr.length - 1 || arr[mid] < arr[mid + 1])
// 		) {
// 			return arr[mid];
// 		}

// 		if (arr[mid] < arr[end]) {
// 			end = mid - 1;
// 		} else {
// 			start = mid + 1;
// 		}
// 	}
// }

// console.log(rotatedArr([3, 4, 5, 1, 2]));
// console.log(rotatedArr([4, 5, 6, 7, 0, 1, 2]));
// console.log(rotatedArr([11, 13, 15, 17]));
