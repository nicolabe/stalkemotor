const express = require('express');
const twitter = require("./services/twitter.js");
const instagram = require("./services/instagram.js");
const facebook = require("./services/facebook.js");

const app = express();

app.get('/api/services', (req, res) => {
  res.json([
    twitter.getUrl(),
    instagram.getUrl(),
    facebook.getUrl()
  ])
});

app.get('/api/services/:id', (req, res) => {
  let data = {};
  switch(req.params.id) {
    case "1":
      data = twitter.getData();
      break;
    case "2":
      data = instagram.getData();
      break;
    case "3":
      data = facebook.getData();
      break;
  }
  res.json(data);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);