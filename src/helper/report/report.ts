const report = require("multiple-cucumber-html-reporter");
const fsx: any = require("fs-extra");
const path = require("path");

try {
  // Ensure test-results directory exists
  fsx.ensureDirSync("test-results");
  
  // Check if cucumber-report.json exists and has content
  const jsonFile = path.join("test-results", "cucumber-report.json");
  
  if (fsx.existsSync(jsonFile)) {
    const fileContent = fsx.readFileSync(jsonFile, "utf8").trim();
    
    // Only generate report if JSON file has valid content
    if (fileContent && fileContent.length > 0) {
      report.generate({
        jsonDir: "test-results",
        reportPath: "test-results/reports/",
        reportName: "Playwright Automation Report",
        PageTitle: "SauceDemo app test report",
        displayDuration: false,
        metadata: {
          browser: {
            name: "chrome",
            version: "143",
          },
          device: "Kote - PC",
          platform: {
            name: "windows",
            version: "10",
          },
        },
        customData: {
          title: "Test info",
          data: [
            { label: "Project", value: "SauceDemo project" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Smoke-1" },
          ],
        },
      });
      console.log("Report generated successfully at test-results/reports/");
    } else {
      console.log("JSON file is empty. Skipping report generation.");
      fs.ensureDirSync("test-results/reports");
    }
  } else {
    console.log("No cucumber-report.json file found. Skipping report generation.");
    fs.ensureDirSync("test-results/reports");
  }
} catch (error) {
  console.error("Error generating report: " + error);
  // Ensure reports folder exists even if report generation fails
  try {
    fs.ensureDirSync("test-results/reports");
  } catch (dirError) {
    console.error("Failed to create reports folder: " + dirError);
  }
}