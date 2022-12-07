require('mocha');
const { LinkedListStack } = require('../../../src/data-structures');
const shareCases = require('./share-cases');

describe('Linked List Stack', () => {
	shareCases(LinkedListStack);
});
