fun main() {
	println(strStr("sadbutsad", "sad"));
}

fun strStr(haystack: String, needle: String): Int {
	for(i in 0 until haystack.length) {
		val temp = haystack.substring(i..i+needle.length)
	}
}
