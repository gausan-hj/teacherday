const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();
  
  // Test index.html
  await page.goto('file:///C:/Users/sansan/Desktop/teaccher%20day/index.html');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshot-desktop.png', fullPage: false });
  console.log('Desktop screenshot saved');
  
  // Check title
  const title = await page.title();
  console.log('Page title:', title);
  
  // Check teacher name cards exist
  const cards = await page.eval('.teacher-name-card', els => els.map(e => e.textContent.trim()));
  console.log('Teacher cards:', cards.length);
  
  // Check modal works
  await page.click('.teacher-name-card', { position: { x: 50, y: 20 } });
  await page.waitForTimeout(500);
  const modalVisible = await page.locator('#questionModal').isVisible();
  console.log('Modal visible:', modalVisible);
  
  // Close modal
  await page.keyboard.press('Escape');
  await page.waitForTimeout(500);
  
  // Mobile test
  const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('file:///C:/Users/sansan/Desktop/teaccher%20day/index.html');
  await mobilePage.waitForTimeout(2000);
  await mobilePage.screenshot({ path: 'screenshot-mobile.png', fullPage: false });
  console.log('Mobile screenshot saved');
  
  // Test a teacher page (mobile)
  await mobilePage.goto('file:///C:/Users/sansan/Desktop/teaccher%20day/teacher/lin-shujuan.html');
  await mobilePage.waitForTimeout(2000);
  await mobilePage.screenshot({ path: 'screenshot-teacher-mobile.png', fullPage: true });
  console.log('Teacher page mobile screenshot saved');
  
  // Test a teacher page (desktop)
  const desktopContext = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto('file:///C:/Users/sansan/Desktop/teaccher%20day/teacher/lin-shujuan.html');
  await desktopPage.waitForTimeout(2000);
  await desktopPage.screenshot({ path: 'screenshot-teacher-desktop.png', fullPage: true });
  console.log('Teacher page desktop screenshot saved');
  
  // Check console errors
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  
  console.log('Console errors:', errors.length > 0 ? errors.join(', ') : 'None');
  
  await browser.close();
})();
