function search(nums, target) {
    let peak = findPeak(nums);
    console.log(peak);

    let left = bs(nums, 0, peak, target);
	let right = bs(nums, peak + 1, nums.length - 1, target);


    if(left !== -1) {
        return left;
    } else {
        return right
    }
}

function bs(nums, s,e,t) {
    while(s<=e) {
        let mid = Math.floor(s+(e-s)/2);
        if(t === nums[mid]) {
            return mid;
        } else if (t<nums[mid]) {
            e=mid-1;
        } else {
            s=mid+1
        }
    }
    return -1
}

function findPeak(nums) {
    let start = 0,
    end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (mid > 0 && nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
			return mid;
		} else if (mid === 0 && nums[mid] > nums[mid + 1]) {
			return mid;
		} else if (nums[mid] > nums[end]) {
			start++;
		} else {
			end--;
		}
    }
    return -1;
}

console.log(search([6,7,8,1,2,3,4,5], 6));
// console.log(search([4,5,6,7,0,1,2], 0));
// console.log(search([3,1], 1));
// console.log(search([5,1,3], 5));
