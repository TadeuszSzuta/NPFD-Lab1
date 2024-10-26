describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.get(".username").type("tadeusz{enter}");
    cy.get(".password").type("1234qwer{enter}");

    cy.get(".greeting").should("have.text", "Cześć, tadeusz!");
  });
});
