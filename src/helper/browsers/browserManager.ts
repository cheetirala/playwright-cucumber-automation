import { chromium, firefox, LaunchOptions, webkit } from '@playwright/test';
const options: LaunchOptions = {
    headless: true, args: [
        '--disable-features=PasswordLeakDetection,PasswordManagerOnboarding'
    ]
}
export const invokeBrowser = () => {
    const browserType = process.env.npm_config_BROWSER || "chromium";

    switch (browserType) {

        case "chromium":
            return chromium.launch(options);

        case "chrome":
            return chromium.launch({ ...options, channel: 'chrome' });

        case "edge":
            return chromium.launch({ ...options, channel: 'msedge' });

        case "firefox":
            return firefox.launch({ headless: true });

        case "webkit":
            return webkit.launch({ headless: true });

        default:
            throw new Error("Please use | chrome | edge | firefox | webkit");
    }
}