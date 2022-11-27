require('mocha');
const StackArray = require('../../../src/data-structures/stack/stack-array');
const shareCases = require('./share-cases');

describe('StackArray', () => {
	shareCases(StackArray);
});
