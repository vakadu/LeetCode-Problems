fun main() {
	println(valid("()[]{}"))
	println(valid("([])"))
	println(valid("([]"))
}

fun valid(s: String): Boolean {
	var keys = mapOf(')' to '(', ']' to '[', '}' to '{')
	var stack = mutableListOf<Char>()

	for(char in s) {
		if(stack.isNotEmpty() && keys[char] == stack.last()) {
			stack.removeAt(stack.size-1)
			continue
		}
		stack.add(char)
	}

	return stack.isEmpty()
}
