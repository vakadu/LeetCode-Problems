function duplicate(nums, indexDiff, valueDiff) {
    let i=0, j=0;

    while(j<nums.length) {
        if(j-i+1 === indexDiff) {
            if(i !== j && (i - j) <= indexDiff && (nums[i] - nums[j] <= valueDiff)) {
                console.log("ghjk");
                return true;
            }
            i++;
            j++;
        } else {
            j++;
        }
    }

    return false;
}

duplicate([1,2,3,1], 3, 0);
