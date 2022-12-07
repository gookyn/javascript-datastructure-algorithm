require('mocha');
const { Stack } = require('../../../src/data-structures');
const shareCases = require('./share-cases');

describe('Stack', () => {
	shareCases(Stack);
});
