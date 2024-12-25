fun main() {
	println(revInt(321));
println(revInt(-345));
println(revInt(3210));
}

fun revInt(x: Int): Int {
	var num = x
	var reversed = 0

	while(x != 0) {
		val digit = num%10
		num=x/10

		reversed = reversed * 10 + digit
	}

	return reversed
}
