import documenttaggingelements from "../fixtures/elements/documenttaggingelements.json";

class documentTaggingPage {
  VerifySupervisorScreen() {
    cy.get(documenttaggingelements.dropDownMenuButton).should("be.visible");
    cy.get(documenttaggingelements.dropDownMenuButton).click();
    cy.get(documenttaggingelements.dropDownItemList).should("be.visible");
    cy.get(".dropdown-menu").contains("Supervisor").click();
    cy.get(documenttaggingelements.logo).should("be.visible");
    cy.get(documenttaggingelements.supervisorAndRolewiseText)
      .contains("Supervisor")
      .should("be.visible");
    cy.get(documenttaggingelements.supervisorAndRolewiseText)
      .contains("Role Wise")
      .should("be.visible");
    cy.contains(documenttaggingelements.viewAllCountText, "View All Count").should("be.visible");
    
    // Verifying each supervisor role
    cy.get(documenttaggingelements.supervisorRoles, { timeout: 10000 })
  .should("contain.text", "JAF OCR");


    cy.get(documenttaggingelements.supervisorRoles)
      .contains("Document Tagging")
      .should("be.visible");
    cy.get(documenttaggingelements.supervisorRoles)
      .contains("Data Entry")
      .should("be.visible");
    cy.get(documenttaggingelements.supervisorRoles)
      .contains("Data Review")
      .should("be.visible");
    cy.get(documenttaggingelements.supervisorRoles)
      .contains("Report Zero")
      .should("be.visible");
  }

  VerifyAssignRoleDocumentTagging() {
    cy.contains(documenttaggingelements.supervisorRoles, "Document Tagging").click();
    cy.get(".form-control").eq(2).should("not.exist");

    cy.get(documenttaggingelements.documentTaggingCheckBox).first().check();
    cy.get(".form-control").eq(2).should("be.visible");

    cy.get("small.txt-italic")
      .invoke("text")
      .then((text) => {
        cy.wrap(text).as("loginUserName"); // Store the text as an alias
        cy.get(".form-control").eq(2).should("be.visible");
      });
  }
}

export default new documentTaggingPage();
