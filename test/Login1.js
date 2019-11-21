
var assert = require('chai').assert;
const txt = require('../pageLayer/validLogin');

describe('App', function () {
  it('authorised dealer with valid cred1', async function () {
    let result = await txt();
    assert.equal(result, 'Welcome To Authorised Dealer Admin');
  })

});