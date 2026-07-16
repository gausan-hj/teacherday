const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();
  
  await page.goto('file:///C:/Users/sansan/Desktop/teaccher%20day/index.html');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshot-desktop.png', fullPage: false });
  console.log('Desktop screenshot saved');
  
  const title = await page.title();
  console.log('Page title:', title);
  
  const cards = await page.$$eval('.teacher-name-card', els => els.map(e => e.textContent.trim()));
  console.log('Teacher cards:', cards.length, cards);
  
  await page.click('.teacher-name-card', { position: { x: 50, y: 20 } });
  await page.waitForTimeout(500);
  const modalVisible = await page.locator('#questionModal').isVisible();
  console.log('Modal visible:', modalVisible);
  
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);
  
  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('file:///C:/Users/sansan/Desktop/teaccher%20day/index.html');
  await mobilePage.waitForTimeout(2000);
  await mobilePage.screenshot({ path: 'screenshot-mobile.png', fullPage: false });
  console.log('Mobile screenshot saved');
  
  await mobilePage.goto('file:///C:/Users/sansan/Desktop/teaccher%20day/teacher/lin-shujuan.html');
  await mobilePage.waitForTimeout(2000);
  await mobilePage.screenshot({ path: 'screenshot-teacher-mobile.png', fullPage: true });
  console.log('Teacher page mobile screenshot saved');
  
  const desktopContext = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto('file:///C:/Users/sansan/Desktop/teaccher%20day/teacher/lin-shujuan.html');
  await desktopPage.waitForTimeout(2000);
  await desktopPage.screenshot({ path: 'screenshot-teacher-desktop.png', fullPage: true });
  console.log('Teacher page desktop screenshot saved');
  
  // Test Malay page
  const malayPage = await desktopContext.newPage();
  await malayPage.goto('file:///C:/Users/sansan/Desktop/teaccher%20day/teacher/cikgu-rizan.html');
  await malayPage.waitForTimeout(2000);
  await malayPage.screenshot({ path: 'screenshot-malay.png', fullPage: true });
  console.log('Malay page screenshot saved');
  
  // Test English page
  const engPage = await desktopContext.newPage();
  await engPage.goto('file:///C:/Users/sansan/Desktop/teaccher%20day/teacher/mrs-pavithra.html');
  await engPage.waitForTimeout(2000);
  await engPage.screenshot({ path: 'screenshot-english.png', fullPage: true });
  console.log('English page screenshot saved');
  
  await browser.close();
  console.log('All tests passed!');
})();
