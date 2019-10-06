const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe('sayHello', function () {
  it('should return string hello', function () {
    let result = sayHello();
    assert.equal(result, 'hello')
  });

  it('should return type string', function () {
    let result = sayHello();
    assert.typeOf(result, 'string');
  });

  it('addNumbers should be above 5', function () {
    let result = addNumbers(5, 5);
    assert.isAbove(result, 5);
  });

  it('should return type number', function () {
    let result = addNumbers(5, 5);
    assert.typeOf(result, 'number');
  })


})

