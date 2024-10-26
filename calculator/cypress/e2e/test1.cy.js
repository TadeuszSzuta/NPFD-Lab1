describe("Checks if 1+2=3 and fi it is displayed correctly", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.get(".button1").click();
    cy.get(".buttonPlus").click();
    cy.get(".button2").click();

    cy.get(".display").should("have.value", "1+2");
    cy.get(".buttonEqual").click();
    cy.get(".display").should("have.value", "");
    cy.get(".wynik").should("have.text", "3");
  });
});
