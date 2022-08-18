const browserObject = require('../browser');
let browser;
before(async () => {
    browser = await browserObject.startBrowser();
}) 

describe("Saucedemo login", async () => {
    it("Login", async () => {
        await browser.url("https://www.saucedemo.com/")
        let userName = await browser.$('#user-name')
        await userName.setValue('standard_user')
        let password = await browser.$('#password')
        await password.setValue('secret_sauce')
        let loginButton = await browser.$('#login-button')
        await loginButton.click()   
        await browser.pause(2000)
    })

    it("Place order", async () => {
        let addButton1 = await browser.$('#add-to-cart-sauce-labs-backpack')
        await addButton1.click()
        await browser.pause(1500)
        let addButton2 = await browser.$('#add-to-cart-sauce-labs-bike-light')
        await addButton2.click() 
        await browser.pause(1500)
        let cart = await browser.$('.shopping_cart_container')
        await cart.click() 
        await browser.pause(1000)
        let checkoutButton = await browser.$('#checkout')
        await checkoutButton.click() 
        await browser.pause(1000)
        let firstName = await browser.$('#first-name')
        await firstName.setValue('test') 
        await browser.pause(500)
        let lastName = await browser.$('#last-name')
        await browser.pause(500)
        await lastName.setValue('user')
        let postalCode = await browser.$('#postal-code')
        await postalCode.setValue('1000')
        await browser.pause(500)
        let continueButton = await browser.$('#continue')
        await continueButton.click() 
        await browser.pause(2000)
        let finishButton = await browser.$('#finish')
        await finishButton.click() 
        await browser.pause(2000)
        let backToPrdctBtn = await browser.$('#back-to-products')
        await backToPrdctBtn.click()
        await browser.pause(1000)
    })

    it("Sort", async()=> {
        let sortButton = await browser.$('.active_option')
        await sortButton.click() 

        await browser.$$('.product_sort_container')
        await browser.pause(2000);
        await browser.keys(['Meta', 'ArrowDown'])
        await browser.keys(['Meta', 'ArrowDown'])
        await browser.keys(['Meta', 'Enter'])
    })

    it("Logout", async() => {
        let menuButton = await browser.$('#react-burger-menu-btn')
        await menuButton.click()
        await browser.pause(3000)
        let logoutButton = await browser.$('#logout_sidebar_link')
        await logoutButton.click()
        
    })
})
after(async()=>{
    browser.closeWindow()
})
