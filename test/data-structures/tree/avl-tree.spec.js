require('mocha');
const { expect } = require('chai');
const { AVLTree } = require('../../../src/data-structures');

describe('AVL Tree', () => {
	let tree;

	beforeEach(() => {
		tree = new AVLTree();
	});

	it('start empty', () => {
		expect(tree.getRoot()).to.null;
	});

	function assertNode(node, key, left, right) {
		if (key != null) {
			expect(node.key).to.equal(key);
		} else {
			expect(node).to.equal(key);
			return;
		}

		if (left != null) {
			expect(node.left.key).to.equal(left);
		} else {
			expect(node.left).to.equal(left);
		}

		if (right != null) {
			expect(node.right.key).to.equal(right);
		} else {
			expect(node.right).to.equal(right);
		}
	}

	function insertNode(tree) {
		tree.insert(11);
		tree.insert(7);
		tree.insert(15);
		tree.insert(5);
		tree.insert(3);
		tree.insert(9);
		tree.insert(8);
		tree.insert(10);
		tree.insert(13);
		tree.insert(12);
		tree.insert(14);
		tree.insert(20);
		tree.insert(18);
		tree.insert(25);
	}

	it('insert elements in the AVLTree', () => {
		expect(tree.getRoot()).to.null;

		insertNode(tree);

		let node = tree.getRoot();
		assertNode(node, 11, 7, 15);

		node = node.left;
		assertNode(node, 7, 5, 9);

		node = node.left;
		assertNode(node, 5, 3, null);

		node = node.left;
		assertNode(node, 3, null, null);

		node = tree.getRoot().left.left.right;
		assertNode(node, null, null, null);

		node = tree.getRoot().left.right;
		assertNode(node, 9, 8, 10);

		node = node.left;
		assertNode(node, 8, null, null);
	});

	it('in order traverse the AVLTree', () => {
		insertNode(tree);

		const treeKeys = [];
		tree.inOrderTraverse(key => {
			treeKeys.push(key);
		});

		expect(treeKeys).to.eql([
			3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25,
		]);
	});

	it('pre order traverse the AVLTree', () => {
		insertNode(tree);

		const treeKeys = [];
		tree.preOrderTraverse(key => {
			treeKeys.push(key);
		});

		expect(treeKeys).to.eql([
			11, 7, 5, 3, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25,
		]);
	});

	it('post order traverse the AVLTree', () => {
		insertNode(tree);

		const treeKeys = [];
		tree.postOrderTraverse(key => {
			treeKeys.push(key);
		});

		expect(treeKeys).to.eql([
			3, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11,
		]);
	});

	it('return the min and max elements of the AVLTree', () => {
		insertNode(tree);
		expect(tree.min().key).to.equal(3);
		expect(tree.max().key).to.equal(25);
	});

	it('verify if elements exists', () => {
		insertNode(tree);
		expect(tree.search(1)).to.false;
		expect(tree.search(3)).to.true;
		expect(tree.search(10)).to.true;
		expect(tree.search(25)).to.true;
		expect(tree.search(30)).to.false;
	});

	it('remove elements', () => {
		insertNode(tree);

		let treeKeys = [];
		tree.inOrderTraverse(key => {
			treeKeys.push(key);
		});

		expect(treeKeys).to.eql([
			3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25,
		]);

		tree.remove(5);
		tree.remove(8);
		tree.remove(10);
		tree.remove(14);

		treeKeys = [];
		tree.inOrderTraverse(key => {
			treeKeys.push(key);
		});

		expect(treeKeys).to.eql([3, 7, 9, 11, 12, 13, 15, 18, 20, 25]);
	});
});
