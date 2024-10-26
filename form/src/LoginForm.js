import React, { useState } from "react";
import "./LoginForm.css";

// Lista użytkowników
const users = [
  { username: "tadeusz", password: "1234qwer" },
  { username: "anna", password: "abcd1234" },
  { username: "jan", password: "pass1234" },
  { username: "karolina", password: "qwerty12" },
  { username: "michal", password: "password1" },
];

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Sprawdzenie, czy użytkownik i hasło są poprawne
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      onLogin(username);
    } else {
      setError("Nieprawidłowy login lub hasło");
    }
  };

  return (
    <div>
      <h2>Logowanie</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Login:</label>
          <input
            required
            className="field username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Hasło:</label>
          <input
            required
            className="field password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Zaloguj</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
