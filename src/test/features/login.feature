Feature: Login Functionality
    As a user of the Saucedemo application
    I want to be able to log in with valid credentials
    So that I can access my account and use the application features

Background:
    Given the user navigate to Saucedemo

  Scenario: Successful login with valid credentials
    When the user enters valid username and password
    When the user clicks the login button
    Then the user should be redirected to the dashboard
    And should not have any automatically detectable accessible issues

  Scenario: Unsuccessful login with invalid credentials
    When the user enters invalid username or password
    And the user clicks the login button
    Then an error message should be displayed indicating invalid credentials
