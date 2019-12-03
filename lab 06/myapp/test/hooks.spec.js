const assert = require('assert');

describe('hooks', function() {
  before(function() {
    console.log('// runs before all tests in this block')
  });

  after(function() {
    console.log('// runs after all tests in this block')
  });

  beforeEach(function() {
    console.log('// runs before each test in this block')
  });

  afterEach(function() {
    console.log('// runs after each test in this block')
  });

  // test cases
  it('todo: sum', () => {
    assert.equal(2 + 3, 5);
  })
});
