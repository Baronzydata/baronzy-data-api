const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Baronzy Data API",
    status: "online",
    message: "Baronzy Data API is running"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Baronzy Data API running on port ${PORT}`);
});
