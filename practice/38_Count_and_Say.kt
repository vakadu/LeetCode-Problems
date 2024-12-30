fun main() {
	println(count(4))
}

fun count(n: Int): String {
    return helper1(n, 1, "1")
}

fun helper1(n: Int, start: Int, p: String): String {
	if(n==start) {
		return p
	}
	var count = 1
	var temp = ""
	var i = 0

	while(i<p.length-1) {
		if(p[i] == p[i+1]) {
			count++
		} else {
			temp = "$count${p[i]}"
			count = 1
		}
		i++
	}

	return helper1(n, start+1, temp)
}
