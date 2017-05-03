var webdriver = require('selenium-webdriver');
require('chromedriver')
var test = require('selenium-webdriver/testing');
var assert = require('assert')
const driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();;
var actions = require('./common/actions')(driver)
var homePage = require('./common/homePage')(driver)
const mochaTimeOut = 30000; //ms
// promise.USE_PROMISE_MANAGER = false;


test.describe('Triet tests', function () {

    this.timeout(mochaTimeOut);

    test.before(async function () {
        console.log("Test begin")
        console.log('------------------------------------------------')

    });

    test.after(async function () {
        console.log('------------------------------------------------')
        console.log('Test finished')
        await driver.quit();
      
    });

    test.it('Open and login GameTwist', async function () {
        await actions.goToUrl('https://www.gametwist.com/en/')
        await homePage.login('trietn', '@bcd1234')
        await actions.doesElementExist(homePage.elements.popup).then(function(elements){
            if(elements.length > 0){ actions.click(homePage.elements.popup)}
        }) 
        
    });

    test.it('Go to Slots', async function(){
        await actions.click(homePage.elements.slotsTab)
        await actions.doesElementExist(webdriver.By.xpath('//li[text()="Slots"]')).then(function(elements){
            assert.equal(elements.length, 1)
        })          
    });

    test.it('Go to Bingo', async function(){
        await actions.click(homePage.elements.bingoTab)
        await actions.doesElementExist(webdriver.By.xpath('//li[text()="Bingo"]')).then(function(elements){
            assert.equal(elements.length, 1)
        })          
    });

    test.it('Go to Casino', async function(){
        await actions.click(homePage.elements.casinoTab)
        await actions.doesElementExist(webdriver.By.xpath('//li[text()="Casino"]')).then(function(elements){
            assert.equal(elements.length, 1)
        })          
    });

    test.it('Go to Poker', async function(){
        await actions.click(homePage.elements.pokerTab)
        await actions.doesElementExist(webdriver.By.xpath('//li[text()="Poker"]')).then(function(elements){
            assert.equal(elements.length, 1)
        })          
    });

    test.it('Search for Slots', async function(){
        await homePage.search('Slot')
        await actions.click(webdriver.By.xpath('//ul[contains(@class,"game-search__list grid")]/li//span[text()="Party Games Slotto"]'))
        await actions.waitForElementVisible(webdriver.By.xpath('//li[text()="Party Games Slotto"]'))
        
        await actions.getElementAttribute(webdriver.By.xpath('//h1[@class="title title--info-h1"]'), 'innerText').then(function(value){
            assert.equal(value, 'Play Party Games Slotto online')
        })        
    })

    test.it('Change language', async function(){
        await homePage.changeLanguage('Deutsch')
    })

    test.it('logout', async function(){
        await homePage.logout()
    })
});