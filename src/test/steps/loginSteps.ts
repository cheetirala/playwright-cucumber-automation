import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';

import { expect } from '@playwright/test';
import { fixture } from '../../hooks/fixture';
import LoginPage from '../../pages/loginPage';
import { log } from 'node:console';

let loginPage: LoginPage;

setDefaultTimeout(1000 * 60 * 1);

Given('the user navigate to Saucedemo', async function () {
    loginPage = new LoginPage(fixture.page);
    await loginPage.goToLoginPage(process.env.BASEURL || 'https://www.saucedemo.com/');
    fixture.logger.info('Navigated to Saucedemo');
});

When('the user enters valid username and password', async function () {
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('secret_sauce');
    fixture.logger.info('Entered valid username and password');
})

When('the user clicks the login button', async function () {
    await loginPage.clickLoginButton();
    fixture.logger.info('Clicked the login button');
});

Then('the user should be redirected to the dashboard', async function () {
    const basket = fixture.page.locator("//a[@data-test='shopping-cart-link']");
    expect(basket).toBeVisible();
});

When('the user enters invalid username or password', async function () {
    await loginPage.enterUsername('invalid_user');
    await loginPage.enterPassword('invalid_password');
    fixture.logger.info('Entered invalid username and password');
});

Then('an error message should be displayed indicating invalid credentials', async function () {
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Username and password do not match any user in this service');
    fixture.logger.info('Verified error message for invalid credentials');
});

