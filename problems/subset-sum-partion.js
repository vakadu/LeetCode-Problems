// function partion(nums) {
    // let sum = nums.reduce((acc, curr) => {
    //     return acc + curr
    // } ,0);

    // if(sum %2 === 0) {
    //     return helper(nums, sum/2, 0)
    // } else {
    //     return false
    // }
// }

// function helper(nums, target, n) {
//     if(target === 0) {
//         return true;
//     }

//     if(target <0 || n > nums.length) {
//         return false
//     }
//     let diff = target - nums[n];

//     return helper(nums, diff, n+1) || helper(nums, target, n+1)
// }

function memoize(nums) {
    let sum = nums.reduce((acc, curr) => {
        return acc + curr
    } ,0);

    if(sum %2 === 0) {
        return tabulation(nums, sum/2)
    } else {
        return false
    }
}

function tabulation(nums, target) {
    let table = new Array(nums.length+1).fill(false).map(() => new Array(target+1).fill(false))
    

    for(let i=0; i<nums.length+1; i++) {
        for(let j=0; j<target+1; j++) {
            if(j===0){
                table[i][j]=true
            }
        }
    }

    for (let i = 1; i < nums.length + 1; i++) {
		for (let j = 1; j < target + 1; j++) {
			if (j >= nums[i - 1]) {
				if (table[i - 1][j] === true) {
					table[i][j] = true;
				} else {
					let diff = j - nums[i - 1];
					table[i][j] = table[i - 1][diff];
				}
			} else {
				table[i][j] = table[i - 1][j];
			}
		}
	}

    return table[nums.length][target]
}

// function memoizehelper(nums, target, n, memo = {}) {
//     let key = `${target} - ${n}`;

//     if(key in memo) {
//         return memo[key]
//     }
//     if(target === 0) {
//         return true;
//     }

//     if(target <0 || n > nums.length) {
//         return false
//     }
//     let diff = target - nums[n];

//     memo[key] = memoizehelper(nums, diff, n+1, memo) || memoizehelper(nums, target, n+1, memo);
//     return memo[key]
// }

// console.log(partion([1,5,11,5]));
// console.log(partion([1,2,3,5]));
// console.log(partion([1,2,5]));
// console.log(memoize([1,5,11,5]));
// console.log(memoize([1,2,3,5]));
// console.log(memoize([1,2,5]));
// console.log(memoize([100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,99,97]))
console.log(memoize([1,2,5]));