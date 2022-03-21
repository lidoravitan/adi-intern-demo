const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())

app.get("/todos", (request, response) => {
  //  ... db read all todos and return
  response.json([{ id: 1, content: "First Saved Todo!" }]);
});

app.listen(8080);
