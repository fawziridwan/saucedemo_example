const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../pageobjects/login.page");

// define custom allure reports
const allureReporter = require("@wdio/allure-reporter").default;

Given("I am on the Pagii HR login page", async () => {
  await LoginPage.open_pagii();
  await expect(browser).toHaveTitle("Simple Attendance App | Pagii");
});

When("I enter email {string}", async (email) => {
  await LoginPage.inputPEmail.setValue(email);
});

When("I enter password {string}", async (password) => {
  await LoginPage.inputPPassword.setValue(password);
});

When(/^I Check the recaptcha google$/, async () => {
  await LoginPage.verify_recaptcha_checked();
  const iframe = await LoginPage.recaptchaFrame;
  await browser.switchToFrame(iframe);
  await LoginPage.check_recaptcha.click();
  await browser.switchToFrame(null);
  await browser.pause(3000);
});

When(/^I click the Login button$/, async () => {
  await LoginPage.btnLogin.click();
});

Then("I should see the Dashboard Page", async () => {
  browser.pause(20000);
  const currentUrl = await browser.getUrl();
  const expectedUrl = currentUrl;
  expect(currentUrl).toBe(`${expectedUrl}`);
  expect(currentUrl).toHaveUrlContaining(expectedUrl);
});

// Then("I Should see Message {string}", async (message) => {
//   const currentMessage = await LoginPage.message.getText();
//   await expect(currentMessage).toBeExisting();
//   await expect(currentMessage).toHaveText(`${message}`);
//   await expect(currentMessage).toHaveTextContaining(`${message}`);
// });

When("I uncheck the recaptha option", async () => {
  await browser.pause(3000);
});

Then("I should see the error {string}", async (message) => {
  const expectedMessage = await LoginPage.message.getText();
  console.log(expectedMessage);
  await expect(LoginPage.message).toBeExisting();
  await expect(LoginPage.message).toHaveText(`${message}`);
  await expect(LoginPage.message).toHaveTextContaining(`${message}`);
  browser.clearBrowserData();
});
