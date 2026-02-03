Feature: Add to Basket Functionality

  Background:
    Given the user navigate to Saucedemo
    When the user enters valid username and password
    When the user clicks the login button
    Then the user should be redirected to the dashboard

  Scenario: User adds a single item to the basket
    Given the user adds product to the basket
    Then the basket should contain 2 item
