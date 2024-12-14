fun main() {
	practice("abcabcbb")
}

fun practice(s: String): Int {
	val map = mutableMapOf<Char, Int>();
	var max = 0;
	var i = 0;
	var j = 0;

	while(j < s.length) {
		val charJ = s[j];
		map[charJ] = map.getOrDefault(charJ, 0) + 1

		if(map[charJ]!! > 1) {

			while(map[charJ]!! > 1) {
				val charI = s[i];
				map[charI] = map[charI]!! - 1

				if(map[charI]!! <= 0) {
					map.remove(charI)
				}
				i++;
			}
			j++
		} else {
			max = maxOf(max, j-i+1)
			j++
		}
	}

	return max
}
