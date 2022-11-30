require('mocha');
const { expect } = require('chai');
const Deque = require('../../../src/data-structures/queue/deque');

describe('Deque', () => {
	let deque;

	beforeEach(() => {
		deque = new Deque();
	});

	it('start empty', () => {
		expect(deque.size()).to.equal(0);
		expect(deque.isEmpty()).to.equal(true);
	});

	it('add elements in the rear', () => {
		deque.addRear(1);
		expect(deque.size()).to.equal(1);

		deque.addRear(2);
		expect(deque.size()).to.equal(2);

		deque.addRear(3);
		expect(deque.size()).to.equal(3);
	});

	it('add elements in the front', () => {
		deque.addFront(1);
		expect(deque.size()).to.equal(1);

		deque.addFront(2);
		expect(deque.size()).to.equal(2);

		deque.addFront(3);
		expect(deque.size()).to.equal(3);

		expect(deque.isEmpty()).to.equal(false);
	});

	it('remove elements from the rear', () => {
		deque.addRear(1);
		deque.addRear(2);
		deque.addRear(3);
		deque.addFront(0);

		expect(deque.removeRear()).to.equal(3);
		expect(deque.removeRear()).to.equal(2);
		expect(deque.removeRear()).to.equal(1);
		expect(deque.removeRear()).to.equal(0);
		expect(deque.removeRear()).to.equal(undefined);
	});

	it('remove elements from the front', () => {
		deque.addRear(1);
		deque.addRear(2);
		deque.addRear(3);
		deque.addFront(0);
		deque.addFront(-1);
		deque.addFront(-2);
		deque.addFront(-3);

		expect(deque.removeFront()).to.equal(-3);
		expect(deque.removeFront()).to.equal(-2);
		expect(deque.removeFront()).to.equal(-1);
		expect(deque.removeFront()).to.equal(0);
		expect(deque.removeFront()).to.equal(1);
		expect(deque.removeFront()).to.equal(2);
		expect(deque.removeFront()).to.equal(3);
		expect(deque.removeFront()).to.equal(undefined);
	});

	it('peek at the front element', () => {
		expect(deque.peekFront()).to.equal(undefined);

		deque.addRear(1);
		expect(deque.peekFront()).to.equal(1);

		deque.addRear(2);
		expect(deque.peekFront()).to.equal(1);

		deque.addRear(3);
		expect(deque.peekFront()).to.equal(1);

		deque.addFront(0);
		expect(deque.peekFront()).to.equal(0);

		deque.addFront(-1);
		expect(deque.peekFront()).to.equal(-1);

		deque.addFront(-2);
		expect(deque.peekFront()).to.equal(-2);

		deque.addFront(-3);
		expect(deque.peekFront()).to.equal(-3);
	});

	it('peek at the rear element', () => {
		expect(deque.peekRear()).to.equal(undefined);

		deque.addRear(1);
		expect(deque.peekRear()).to.equal(1);

		deque.addRear(2);
		expect(deque.peekRear()).to.equal(2);

		deque.addRear(3);
		expect(deque.peekRear()).to.equal(3);

		deque.addFront(0);
		expect(deque.peekRear()).to.equal(3);

		deque.addFront(-1);
		expect(deque.peekRear()).to.equal(3);

		deque.addFront(-2);
		expect(deque.peekRear()).to.equal(3);

		deque.addFront(-3);
		expect(deque.peekRear()).to.equal(3);
	});

	it('return the size', () => {
		expect(deque.size()).to.equal(0);

		deque.addRear(1);
		expect(deque.size()).to.equal(1);

		deque.addRear(2);
		expect(deque.size()).to.equal(2);

		deque.addFront(0);
		expect(deque.size()).to.equal(3);

		deque.addFront(-1);
		expect(deque.size()).to.equal(4);

		deque.addFront(-2);
		expect(deque.size()).to.equal(5);

		deque.clear();
		expect(deque.size()).to.equal(0);

		deque.addFront(1);
		deque.addRear(2);
		expect(deque.size()).to.equal(2);

		deque.removeFront();
		deque.removeRear();
		expect(deque.size()).to.equal(0);
	});

	it('return is empty', () => {
		expect(deque.isEmpty()).to.equal(true);

		deque.addRear(1);
		expect(deque.isEmpty()).to.equal(false);

		deque.addRear(2);
		expect(deque.isEmpty()).to.equal(false);

		deque.clear();
		expect(deque.isEmpty()).to.equal(true);

		deque.addFront(-1);
		deque.addFront(-2);

		deque.removeFront();
		expect(deque.isEmpty()).to.equal(false);

		deque.removeRear();
		expect(deque.isEmpty()).to.equal(true);
	});

	it('clear the queue', () => {
		deque.clear();
		expect(deque.isEmpty()).to.equal(true);

		deque.addRear(1);
		deque.addRear(2);
		deque.addFront(0);
		deque.addFront(-1);

		expect(deque.isEmpty()).to.equal(false);

		deque.clear();
		expect(deque.isEmpty()).to.equal(true);
	});

	it('return string', () => {
		expect(deque.toString()).to.equal('');

		class Obj {
			constructor(a, b) {
				this.a = a;
				this.b = b;
			}
			toString() {
				return `${this.a.toString()}:${this.b.toString()}`;
			}
		}

		deque.addRear(new Obj(1, 2));
		expect(deque.toString()).to.equal('1:2');

		deque.addRear(new Obj(3, 4));
		expect(deque.toString()).to.equal('1:2,3:4');

		deque.addFront(new Obj(-1, 0));
		expect(deque.toString()).to.equal('-1:0,1:2,3:4');
	});
});
