fun main() {
	println(sum(intArrayOf(1, 0, -1, 0, -2, 2), 0))
}

fun sum(nums: IntArray, target: Int): List<List<Int>> {
	nums.sort()
	var result = mutableListOf<List<Int>>()

	for(i in 0 until nums.size) {
		if(i>0 && nums[i] == nums[i-1]) {
			continue
		}
		for(j in i+1 until nums.size) {
			if(j>i+1 && nums[j] == nums[j-1]) {
				continue
			}
			var start=j+1
			var end = nums.size-1

			while(start < end) {
				val sum: Long = (nums[i].toLong() + nums[j].toLong() + nums[start].toLong() + nums[end].toLong())

				when {
					sum == target.toLong() -> {
						result.add(listOf(nums[i], nums[j], nums[start], nums[end]))
						while(start < end && nums[start] == nums[start+1]) {
							start++
						}
						while(start < end && nums[end] == nums[end-1]) {
							end--
						}
						start++
						end--
					}
					sum < target -> {
						start++
					} else -> {
						end--
					}
				}
			}
		}
	}

	return result;
}
