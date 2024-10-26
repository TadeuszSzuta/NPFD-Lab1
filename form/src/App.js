import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (newUser) => {
    setUsers([...users, newUser]);
    setIsRegistered(true);
  };

  const handleLogin = (login, password) => {
    const user = users.find(
      (user) => user.login === login && user.password === password
    );
    if (user) {
      setCurrentUser(user);
    } else {
      alert("Nieprawidłowy login lub hasło");
    }
  };

  return (
    <div>
      {currentUser ? (
        <UserProfile user={currentUser} />
      ) : isRegistered ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <RegisterForm onRegister={handleRegister} />
      )}
    </div>
  );
}

export default App;
