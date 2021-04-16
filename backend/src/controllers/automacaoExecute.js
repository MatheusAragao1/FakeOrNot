const puppeteer = require('puppeteer');

const delay = ms => new Promise(res => setTimeout(res, ms));

 const Execute = async (req) => {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
     await page.goto('https://nilc-fakenews.herokuapp.com/', {waitUntil: 'networkidle2'});    


     await page.focus('#news')
     await page.keyboard.type(req)
     
     await page.click('button[type="submit"]');
     await page.waitForSelector('#answer');
     await delay(3000)
     const text = await page.evaluate(() => document.querySelector('#answer').textContent);

    await browser.close();
    return {result: text}
 };

module.exports = Execute
