import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2 className="greeting">Witaj, {user.login}!</h2>
      <p className="firstnameup">Imię: {user.firstName}</p>
      <p className="lastnameup">Nazwisko: {user.lastName}</p>
      <p className="bdayup">Data urodzenia: {user.birthDate}</p>
    </div>
  );
};

export default UserProfile;
