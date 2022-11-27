require('mocha');
const Stack = require('../../../src/data-structures/stack/stack');
const shareCases = require('./share-cases');

describe('Stack', () => {
	shareCases(Stack);
});
