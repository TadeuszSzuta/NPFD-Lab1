import React, { useState } from "react";
import LoginForm from "./LoginForm";
import HomePage from "./HomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setCurrentUser(user);
  };

  return (
    <div>
      {isLoggedIn ? (
        <HomePage username={currentUser} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
