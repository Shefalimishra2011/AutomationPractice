const { defineConfig } = require("cypress");
require("dotenv").config({ path: `.env.${process.env.ENV || "dev"}` });

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL, // Fixed typo (BASE_URl -> BASE_URL)

    setupNodeEvents(on, config) {
      // Implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      require("@cypress/grep/src/plugin")(config);
      return config;
    },

    env: {
      grepOmmitFiltered: true,
      grepFilterSpecs: true,
      username: process.env.RE_USERNAME,
      password: process.env.RE_PASSWORD,
    },

    

    watchForFileChanges: false, // Disable automatic test reruns on file changes
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 70000,
    requestTimeout: 50000,
    responseTimeout: 50000,
    chromeWebSecurity: false,
    testIsolation: true,
    experimentalMemoryManagement: true,
    viewportHeight: 1080,
    viewportWidth: 2112,
    numTestsKeptInMemory: 1,
    video: false,
    videoCompression: false,
    screenshotOnRunFailure: true,

    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      reportPageTitle: "custom-title",
      embeddedScreenshots: true,
      overwrite: true,
      html: false,
      json: true,
    },
  },
});
