const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

module.exports = function (driver) {
    const elements = {
        loginButton: By.xpath('//button/span[text()="LOG IN"]'),
        passwordTextBox: By.xpath('//input[@type="password"]'),
        loginTextBox: By.xpath('//input[@name="login-nickname"]'),
        popup: By.id('wof_close_x'),
        slotsTab: By.xpath('//a[contains(@href,"/games/slots/")]'),
        bingoTab: By.xpath('//a[contains(@href,"/games/bingo/")]'),
        casinoTab: By.xpath('//a[contains(@href,"/games/casino/")]'),
        pokerTab: By.xpath('//a[contains(@href,"/games/poker/")]'),
        searchTextBox:By.xpath('//input[contains(@id,"gameSearch")]'),
        gameSearchResults: By.xpath('//ul[contains(@class,"game-search__list grid")]/li'),
        selectLanguageButton: By.xpath('//li[@class="branding__language-and-help"]//span[@class="select-language__button"]'),
        userNameButton: By.className('nickname'),
        logoutButton: By.xpath('//button[@class="btn--link js-logout"]')
    };

    const actions = require('./actions')(driver)

    return {
        elements: elements,
        login: async function (user, pass) {
            await actions.enter(user, elements.loginTextBox)
            await actions.enter(pass, elements.passwordTextBox)
            await actions.click(elements.loginButton)
        },
        search: async function(text){
            await actions.enter('Slot',elements.searchTextBox)
            await actions.waitForElementVisible(elements.gameSearchResults)
        },
        changeLanguage: async function(toLanguage){
            await actions.moveMouseToElement(elements.selectLanguageButton)
            var languageXpath = '//li[@class="branding__language-and-help"]//li[contains(@class, "select-language__item")]//span[contains(text(),"'+toLanguage+'")]'
            //await actions.waitForElementVisible(By.xpath(languageXpath))
            await actions.click(By.xpath(languageXpath))
        },
        logout: async function(){
            await actions.moveMouseToElement(elements.userNameButton)
            await actions.waitForElementVisible(elements.logoutButton)
            await actions.click(elements.logoutButton)
        }
    }
}