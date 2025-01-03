fun main() {
	println(canJump(intArrayOf(2, 3, 1, 1, 4)))
}

fun canJump(nums: IntArray): Boolean {
	val memo = mutableMapOf<Int, Boolean>()
	return jumpHelper(nums, 0, memo)
}

fun jumpHelper(nums: IntArray, i: Int, memo: MutableMap<Int, Boolean>): Boolean {
	if (memo.containsKey(i)) {
        return memo[i]!!
    }

	if(i >= nums.size-1) {
		return true
	}

	for(j in 1..nums[i]) {
		if(jumpHelper(nums, i+j, memo)) {
			memo[i] = true
			return true
		}
	}

	memo[i] = false
	return false
}
