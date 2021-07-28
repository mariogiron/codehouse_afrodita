const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        // NO INCLUIR. SOLO MAC M1
        executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium'
    });
    const page = await browser.newPage();
    await page.goto('https://www.ulabox.com/categoria/refrescos/758');

    await page.waitForSelector('.jss565');

    const urls = await page.evaluate(() => {
        const enlaces = document.querySelectorAll('.jss565');
        const urls = [];
        for (let enlace of enlaces) {
            urls.push(enlace.href);
        }
        return urls;
    });

    for (let url of urls) {
        await page.goto(url);
        await page.waitForTimeout(1000);

        const nombre = await page.evaluate(() => document.querySelector('h1').innerText);
        // const imgUrl = await page.evaluate(() => document.querySelector('picture img').src);

        const imgUrl = await page.evaluate(() => {
            const img = document.querySelector('picture img');
            const url = img.src;
            return url;
        })

        console.log(nombre);
        console.log(imgUrl);
    }

    await browser.close();
})();