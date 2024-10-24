import React, { useState } from "react";

const Kalkulator = () => {
  const [input, setInput] = useState("");
  const [wynik, setWynik] = useState("");

  const dodajDoInputu = (value) => {
    setInput(input + value);
  };

  const oblicz = () => {
    try {
      setWynik(eval(input)); // Używamy eval do obliczeń
      setInput("");
    } catch (error) {
      setWynik("Błąd");
    }
  };

  const wyczysc = () => {
    setInput("");
    setWynik("");
  };

  // Funkcja do przypisania odpowiednich klas dla przycisków operacji
  const getButtonClass = (button) => {
    switch (button) {
      case "+":
        return "buttonPlus";
      case "-":
        return "buttonMinus";
      case "*":
        return "buttonMultiply";
      case "/":
        return "buttonDivide";
      case "=":
        return "buttonEqual";
      default:
        return `button${button}`; // Dla cyfr i innych znaków
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Calculator</h1>
      <div>
        <input class="display" type="text" value={input} readOnly />
        <div class="wynik">{wynik}</div>
      </div>
      <div>
        {[
          "1",
          "2",
          "3",
          "+",
          "4",
          "5",
          "6",
          "-",
          "7",
          "8",
          "9",
          "*",
          "0",
          "=",
          "C",
          "/",
        ].map((button) => (
          <button
            key={button}
            className={getButtonClass(button)} // Przypisujemy klasę na podstawie znaku przycisku
            onClick={() => {
              if (button === "=") {
                oblicz();
              } else if (button === "C") {
                wyczysc();
              } else {
                dodajDoInputu(button);
              }
            }}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Kalkulator;
