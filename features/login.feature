Feature: Login to SauceDemo Website

  @feature=login
  Scenario: Successful login
    Given I am on the SauceDemo login page
    When I login with valid credentials
    Then I should see the products page
  
  @feature=login-invalid-credential
  Scenario: Invalid Credential
    Given I am on the SauceDemo login page
    When I login with invalid credentials
    Then I should see the error message "Epic sadface: Username and password do not match any user in this service"