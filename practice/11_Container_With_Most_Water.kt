fun main() {
	println(container(intArrayOf(1, 8, 6, 2, 5, 4, 8, 3, 7)))
    println(container(intArrayOf(1, 1)))
    println(container(intArrayOf(1, 2, 4, 3)))
}

fun container(height: IntArray): Int {
	var max = 0; var i = 0; var j = height.size-1;
	
	while(i<j) {
		val min = minOf(height[i], height[j])
		val width = j-i
		max = maxOf(max, min*width)

		if(height[i] <= height[j]) {
			i++
		} else {
			j--
		}
	}

	return max;
}
