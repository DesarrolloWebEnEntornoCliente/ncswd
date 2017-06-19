function Square(x, y) {
	function area() {
		return x * y;
	}
	return {
		area: area
	};
}

module.exports = Square;