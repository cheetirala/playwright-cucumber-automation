import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { fixture } from "./fixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";
const fs = require("fs-extra")

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    getEnv();
    browser = await invokeBrowser();
})

Before(async function ({ pickle }) {
    const scenarioName = pickle.name + pickle.id;
    context = await browser.newContext({
        recordVideo: { dir: "test-results/videos" }
    });
    await context.tracing.start({ name: scenarioName, title: pickle.name, screenshots: true, snapshots: true, sources: true });
    const page = await context.newPage();
    fixture.page = page;
    fixture.logger = createLogger(options(scenarioName));
});

After(async function ({ pickle, result }) {
    let videoPath: string | null = null;
    let img: Buffer | null = null;
    const path = `./test-results/trace/${pickle.id}.zip`;
    console.log(result?.status);

    if (result?.status == Status.FAILED) {
        img = await fixture.page.screenshot({
            path: `./test-results/screenshots/${pickle.name}.png`,
            type: "png"
        });

        const video = fixture.page.video();
        if (video) {
            videoPath = await video.path();
        }
    }

    await context.tracing.stop({ path: path });
    await fixture.page.close();
    await context.close();

    if (result?.status == Status.FAILED && img && videoPath) {
        await this.attach(img, "image/png");
        await this.attach(fs.readFileSync(videoPath), 'video/webm');
    }
    const traceFileLink = `<a href="https://trace.playwright.dev/">Open ${path}</a>`;
    await this.attach(`Trace File: ${traceFileLink}`, "text/html");
});

AfterAll(async function () {
    await browser.close();
})
