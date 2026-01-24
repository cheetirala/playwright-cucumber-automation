import { Page } from "@playwright/test";    

export default class PlaywrightWrapper {
constructor(private page: Page) {}

async navigateTo(url: string){
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
}
async waitAndClick(locator: string){
   const element = this.page.locator(locator);
   await element.waitFor({ state: 'visible' });
   await element.click();
}
}