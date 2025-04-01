import documentTaggingPage from "../pagefile/documentTaggingPage.js";
import documenttaggingtestdata from "../fixtures/testdata/documenttaggingtestdata.json";
import loginPage from "../pagefile/loginPage.js";

describe("This suite will verify the login-related test cases.", () => {
  beforeEach(() => {
    // Visiting the website
    cy.visit("/");
    loginPage.verifyLoginWithValidCredentials(Cypress.env("username"), Cypress.env("password"));
  });

  

 
});
