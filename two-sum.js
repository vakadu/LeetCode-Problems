// function greedy(nums, target) {
// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (target === nums[i] + nums[j]) {
// 				return [i, j];
// 			}
// 		}
// 	}
// }

// function optimize(nums, target) {
// 	let i = 0;
// 	j = i + 1;

// 	while (i <= nums.length) {
// 		if (target === nums[i] + nums[j]) {
// 			return [i, j];
// 		} else if (j > nums.length) {
// 			i++;
// 			j = i + 1;
// 		} else {
// 			j++;
// 		}
// 	}
// }

// // console.log(greedy([2, 7, 11, 15], 9));
// // console.log(greedy([3, 2, 4], 6));
// // console.log(greedy([3, 3], 6));
// // console.log('============');
// console.log(optimize([2, 7, 11, 15], 9)); //[0,1]
// console.log(optimize([3, 2, 4], 6)); //[1,2]
// console.log(optimize([3, 3], 6)); //[0,1]
// console.log(optimize([3, 2, 3], 6));

function twoSUm(numbers, target) {
	let map = new Map();

	for (let i = 0; i < numbers.length; i++) {
		if (map.has(numbers[i])) {
			return [map.get(numbers[i]) + 1, i + 1];
		}

		map.set(target - numbers[i], i);
	}
}

console.log(twoSUm([2, 7, 11, 15], 9));
console.log(twoSUm([2, 3, 4], 6));
console.log(twoSUm([-1, 0], -1));
