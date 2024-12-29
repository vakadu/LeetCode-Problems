fun main(){
	println(first(intArrayOf(5, 7, 7, 8, 8, 10), 8))
}

fun first(nums: IntArray, target: Int): IntArray {
    val result = intArrayOf(-1, -1)
    result[0] = bs(nums, target, true)
    result[1] = bs(nums, target, false)
    return result
}

fun bs(nums: IntArray, target: Int, isFirst: Boolean): Int {
	var start = 0;var end = nums.size-1; var result=-1;

	while(start<=end) {
		var mid = start+(end-start)/2;
		if(nums[mid] == target) {
			result = mid
			if(isFirst) {
				end = mid -1
			} else {
				start = mid+1
			}
		} else if(nums[mid] < target) {
			start = mid+!
		} else {
			end = mid-1
		}
	}

	return result
}
