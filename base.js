const puppeteer = require('puppeteer-core');
const properties = require ('./properties');
const commands = require('./custom_commands');


module.exports= async () => {
  try{      
    global.browser = await puppeteer.launch(properties);
    global.page = await browser.newPage();
    await page.goto('http://192.168.108.77:2020/');
   

  }catch(e){
    console.log(`Base file Error: ${e}`)
  }
};