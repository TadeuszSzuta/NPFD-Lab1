describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://192.168.0.75:3000/welcome");

    cy.get(".login").type("user");
    cy.get(".password").type("password");
    cy.get(".submit").click();

    cy.url().should("eq", "http://192.168.0.75:3000/welcome");
  });
});
