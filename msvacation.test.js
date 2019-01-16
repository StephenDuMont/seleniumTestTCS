'use strict'
var webdriver = require('selenium-webdriver');

var chrome = require('selenium-webdriver/chrome');

describe.each([
    ['chrome', 'WINDOWS'], 
    ['chrome', 'ANDROID']
])('%s: %s', 
    (browser, platform) => {
      
        let driver;
        beforeEach(async () => {
            
            jest.setTimeout(30000);
            const options = new chrome.Options();
            if (platform === 'ANDROID') {
                options.setMobileEmulation({deviceName: 'iPhone X'});
            }
            driver = new webdriver.Builder().forBrowser(browser)
                .setChromeOptions(options).build();
          
            await driver.get('http://msvacation/');
        });
        
        afterEach(() => {
            driver.quit();
        });
        
        test('button is present', async () => {
            driver.switchTo().frame('MsVacationLeft');
            await driver.wait(webdriver.until.elementLocated(webdriver.By.css('#PendingApprovalsSection1_rdPending_Content_Toggle')), 1000);
            // const drop = await driver.findElement(webdriver.By.id('PendingApprovalsSection1_rdPending_Content_Toggle'));
            await driver.findElement(webdriver.By.css('#PendingApprovalsSection1_rdPending_Content_Toggle')).click();
            const query = await driver.wait(webdriver.until.elementsLocated(webdriver.By.css('#PendingApprovalsSection1_lblPendingVacation')), 1000); 
            expect(query).not.toBe(0);
        });
        
    
    }
)
