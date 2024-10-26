import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(login, password);
  };

  return (
    <div>
      <h2>Logowanie</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Login:</label>
          <input
            className="loginlg"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <label>Hasło:</label>
          <input
            className="passwordlg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit">
          Zaloguj
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
