const { $ } = require("@wdio/globals");
const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $("#login-button");
  }

  get message_error() {
    return $(`h3[data-test='error']`);
  }

  /**
   * define selectors using getter methods
   */
  get inputPEmail() {
    return $("#email");
  }

  get inputPPassword() {
    return $("#password");
  }

  get recaptchaFrame() {
    return $("iframe[src*='recaptcha']");
  }

  get check_recaptcha() {
    return $(".recaptcha-checkbox-border");
  }

  get btnLogin() {
    return $("//button/span[contains(text(), 'Sign In')]");
  }

  get message() {
    return $("//div[@class='ct-text-group']//div[@class='ct-text']", {timeout: 20000});
    // return $("//*[contains(text(), 'Welcome PAGII HRR')]", {timeout: 1000});
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
  async loginPagii(email, password) {
    await this.inputPEmail.setValue(email);
    await this.inputPPassword.setValue(password);
    await this.verify_recaptcha_checked();
    await this.btnLogin.click();
    await browser.pause(2000);
  }

  async verify_recaptcha_checked() {
    const iframe = await this.recaptchaFrame;
    await browser.switchToFrame(iframe);
    await this.check_recaptcha.click();
    await browser.switchToFrame(null);
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open();
  }

  /**
   * overwrite specific options to adapt it to page object open_pagii
   */
  open_pagii() {
    return super.open_pagii('/login');
  }
}

module.exports = new LoginPage();
