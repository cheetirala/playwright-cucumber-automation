import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(1000 * 60 * 1);
import { expect } from '@playwright/test';
import { fixture } from '../../hooks/fixture';
import BasketPage from '../../pages/basketPage';

let basketPage: BasketPage;

Given('the user adds product to the basket', async function () {
    basketPage = new BasketPage(fixture.page);
    await basketPage.addProductToBasket();
});

Then('the basket should contain {int} item', async function (number) {
    const badgeCount = await basketPage.getBasketBadgeCount(); 
    expect(Number(badgeCount)).toEqual(number);
});

When('I navigate to the basket page', async function () {
    await basketPage.navigateToBasketPage();
});

