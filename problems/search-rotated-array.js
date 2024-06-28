function search(nums, target) {
    let peak = findPeak(nums);
    let left = bs(nums, 0,peak,target);
    let right = bs(nums, peak+1,nums.length,target);
    console.log(right);
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
    let s=0, e=nums.length-1;

    while(s<=e) {
        let mid = Math.floor(s+(e-s)/2);
        if(nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]) {
            return mid;
        } else if(nums[mid] < nums[mid+1]) {
            s=mid+1;
        } else {
            e=mid-1
        }
    }

    return -1
}

console.log(search([4,5,6,7,0,1,2], 0));
