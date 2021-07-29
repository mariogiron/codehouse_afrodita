const puppeteer = require('puppeteer');
const axios = require('axios');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        // NO INCLUIR. SOLO MAC M1
        executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium'
    });
    const page = await browser.newPage();
    await page.goto('https://www.ulabox.com/categoria/yogures-mantequillas-y-natas/1669');

    // Recupero número de páginas
    await page.waitForSelector('.jss522');

    const numPaginas = await page.evaluate(() => {
        const paginas = document.querySelectorAll('.jss522');
        return paginas[paginas.length - 1].children[0].innerText;
    })

    for (let i = 1; i <= parseInt(numPaginas); i++) {
        await page.goto('https://www.ulabox.com/categoria/yogures-mantequillas-y-natas/1669?p=' + i);
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

            // Descarga de la imagen
            const response = await axios({
                method: 'get',
                url: imgUrl,
                responseType: 'arraybuffer'
            });
            fs.writeFileSync(`./imagenes/${nombre}.png`, response.data);

        }
    }

    await browser.close();
})();