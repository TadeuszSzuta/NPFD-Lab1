// src/Kalkulator.js
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

  return (
    <div style={{ padding: "20px" }}>
      <h1>Calculator</h1>
      <div>
        <input type="text" value={input} readOnly />
        <div>{wynik}</div>
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
            className={button === "=" ? "equal" : ""}
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
