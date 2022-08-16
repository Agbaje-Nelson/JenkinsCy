const { defineConfig } = require("cypress");
const Mochawesome = require("mochawesome");

module.exports = defineConfig({
  "reporter":"Mochawesome",
  "reporterOptions":{
    "reportDir":"cypress/reports",
    "overwrite":false,
    "html":false,
    "json":true,
    "timeStamp":"mmddyyyy_HHMMss"
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
