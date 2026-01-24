import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";


export default class LoginPage {
    private wrapper: PlaywrightWrapper;

    constructor(private page: Page) {
        this.wrapper = new PlaywrightWrapper(page);
    }

    private elements = {
        usernameInput: '#user-name',
        passwordInput: '#password',
        loginButton: '#login-button',
        errorMessage: "//h3[@data-test='error']"
    }

    async goToLoginPage(url: string) {
        await this.wrapper.navigateTo(url);
    }

    async enterUsername(username: string) {
        await this.page.fill(this.elements.usernameInput, username);
    }
    
    async enterPassword(password: string) {
        await this.page.fill(this.elements.passwordInput, password);
    }

    async clickLoginButton() {
        await this.page.click(this.elements.loginButton);
    }

    async getErrorMessage() {
        return await this.page.locator(this.elements.errorMessage).textContent();
    }
}
