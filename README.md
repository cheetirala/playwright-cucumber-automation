# Playwright + TypeScript + Cucumber (BDD)

End-to-end automation framework using Playwright with Cucumber and TypeScript. The project follows a Page Object Model and generates HTML/JSON reports, traces, screenshots, and videos.

## Tech Stack

- Playwright
- Cucumber (BDD)
- TypeScript
- Node.js
- multiple-cucumber-html-reporter
- axe-core accessibility checks (optional)

## Quick Start

1) Install dependencies

```bash
npm install
```

2) Create an environment file (see Environment section below)

3) Run tests

```bash
npm run test
```

## Environment

Environment variables are loaded from:

```
src/helper/env/.env.<ENV>
```

The test script defaults to `ENV=prod` via `cross-env`, so create:

```
src/helper/env/.env.prod
```

Suggested variables:

```
BASEURL=https://www.saucedemo.com/
BROWSER=chromium
```

## Test Execution

- Run all tests

```bash
npm run test
```

- Run failed scenarios from the last run

```bash
npm run test:failed
```

- Filter by tags

```bash
npm run test --TAGS="@smoke"
```

- Override environment or browser

```bash
npm run test --ENV=qa --BROWSER=chrome
```

## Reporting Artifacts

After a run, these artifacts are generated under `test-results/`:

- `cucumber-report.html`
- `cucumber-report.json`
- `trace/` (Playwright traces)
- `screenshots/` (on failure)
- `videos/` (per scenario)

Traces are attached to the Cucumber report as a link to the Playwright trace viewer.

## Project Structure

```
playwright-ts-automation
├── config
│   └── cucumber.js
├── src
│   ├── helper
│   │   ├── browsers
│   │   ├── env
│   │   ├── report
│   │   ├── types
│   │   ├── util
│   │   └── wrapper
│   ├── hooks
│   ├── pages
│   └── test
│       ├── features
│       └── steps
├── test-results
├── tsconfig.json
└── package.json
```

## Notes

- Default parallelism and retries are configured in [config/cucumber.js](config/cucumber.js).
- Accessibility checks use `@axe-core/playwright` and can be enabled in the login feature.
