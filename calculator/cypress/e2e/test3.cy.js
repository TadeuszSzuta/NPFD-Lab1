describe("Checks if 8-5*2=18 and if it is displayed correctly", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.get(".button6").click();
    cy.get(".button6").click();
    cy.get(".buttonDivide").click();
    cy.get(".button0").click();

    cy.get(".display").should("have.value", "66/0");

    cy.get(".buttonEqual").click();
    cy.get(".display").should("have.value", "");
    cy.get(".wynik").should("have.text", "Infinity");
  });
});
