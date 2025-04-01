import loginPage from "../pagefile/loginPage.js";
import logintestdata from "../fixtures/testdata/logintestdata.json";

describe("This suite will verify the login-related test cases.", () => {
  beforeEach(() => {
    // visiting the website
    cy.visit("/");
  });

  it("Should verify the logo.", () => {
    // verifying the logo
    loginPage.verifyLoginPageLogo();
  });

  it("Should verify that the user is able to login with valid credentials.", { tags: "@smoke" }, () => {
    // Perform login action with valid credentials
    loginPage.verifyLoginWithValidCredentials(Cypress.env("username"), Cypress.env("password"));

  });

  it("Should verify that the user is able to login with invalid credentials.", { tags: "@sanity" }, () => {
    // Perform login action invalid credentials
    loginPage.verifyLoginWithInvalidCredentials(logintestdata.invalidUsername, logintestdata.invalidPassword);
  });

  it("Should verify that the user is able to login with valid username and invalid password.", () => {
    // Perform login action with valid username and invalid password
    loginPage.verifyLoginWithInvalidPassword(Cypress.env("username"), logintestdata.invalidPassword);
  });

  it("Should verify that the user is able to login with invalid username and valid password.", () => {
    // Perform login action with invalid username and valid password
    loginPage.verifyLoginWithInvalidUsername(logintestdata.invalidUsername, Cypress.env("password"));
  });
});
