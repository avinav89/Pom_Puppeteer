
var Base = require('./base');
let now;

beforeEach(async function () {
  await Base();
});


afterEach(async function () {
  // try {
    let t = this.currentTest
    console.log('faillllm');
    now = new Date();
    if (t.state === 'failed') {
      await page.screenshot({ path: './screenShots/'+ now.getSeconds() + '' + t.title + '_screenshot.png' });
      console.log('faillll');
      
    }
    await browser.close();
  // } catch (e) {
    // console.log(`Base file Error: ${e}`)
  // }
});
