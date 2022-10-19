const puppeteer = require('puppeteer');

async function scrap() {
  const browser = await puppeteer.launch({headless: false});

  const page = await browser.newPage();
  await page.goto('https://bayesbet.everettsprojects.com/game/2022020006/2022-10-12/');

  const rects = await page.$$('rect.color-primary');

  console.log(rects.length)

  let arr = [];

  // for (let i = 0; i < rects.length; i++) {
  //   const rect = await (rects[i]).click('rect.color-primary');
  //   const value = await rect.waitForSelector('.tooltip').textContent;
  //   console.log(value)
  // }

  for (let i = 0; i < 121; i++) {
    const rect = await (rects[i]).click();
    const tooltip = await page.$("[class='tooltip']")
    const text = await (await tooltip.getProperty('textContent')).jsonValue()
    console.log(text)
  }
  
  await browser.close()
}

scrap()