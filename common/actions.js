const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const actionSql = webdriver.ActionSequence


module.exports = function (driver) {
    const functions = {
        waitForElementEnabled: async function (locator, timeout) {
            var timeStart = new Date().getTime()
            while (true) {
                await driver.wait(until.elementLocated(locator), timeout)
                var waitSuccess = await driver.findElement(locator).isDisplayed();
                var timeEnd = new Date().getTime()
                if (waitSuccess == true || timeEnd - timeStart >= timeout) {
                    break;
                }
            }
        }
    }

    return {
        driver:driver,
        functions: functions,
        goToUrl: async function (url) {
            await driver.get(url)
        },

        enter: async function (text, locator) {
            await functions.waitForElementEnabled(locator, 10000);
            await driver.findElement(locator).sendKeys(text)
        },

        click: async function (locator) {
            await functions.waitForElementEnabled(locator);
            var element = await driver.findElement(locator);
            element.click()
            await driver.wait(until.stalenessOf(element))
        },

        getElementAttribute: async function (locator, attributeName) {
             var att = await driver.findElement(locator).getAttribute(attributeName)
             return att
        },

        doesElementExist: async function (locator) {
            return await driver.findElements(locator)
        },

        waitForElementVisible: async function(locator){
            functions.waitForElementEnabled(locator, 3000)
            var element = driver.findElement(locator)
            await driver.wait(until.elementIsVisible(element))
        },

        getText: async function(locator){
            functions.waitForElementEnabled(locator, 3000)
            var element = await driver.findElement(locator).getText()
            return element
        },

        moveMouseToElement: async function(locator){
            var element = await driver.findElement(locator)
            await driver.actions().mouseMove(element).perform()
        }
    }
}