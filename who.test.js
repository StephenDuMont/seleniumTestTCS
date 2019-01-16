var webdriver = require('selenium-webdriver');

chrome = require('selenium-webdriver/chrome');

jest.setTimeout(30000);
describe.each([
    ['chrome', 'WINDOWS'], 
    ['chrome', 'ANDROID']
])('%s', 
    (browser, platform) => {
      
        let driver;
        beforeEach(async () => {
            
            const options = new chrome.Options();
            if (platform === 'ANDROID') {
                options.setMobileEmulation({deviceName: 'iPhone X'});
            }
            driver = new webdriver.Builder().forBrowser(browser).setChromeOptions(options).build();
            driver.get('http://who/');
        });
        
        afterEach(() => {
            driver.quit();
        });
        
        test('button is present', async () => {
            const query = await driver.wait(webdriver.until.elementsLocated(webdriver.By.css('#searchBox'))); 
            expect(query).not.toBe(0);
        });
        
    
    }
)
