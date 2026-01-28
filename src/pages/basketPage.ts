import { Page, expect } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrapper';


export default class BasketPage {

    private wrapper: PlaywrightWrapper;

    constructor(private page: Page) {
        this.wrapper = new PlaywrightWrapper(page);
    }

    private elements = {
        addToBasketButton: '#add-to-cart-sauce-labs-backpack',
        badgeCount: "//span[@data-test='shopping-cart-badge']",
        basketLink: "//a[@data-test='shopping-cart-link']"
    }

    async addProductToBasket() {
        await this.page.locator(this.elements.addToBasketButton).click();
    }

    async getBasketBadgeCount(): Promise<string> {
        const text = await this.page.locator(this.elements.badgeCount).textContent();
        return text?.trim() ?? "0";
    }

    async navigateToBasketPage() {
        await this.page.locator(this.elements.basketLink).click();
    }
}