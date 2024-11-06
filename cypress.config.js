const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: 'http://k8s40.qa.bcn.zi.cloud:32210'
      // implement node event listeners here
    },
  },
});
