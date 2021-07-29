const puppeteer = require('puppeteer');
; (async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    // await page.setExtraHTTPHeaders({
    // 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome / 66.0.3359.106 Safari / 537.36',
    // 'set-cookie': '_pxCaptcha=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;'
    // });
    page.on('console', msg => {
        if (msg._type === 'log') {
            console.log(msg._text);
        }
    });
    await page.goto('http://www.amazon.es');
    await page.screenshot({ path: '1.png' });
    await page.type('#twotabsearchtextbox', 'libros de javascript');
    await page.screenshot({ path: '2.png' });
    await page.click('.nav-search-submit input');
    await page.waitForSelector('[data-component-type=s-search-result]');
    await page.screenshot({ path: '3.png' });
    const references = await page.evaluate(() => {
        const elements = document.querySelectorAll('[data-component-type=s-search-result] h2 a');
        const links = [];
        for (let el of elements) {
            links.push(el.href);
        }
        return links;
    });
    const books = [];
    for (let reference of references) {
        await page.goto(reference);
        await page.waitForSelector('#productTitle');
        const book = await page.evaluate(() => {
            const tmpBook = {};
            tmpBook.title = document.querySelector('#productTitle').innerText;
            tmpBook.author = document.querySelector('.author a').innerText;
            return tmpBook;
        });
        books.push(book);
    }
    console.log(books);
    await browser.close();
})();