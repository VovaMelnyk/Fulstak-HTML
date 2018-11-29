const expect = require('chai').expect;
const hello = require('../app').hello;
const sumArray = require('../app').sumArray;
const mintemp = require('../app').mintemp;

describe('hello_func', function () {
    it('show hello', function () {
        const result = hello();
        expect(result).to.be.a('string');
        expect(result).equal('hello');
    })
});

describe('sum array', function () {
    it('empy array', function () {
        const result = sumArray([]);
        expect(result).to.be.a('number');
        expect(result).equal(0);
    });

    it('one element', function () {
        const result = sumArray([12]);
        expect(result).to.be.a('number');
        expect(result).equal(12);
    })

    it('many arr elements', function () {
        const result = sumArray([1, 10, 50, 100]);
        expect(result).to.be.a('number');
        expect(result).equal(161);
    })
})


describe('Temp', function () {
    it('one', function () {
        const result = mintemp(1, -2, -8, 4, 5);
        expect(result).to.be.a('number');
        expect(result).equal(1);
    })

    it('minus', function () {
        const result = mintemp(-12, -5, -137);
        expect(result).to.be.a('number');
        expect(result).equal(-5);
    })

    it('equal numbers', function () {
        const result = mintemp(-10, -5, -3, 3, 12, 45);
        expect(result).to.be.a('number');
        expect(result).equal(3);
    })

    it('different numbers', function () {
        const result = mintemp(-10, -5, -1, 3, 12, 8);
        expect(result).to.be.a('number');
        expect(result).equal(-1);
    })
})