var settings = require('./settings.json');

const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(settings.url);
	await page.screenshot({
		path: 'example.png'
	});

	await browser.close();
})();