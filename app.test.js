'use strict'
var webdriver = require('selenium-webdriver');

var chrome = require('selenium-webdriver/chrome');
// var edge = require('selenium-webdriver/edge');
jest.setTimeout(30000);
describe.each([
    ['chrome', 'WINDOWS', 10], 
   // ['edge', 'WINDOWS', 20], 
    ['chrome', 'ANDROID', 10]
])('%s: %s', 
    (browser, platform, slides) => {
      
        let driver;
        beforeAll(async () => {
            
            if (browser === 'chrome') {
                const options = new chrome.Options();
                if (platform === 'ANDROID') {
                    options.setMobileEmulation({deviceName: 'iPhone X'});
                }
                driver = await new webdriver.Builder().forBrowser(browser)
                    .setChromeOptions(options).build();
            } else if (browser === 'edge') {
                const options = new edge.Options();
                const service = new edge.ServiceBuilder();
                driver = await new edge.Driver(options, service);
            }
            await driver.get('http://www.msn.com');
            if (platform === 'ANDROID') {
                await driver.findElements(webdriver.By.css('.swipenav'));
            } else if (platform === 'WINDOWS') {
                await driver.wait(webdriver.until.elementsLocated(webdriver.By.css('.infopanestripe')));
            }
        });
        
        afterAll(() => {
            return driver.quit();
        });
        
        test(`has ${slides} slides`, async () => {
            let query;
            if (platform === 'WINDOWS') {
                query = await driver.findElements(webdriver.By.css('.infopanestripe > ul > li')); 
            } else if (platform === 'ANDROID') {
                query = await driver.findElements(webdriver.By.css('ul.swipenav > li'));
            }
            
            expect(query.length).toBeGreaterThan(slides);
        });
        

    }
)
