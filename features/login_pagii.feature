Feature: Pagii Human Resource CMS Website

    @feature=login-email-incorrect
    Scenario Outline: Email Incorrect
        Given I am on the Pagii HR login page
        When I enter email "<email>"
        And I enter password "<password>"
        And I Check the recaptcha google
        And I click the Login button
        Then I should see the error "<message>"

        Examples:
            | email              | password | message                       |
            | fawzi*r.smt-id.com | password | You must give the valid email |

    @feature=login-with-valid-credential
    Scenario Outline: Successful login
        Given I am on the Pagii HR login page
        When I enter email "<email>"
        And I enter password "<password>"
        And I Check the recaptcha google
        And I click the Login button
        Then I should see the Dashboard Page
        # And I Should see Message "<message>"

        Examples:
            | email          | password | message           |
            | hr@smooets.com | password | Welcome Pagii HRR |

    @feature=login-password-incorrect
    Scenario Outline: Password Incorrect
        Given I am on the Pagii HR login page
        When I enter email "<email>"
        And I enter password "<password>"
        And I Check the recaptcha google
        And I click the Login button
        Then I should see the error "<message>"

        Examples:
            | email          | password  | message                          |
            | hr@smooets.com | 712687162 | You must give the valid password |

    @feature=login-unverify-captcha
    Scenario Outline: Login with condition Recaptcha Uncheck
        Given I am on the Pagii HR login page
        When I enter email "<email>"
        And I enter password "<password>"
        And I uncheck the recaptha option
        And I click the Login button
        Then I should see the error "<message>"

        Examples:
            | email          | password | message                   |
            | hr@smooets.com | password | Please verify the CAPTCHA |

    @feature=login-incorrect-credential
    Scenario Outline: Invalid Credential
        Given I am on the Pagii HR login page
        When I enter email "<email>"
        And I enter password "<password>"
        And I Check the recaptcha google
        And I click the Login button
        Then I should see the error "<message>"

        Examples:
            | email              | password | message                                                 |
            | fawzi.r@smt-id.com | password | Akun Anda tidak memiliki akses untuk masuk ke laman ini |