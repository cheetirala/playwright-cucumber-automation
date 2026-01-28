const fs = require("fs-extra");

try {
    fs.ensureDir("test-results");
} catch (error) {
    console.log("Folder not created! " + error);
}