require('mocha');
const LinkedListStack = require('../../../src/data-structures/stack/linked-list-stack');
const shareCases = require('./share-cases');

describe('Linked List Stack', () => {
	shareCases(LinkedListStack);
});
