fun main() {
	atoi(" -042");
atoi("42");
atoi("1337c0d3");
atoi("0-123");
atoi("words and 987");
atoi("4193 with words");
atoi("-91283472332");
atoi("+1");

}

fun atoi(s: String): Number {
	val trimmedStr = s.trim();
	var i=0; var result=0; var sign = 1;

	if(i < trimmedStr.length && trimmedStr[i] == '+' || trimmedStr[i] == '-') {
		sign = if(trimmedStr[i] == '+') 1 else -1
	}

	while(i < trimmedStr.length && trimmedStr[i].isDigit()) {
		result = result * 10 + (trimmedStr[i] - '0')
		i++
	}

	return result * sign

}
