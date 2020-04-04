const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});     //launching browser
  const page = await browser.newPage();            //new page
  await page.goto('https://en.wikipedia.org/wiki/Coronavirus');           //searching
  await page.screenshot({path: 'corona.png'});     //screeenshot

  //await browser.waitForTarget(() => false);
  const result = await page.evaluate(() => {
       let headingFromWeb =  document.querySelectorAll(".mw-headline")
       const headingList = [...headingFromWeb]
       return headingList.map(h => h.innerText)
       
  })

  await browser.close();
})();