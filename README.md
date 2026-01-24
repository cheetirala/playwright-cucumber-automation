# 🎭 Playwright + 🥒 Cucumber Automation Framework

End-to-end test automation framework built using **Playwright**, **Cucumber (BDD)**, and **TypeScript**.

This project is designed for:

- Writing readable, business-friendly tests  
- Running fast, reliable browser automation  
- Supporting CI/CD pipelines  
- Generating rich test reports  

---

## 🚀 Tech Stack

- **Playwright** – Browser automation  
- **Cucumber** – BDD feature files  
- **TypeScript** – Strong typing  
- **Node.js**  
- **Cucumber HTML Reporter / Allure**

---

## 📁 Project Structure

```bash
playwright-cucumber-automation
│
├── src
│   ├── test/features   # Gherkin feature files
│   ├── test/steps      # Step definitions
│   ├── pages           # Page Object Model
│   ├── hooks           # Cucumber hooks
│   └── support         # Playwright & test setup
│
├── test-results
│   └── reports         # Test execution reports
│
├── config
│   └── cucumber.js
│
├── tsconfig.json
└── package.json
