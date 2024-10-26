describe("Checks if 8-5*2=18 and if it is displayed correctly", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.get(".button8").click();
    cy.get(".buttonMinus").click();
    cy.get(".button5").click();
    cy.get(".buttonMultiply").click();
    cy.get(".button2").click();

    cy.get(".display").should("have.value", "8-5*2");
    cy.get(".buttonEqual").click();
    cy.get(".display").should("have.value", "");
    cy.get(".wynik").should("have.text", "-2");
  });
});
