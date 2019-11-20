
const assert = require('chai').assert;
const txt = require('../pageLayer/validLogin')
// const txt1 = require('../page/invalidCredLogin.js')
const base = require('../base')


describe('App', function() {
    it('authorised dealer with valid cred', async function() {
			await base();
        let result = await txt();   
        assert.equal(result, 'Welcome To Authorised Dealer Admin'); 
    });

    // it('authorised dealer with invalid cred', async function() {
    //     let result = await txt1();   
    //     assert.equal(result, 'Username and Password did not match.'); 
    // });

});