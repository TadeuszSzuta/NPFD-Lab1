const user = {
  lg: "tadeusz",
  ps: "1234qwer",
  fn: "Tadeusz",
  ln: "Szuta",
  ag: "-1",
  bd: "2001-01-01",
};

describe("Checks if the app sends proper alert about invalid age", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get(".loginrg").type(user.lg);
    cy.get(".passwordrg").type(user.ps);
    cy.get(".firstnamerg").type(user.fn);
    cy.get(".lastnamerg").type(user.ln);
    cy.get(".agerg").type(user.ag);
    cy.get(".bdayrg").type(user.bd);
    cy.get(".submit").click();

    cy.get(".error").should(
      "have.text",
      "Wiek musi być liczbą większą od zera"
    );
  });
});
