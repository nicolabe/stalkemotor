const express = require('express');
const twitter = require("./services/twitter.js");
const instagram = require("./services/instagram.js");

const app = express();

app.get('/api/services', (req, res) => {
  res.json([
    twitter.getUrl(),
    instagram.getUrl()
  ])
});

app.get('/api/services/1', (req, res) => {
  const data = twitter.getData();
  console.log(data)

  res.json(data);
});

app.get('/api/services/2', (req, res) => {
  const data = instagram.getData();

  res.json(data);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);