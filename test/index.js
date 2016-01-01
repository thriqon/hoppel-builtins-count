
var count = require('../index.js');

var expect = require('chai').expect;

describe('#count', function () {
	it('calculates the number of elements correctly', function () {
		expect(count(null, [1,2,2,2], false)).to.be.equal(4);
		expect(count(null, [], false)).to.be.equal(0);
	});
	it('rereduces correctly', function () {
		expect(count(null, [2, 3], true)).to.be.equal(5);
	});
});
