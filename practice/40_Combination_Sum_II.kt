fun main() {
	println(comsum(intArrayOf(2,5,2,1,2), 5))
}

fun comsum(candidates: IntArray, target: Int): List<List<Int>> {
	candidates.sort()
	var result = mutableListOf<List<Int>>()
	helpercom(candidates, target, result, mutableListOf(), 0)
	return result
}

fun helpercom(candidates: IntArray, target: Int, result: MutableList<List<Int>>, temp: MutableList<Int>, start: Int) {
	if(target == 0) {
		result.add(ArrayList(temp))
		return
	}

	if(target < 0) {
		return
	}

	for(i in start until candidates.size) {
		if(i > start && candidates[i] == candidates[i-1]) {
			continue;
		}
		var t = target - candidates[i]
		temp.add(candidates[i])
		helpercom(candidates, t, result, temp, i+1)
		temp.removeAt(temp.size-1)
	}
}
