var webdriver = require('selenium-webdriver');

chrome = require('selenium-webdriver/chrome');

describe.each([
    ['chrome', 'WINDOWS'], 
    ['chrome', 'ANDROID']
])('%s', 
    (browser, platform) => {
      
        let driver;
        beforeEach(async () => {
            
            jest.setTimeout(30000);
            const options = new chrome.Options();
            if (platform === 'ANDROID') {
                options.setMobileEmulation({deviceName: 'iPhone X'});
            }
            driver = new webdriver.Builder().forBrowser(browser).setChromeOptions(options).build();

            driver.get('http://headtrax/');
        });
        
        afterEach(() => {
            driver.quit();
        });
        
        test('button is present', async () => {
            const query = await driver.wait(webdriver.until.elementsLocated(webdriver.By.css('#ImgLaunchHeadTrax'))); 
            expect(query).not.toBe(0);
        });
        
    
    }
)
