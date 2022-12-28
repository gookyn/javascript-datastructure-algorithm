const BinarySearchTree = require('./binary-search-tree');
const { Node } = require('./models');
const { defaultCompare, COMPARE } = require('../../utils');

const BALANCE_FACTOR = {
	UNBALANCED_RIGHT: 1,
	SLIGHTLY_UNBALANCED_RIGHT: 2,
	BALANCED: 3,
	SLIGHTLY_UNBALANCED_LEFT: 4,
	UNBALANCED_LEFT: 5,
};

class AVLTree extends BinarySearchTree {
	constructor(compareFn = defaultCompare) {
		super(compareFn);
	}

	getNodeHeight(node) {
		if (node == null) {
			return -1;
		}
		return (
			Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
			1
		);
	}

	getBalanceFactor(node) {
		const heightDifference =
			this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

		switch (heightDifference) {
			case -2:
				return BALANCE_FACTOR.UNBALANCED_RIGHT;
			case -1:
				return BALANCE_FACTOR.SLIGHTLY_UNBALANCED_RIGHT;
			case 1:
				return BALANCE_FACTOR.SLIGHTLY_UNBALANCED_LEFT;
			case 2:
				return BALANCE_FACTOR.UNBALANCED_LEFT;
			default:
				return BALANCE_FACTOR.BALANCED;
		}
	}

	/**
	 * 左-左（LL），向右的单旋转
	 *
	 *       a                           b
	 *      / \                         / \
	 *     b   c -> rotateLL(a) ->     d   a
	 *    / \                             / \
	 *   d   e                           e   c
	 */
	rotateLL(node) {
		const tmp = node.left;
		node.left = tmp.right;
		tmp.right = node;
		return tmp;
	}

	/**
	 * 右-右（RR），向左的单旋转
	 *
	 *     a                              c
	 *    / \                            / \
	 *   b   c   -> rotateRR(a) ->      a   e
	 *      / \                        / \
	 *     d   e                      b   d
	 */
	rotateRR(node) {
		const tmp = node.right;
		node.right = tmp.left;
		tmp.left = node;
		return tmp;
	}

	/**
	 * 左-右（LR），向右的双旋转
	 *
	 *       a                           a                              e
	 *      / \                         / \                           /  \
	 *     b   c -> rotateRR(b) ->     e   c   -> rotateLL(a) ->     b    a
	 *    / \                         / \                           / \  / \
	 *   d   e                       b   g                         d  f g   c
	 *      / \                     / \
	 *     f   g                   d   f
	 */
	rotateLR(node) {
		node.left = this.rotateRR(node.left);
		return this.rotateLL(node);
	}

	/**
	 * 右-左（RL），向左的双旋转
	 *
	 *       a                           a                              d
	 *      / \                         / \                           /  \
	 *     b   c -> rotateLL(c) ->     b   d   -> rotateRR(a) ->     a    c
	 *        / \                         / \                       / \  / \
	 *       d   e                       f   c                     b  f g   e
	 *      / \                             / \
	 *     f   g                           g   e
	 */
	rotateRL(node) {
		node.right = this.rotateLL(node.right);
		return this.rotateRR(node);
	}

	insert(key) {
		this.root = this.insertNode(this.root, key);
	}

	insertNode(node, key) {
		// 与 BST 逻辑相同
		if (node == null) {
			return new Node(key);
		} else if (this.compareFn(key, node.key) === COMPARE.LESS_THAN) {
			node.left = this.insertNode(node.left, key);
		} else if (this.compareFn(key, node.key) === COMPARE.BIGGER_THAN) {
			node.right = this.insertNode(node.right, key);
		} else {
			// 已存在的键
			return node;
		}

		// 将树进行平衡操作
		const balanceFactor = this.getBalanceFactor(node);
		if (balanceFactor === BALANCE_FACTOR.UNBALANCED_LEFT) {
			if (this.compareFn(key, node.left.key) === COMPARE.LESS_THAN) {
				node = this.rotateLL(node);
			} else {
				return this.rotateLR(node);
			}
		}
		if (balanceFactor === BALANCE_FACTOR.UNBALANCED_RIGHT) {
			if (this.compareFn(key, node.right.key) === COMPARE.BIGGER_THAN) {
				node = this.rotateRR(node);
			} else {
				return this.rotateRL(node);
			}
		}

		return node;
	}

	removeNode(node, key) {
		node = super.removeNode(node, key);
		if (node == null) {
			// 不需要进行平衡操作
			return node;
		}

		// 将树进行平衡操作
		const balanceFactor = this.getBalanceFactor(node);
		if (balanceFactor === BALANCE_FACTOR.UNBALANCED_LEFT) {
			if (this.compareFn(key, node.left.key) === COMPARE.LESS_THAN) {
				node = this.rotateLL(node);
			} else {
				node = this.rotateLR(node);
			}
		}
		if (balanceFactor === BALANCE_FACTOR.UNBALANCED_RIGHT) {
			if (this.compareFn(key, node.right.key) === COMPARE.BIGGER_THAN) {
				node = this.rotateRR(node);
			} else {
				node = this.rotateRL(node);
			}
		}

		return node;
	}
}

module.exports = AVLTree;
