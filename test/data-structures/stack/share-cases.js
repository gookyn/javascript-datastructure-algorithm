require('mocha');
const { expect } = require('chai');
const { CustomObj } = require('../../utils');

module.exports = function (Stack) {
	let stack;

	beforeEach(() => {
		stack = new Stack();
	});

	it('start empty', () => {
		expect(stack.size()).to.equal(0);
		expect(stack.isEmpty()).to.equal(true);
	});

	it('push elements', () => {
		stack.push(1);
		expect(stack.size()).to.equal(1);

		stack.push(2);
		expect(stack.size()).to.equal(2);

		stack.push(3);
		expect(stack.size()).to.equal(3);

		expect(stack.isEmpty()).to.equal(false);
	});

	it('pop elements', () => {
		stack.push(1);
		stack.push(2);
		stack.push(3);

		expect(stack.pop()).to.equal(3);
		expect(stack.pop()).to.equal(2);
		expect(stack.pop()).to.equal(1);
		expect(stack.pop()).to.equal(undefined);
	});

	it('peek at the top element', () => {
		expect(stack.peek()).to.equal(undefined);

		stack.push(1);
		expect(stack.peek()).to.equal(1);

		stack.push(2);
		expect(stack.peek()).to.equal(2);

		stack.pop();
		expect(stack.peek()).to.equal(1);
	});

	it('return the size', () => {
		expect(stack.size()).to.equal(0);

		stack.push(1);
		expect(stack.size()).to.equal(1);

		stack.push(2);
		expect(stack.size()).to.equal(2);

		stack.pop();
		expect(stack.size()).to.equal(1);

		stack.pop();
		expect(stack.size()).to.equal(0);

		stack.pop();
		expect(stack.size()).to.equal(0);
	});

	it('return is empty', () => {
		expect(stack.isEmpty()).to.equal(true);

		stack.push(1);
		expect(stack.isEmpty()).to.equal(false);

		stack.push(2);
		expect(stack.isEmpty()).to.equal(false);

		stack.clear();
		expect(stack.isEmpty()).to.equal(true);

		stack.push(1);
		stack.push(2);
		stack.pop();
		expect(stack.isEmpty()).to.equal(false);
		stack.pop();
		expect(stack.isEmpty()).to.equal(true);
	});

	it('clear the stack', () => {
		stack.clear();
		expect(stack.isEmpty()).to.equal(true);

		stack.push(1);
		stack.push(2);

		stack.clear();
		expect(stack.isEmpty()).to.equal(true);
	});

	it('return string', () => {
		expect(stack.toString()).to.equal('');

		stack.push(new CustomObj(1, 2));
		expect(stack.toString()).to.equal('1|2');

		stack.push(new CustomObj(3, 4));
		expect(stack.toString()).to.equal('1|2,3|4');
	});
};
