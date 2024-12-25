fun main() {
	println(closest(intArrayOf(-1, 2, 1, -4), 1))
}

fun closest(nums: IntArray, target: Int): Int {
	nums.sort()
	var result = 0
	var min = Int.MAX_VALUE

	for(i in 0 until nums.size) {
		var start=i+1
		var end=nums.size-1

		while(start<end) {
			val sum = nums[i] + nums[start] + nums[end]
			val diff = Math.abs(target-sum)

			if(diff < min) {
				min = minOf(min, diff)
				result = sum
			}

			when {
				sum < target -> start ++
				sum > target -> end--
				else return sum
			}
		}
	}

	return result
}
