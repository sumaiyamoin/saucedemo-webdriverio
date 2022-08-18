const { remote } = require("webdriverio");

async function startBrowser() {
    let browser;
    browser = await remote({
        capabilities: {
            browserName: 'chrome',
            
        }
    })
    return browser;
}
module.exports = {startBrowser} 