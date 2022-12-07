class CustomObj {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}
	toString() {
		return `${this.a.toString()}|${this.b.toString()}`;
	}
}

module.exports = CustomObj;
