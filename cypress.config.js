const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5h3b2d",
  e2e: {
    specPattern: "cypress/tests/**.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
