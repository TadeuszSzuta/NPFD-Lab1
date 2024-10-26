import React, { useState } from "react";

const RegisterForm = ({ onRegister }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!login || !password || !firstName || !lastName || !age || !birthDate) {
      setError("Wszystkie pola muszą być wypełnione");
      return;
    }

    if (isNaN(age) || age <= 0) {
      setError("Wiek musi być liczbą większą od zera");
      return;
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(birthDate)) {
      setError("Data urodzenia musi być w formacie YYYY-MM-DD");
      return;
    }

    onRegister({ login, password, firstName, lastName, age, birthDate });
    setError("");
  };

  return (
    <div>
      <h2>Rejestracja</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Login:</label>
          <input
            className="loginrg"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <label>Hasło:</label>
          <input
            className="passwordrg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Imię:</label>
          <input
            className="firstnamerg"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Nazwisko:</label>
          <input
            className="lastnamerg"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Wiek:</label>
          <input
            className="agerg"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Data urodzenia (YYYY-MM-DD):</label>
          <input
            className="bdayrg"
            type="text"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <button type="submit" className="submit">
          Zarejestruj
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
