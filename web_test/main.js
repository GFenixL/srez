const {Builder,By,until} = require("selenium-webdriver");
const assert = require("assert");

async function LoginTest(){
    let driver = await  new Builder().forBrowser("chrome").build();
    try{
        await driver.get("https://localhost:7298");
        await driver.findElement(By.id("login")).sendKeys("qwe");
        await driver.findElement(By.id("password")).sendKeys("123");
        await driver.findElement(By.id("submitLogin")).click();
        await driver.findElement(By.id("getData")).click();
        const pageTitle = await driver.getTitle();
        assert.strictEqual(pageTitle, "Srez");

    }
    finally{
        //await driver.quit();
    }
}

LoginTest();