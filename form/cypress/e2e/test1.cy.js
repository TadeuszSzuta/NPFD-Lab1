const user = {
  lg: "tadeusz",
  ps: "1234qwer",
  fn: "Tadeusz",
  ln: "Szuta",
  ag: "70315",
  bd: "2001-01-01",
};

describe("Registers, logs in and displays user information", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    // Rejestracja
    cy.get("h2").should("have.text", "Rejestracja");
    cy.get(".loginrg").type(user.lg);
    cy.get(".passwordrg").type(user.ps);
    cy.get(".firstnamerg").type(user.fn);
    cy.get(".lastnamerg").type(user.ln);
    cy.get(".agerg").type(user.ag);
    cy.get(".bdayrg").type(user.bd);
    cy.get(".submit").click();

    // Logowanie
    cy.get("h2").should("have.text", "Logowanie");
    cy.get(".loginlg").type(user.lg);
    cy.get(".passwordlg").type(user.ps);
    cy.get(".submit").click();

    // Dane
    cy.get(".greeting").should("have.text", `Witaj, ${user.lg}!`);
    cy.get(".firstnameup").should("have.text", `Imię: ${user.fn}`);
    cy.get(".lastnameup").should("have.text", `Nazwisko: ${user.ln}`);
    cy.get(".bdayup").should("have.text", `Data urodzenia: ${user.bd}`);
  });
});
