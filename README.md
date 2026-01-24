🎭 Playwright + 🥒 Cucumber Automation Framework

End-to-end test automation framework built using Playwright, Cucumber (BDD) and TypeScript.

This project is designed for:

Writing readable, business-friendly tests

Running fast, reliable browser automation

Supporting CI/CD pipelines

Generating rich test reports

🚀 Tech Stack

Playwright – Browser automation

Cucumber – BDD feature files

TypeScript – Strong typing

Node.js

Cucumber HTML Reporter / Allure (depending on your setup)

📁 Project Structure
playwright-cucumber-automation
│
├── src
│   ├── test/features   # Gherkin feature files
│   ├── test/steps      # Step definitions
│   ├── pages           # Page Object Model
│   ├── hooks           # Cucumber hooks    
│   └── support         # Playwright & test setup
│
├── test-results/reports             # Test execution reports
├── config/cucumber.js
├── tsconfig.json
└── package.json

📦 Installation
1️⃣ Clone the repo
git clone https://github.com/cheetirala/playwright-cucumber-automation.git
cd playwright-cucumber-automation

2️⃣ Install dependencies
npm install

3️⃣ Install Playwright browsers
npx playwright install

▶️ Running Tests
Run all tests
npm test

Run with a specific browser
BROWSER=chromium npm test
BROWSER=firefox npm test
BROWSER=webkit npm test

📊 Reports

After execution, open:

/reports/index.html

🔄 CI Ready

This framework is designed to run in:

GitHub Actions

Azure DevOps

Jenkins

GitLab CI

It supports:

Headless execution

Environment variables

Parallel runs

You can use a .env file:

BASE_URL=https://www.saucedemo.com
BROWSER=chrome
HEADLESS=true

📌 Best Practices

Keep steps reusable

Put selectors only in Page Objects

Avoid hard waits

Use Playwright auto-waiting

Use tags to control which tests run

