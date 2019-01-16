'use strict';

// browser.webdriver.Capabilities.chrome()
module.exports = {
    main: args => {
                
        var webdriver = require('selenium-webdriver');

        let driver;
        beforeEach(async () => {
            driver = new webdriver.Builder().
                withCapabilities(args.browser).build();
            jest.setTimeout(30000);
                
            driver.get('http://www.msn.com');
            await driver.wait(webdriver.until.elementsLocated(webdriver.By.css('.infopanestripe > ul > li')));
        });

        afterEach(() => {
            driver.quit();
        });


        test('has 20 slides', async () => {
        const query = await driver.wait(webdriver.until.elementsLocated(webdriver.By.css('.infopanestripe > ul > li'))); 
        expect(query.length).toBe(20);
        });

        test('3rd slide is an ad', async () => {
            await driver.wait(webdriver.until.elementsLocated(webdriver.By.css('.infopanestripe > ul .extnativeaditem')));
            query = await driver.findElements(webdriver.By.css('.infopanestripe > ul > li:nth-child(3) .extnativeaditem'));
            expect(query.length).not.toBe(0);
        }); 
    }
}