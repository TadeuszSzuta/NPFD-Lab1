import React from "react";

const HomePage = ({ username }) => {
  return (
    <div>
      <h2 className="greeting">Cześć, {username}!</h2>
      <p>Witaj na swojej stronie.</p>
    </div>
  );
};

export default HomePage;
