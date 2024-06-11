const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../pageobjects/login.page");

// define custom allure reports
const allureReporter = require('@wdio/allure-reporter').default

allureReporter.addFeature('Login with Sauce Demo');
Given("I am on the SauceDemo login page", async () => {  
  await LoginPage.open();
});

When("I login with valid credentials", async () => {
  await LoginPage.login(
    'standard_user',
    'secret_sauce'
  );
});

When("I login with invalid credentials", async () => {
  await LoginPage.login(
    'standard_user',
    'secret_sauce1'
  );
});

Then("I should see the products page", async () => {
  await expect(browser).toHaveUrlContaining("inventory.html");
});

Then("I should see the error message {string}", async (text) => {
  // let error = await $(`h3[data-test='error']`);
  await expect(LoginPage.message_error).toBeExisting();
  await expect(LoginPage.message_error).toHaveText('Epic sadface: Username and password do not match any user in this service');
  await expect(LoginPage.message_error).toHaveTextContaining(`${text}`);
});
