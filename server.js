const express = require('express');

const app = express();

app.get('/api/search', (req, res) => {
  const data = {
    message: "From backend: " + req.query.q
  }

  res.json(data);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);