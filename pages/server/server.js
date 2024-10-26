// server/server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Ustawienie katalogu build jako statyczny, aby serwować pliki React
app.use(express.static(path.join(__dirname, "../build")));

// Serwowanie plików Reacta dla głównego endpointu
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
