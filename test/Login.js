
var assert = require('chai').assert;
var Base = require('../base');
var assert = require('chai').assert;
const txt = require('../pageLayer/validLogin')

beforeEach(async function(){
  await Base();
});

afterEach(async function(){
  let t = this.currentTest
  if (t.state === 'failed'){
		await page.screenshot({path: './screenShots/'+t.title+'_screenshot.png'});
		
  }
  await browser.close();
});


describe.only('App', function() {
    it('authorised dealer with valid cred 1', async function() {
        let result = await txt();   
        assert.equal(result, 'Welcome To Authorised Dealer Admin'); 
    })
	});