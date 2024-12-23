fun main() {
	println(generate(3))
}

fun generate(n: Int): List<String> {
	return helper(n, n, "")
}

fun helper(i: Int, j: Int, p: String):List<String> {
	var result = mutableListOf<String>()

	if(i==0 && j==0){
		return listOf(p)
	}

	if(i>0){
		result.addAll(helper(i-1, j, "$p("))
	}

	if(i<j &&j>0){
		result.addAll(helper(i, j-1, "$p)"))
	}

	return result
}
