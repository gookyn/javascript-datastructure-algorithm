require('mocha');
const { ArrayStack } = require('../../../src/data-structures');
const shareCases = require('./share-cases');

describe('Array Stack', () => {
	shareCases(ArrayStack);
});
