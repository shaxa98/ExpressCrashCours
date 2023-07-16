const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
// app.post();
// app.put();
// app.delete();

app.listen(2900, () => console.log("Listening on port 2900..."));
