// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Welcome from "./Welcome";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "user" && password === "password") {
      setIsLoggedIn(true);
      return true;
    } else {
      alert("Nieprawidłowy login lub hasło");
      return false;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/welcome"
          element={isLoggedIn ? <Welcome /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
