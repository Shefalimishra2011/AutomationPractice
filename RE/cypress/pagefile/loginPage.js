import loginelements from "../fixtures/elements/loginelements.json"

class loginPage {
    // verifying the logo visibility
    verifyLoginPageLogo() {
        cy.get(loginelements.logo).should("be.visible");
    }

    // verifying the login functionality with valid credentials
    verifyLoginWithValidCredentials(validUsername, validPassword) {
        cy.get(loginelements.userNameField).should("be.visible");
        cy.get(loginelements.userNameField).type(validUsername);
        cy.get(loginelements.passwordField).should("be.visible");
        cy.get(loginelements.passwordField).type(validPassword);
        cy.get(loginelements.loginButton).should("be.visible");
        cy.get(loginelements.loginButton).click();
        cy.get(loginelements.documentTaggingHeading).should("be.visible");
        cy.get(loginelements.pendingListHeading).should("be.visible");

    }

    // verifying the login functionality with invalid credentials
    verifyLoginWithInvalidCredentials(invalidUsername, invalidPassword) {
        cy.get(loginelements.userNameField).should("be.visible");
        cy.get(loginelements.userNameField).type(invalidUsername);
        cy.get(loginelements.passwordField).should("be.visible");
        cy.get(loginelements.passwordField).type(invalidPassword);
        cy.get(loginelements.loginButton).should("be.visible");
        cy.get(loginelements.loginButton).click({ force: true });
        cy.get(loginelements.invalidErrorMessage).should("be.visible");
    }

    // verifying the login functionality with valid username and invalid password
    verifyLoginWithInvalidPassword(validUsername, invalidPassword) {
        cy.get(loginelements.userNameField).should("be.visible");
        cy.get(loginelements.userNameField).type(validUsername);
        cy.get(loginelements.passwordField).should("be.visible");
        cy.get(loginelements.passwordField).type(invalidPassword);
        cy.get(loginelements.loginButton).should("be.visible");
        cy.get(loginelements.loginButton).click({ force: true });
        cy.get(loginelements.invalidErrorMessage).should("be.visible");
    }

    // verifying the login functionality with invalid username and valid password
    verifyLoginWithInvalidUsername(invalidUsername, validPassword) {
        cy.get(loginelements.userNameField).should("be.visible");
        cy.get(loginelements.userNameField).type(invalidUsername);
        cy.get(loginelements.passwordField).should("be.visible");
        cy.get(loginelements.passwordField).type(validPassword);
        cy.get(loginelements.loginButton).should("be.visible");
        cy.get(loginelements.loginButton).click({ force: true });
        cy.get(loginelements.invalidErrorMessage).should("be.visible");
    }


    
}
export default new loginPage();

