require('mocha');
const { expect } = require('chai');
const { Queue } = require('../../../src/data-structures');
const { CustomObj } = require('../../utils');

describe('Queue', () => {
	let queue;

	beforeEach(() => {
		queue = new Queue();
	});

	it('start empty', () => {
		expect(queue.size()).to.equal(0);
		expect(queue.isEmpty()).to.equal(true);
	});

	it('enqueue elements', () => {
		queue.enqueue(1);
		expect(queue.size()).to.equal(1);

		queue.enqueue(2);
		expect(queue.size()).to.equal(2);

		queue.enqueue(3);
		expect(queue.size()).to.equal(3);

		expect(queue.isEmpty()).to.equal(false);
	});

	it('dequeue elements', () => {
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);

		expect(queue.dequeue()).to.equal(1);
		expect(queue.dequeue()).to.equal(2);
		expect(queue.dequeue()).to.equal(3);
		expect(queue.dequeue()).to.equal(undefined);
	});

	it('peek at the front element', () => {
		expect(queue.peek()).to.equal(undefined);

		queue.enqueue(1);
		expect(queue.peek()).to.equal(1);

		queue.enqueue(2);
		expect(queue.peek()).to.equal(1);

		queue.dequeue();
		expect(queue.peek()).to.equal(2);
	});

	it('return the size', () => {
		expect(queue.size()).to.equal(0);

		queue.enqueue(1);
		expect(queue.size()).to.equal(1);

		queue.enqueue(2);
		expect(queue.size()).to.equal(2);

		queue.dequeue();
		expect(queue.size()).to.equal(1);

		queue.dequeue();
		expect(queue.size()).to.equal(0);

		queue.dequeue();
		expect(queue.size()).to.equal(0);
	});

	it('return is empty', () => {
		expect(queue.isEmpty()).to.equal(true);

		queue.enqueue(1);
		expect(queue.isEmpty()).to.equal(false);

		queue.enqueue(2);
		expect(queue.isEmpty()).to.equal(false);

		queue.clear();
		expect(queue.isEmpty()).to.equal(true);

		queue.enqueue(1);
		queue.enqueue(2);
		queue.dequeue();
		expect(queue.isEmpty()).to.equal(false);
		queue.dequeue();
		expect(queue.isEmpty()).to.equal(true);
	});

	it('clear the queue', () => {
		queue.clear();
		expect(queue.isEmpty()).to.equal(true);

		queue.enqueue(1);
		queue.enqueue(2);

		queue.clear();
		expect(queue.isEmpty()).to.equal(true);
	});

	it('return string', () => {
		expect(queue.toString()).to.equal('');

		queue.enqueue(new CustomObj(1, 2));
		expect(queue.toString()).to.equal('1|2');

		queue.enqueue(new CustomObj(3, 4));
		expect(queue.toString()).to.equal('1|2,3|4');
	});
});
