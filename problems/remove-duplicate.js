function remove(nums) {
    let count=1;
    for(let i=0; i<nums.length-1; i++) {
        if(nums[i] !== nums[i+1]) {
            nums[count] = nums[i+1]
            count++;
        }
    }

    return count

    console.log(count, nums);
}

function removeElem(nums, val) {
    let count=0;
    for(let i=0; i<nums.length-1; i++) {
        if(nums[i] !== val) {
            nums[count] = nums[i]
            count++;
        }
    }

    return count

}

function firstOcuurence(haystack, needle) {
    let i=0, j=needle.length, result=-1;

    while(j<=haystack.length) {
        let slice = haystack.slice(i,j);
        console.log(slice);
        if(needle === slice) {
            return i;
        } else {
            i++;
            j++;
        }
    }

    return result;
}

// console.log(remove([0,0,1,1,1,2,2,3,3,4]));

// console.log(removeElem([0,1,2,2,3,0,4,2],2));
// console.log(removeElem([2],3));

// console.log(firstOcuurence("leetcode", "leeto"));
console.log(firstOcuurence("sadbutsad", "but"));
// console.log(firstOcuurence("a", "a"));
