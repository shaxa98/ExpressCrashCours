const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

const courses = [
  { id: 1, name: "shaxa1" },
  { id: 2, name: "shaxa2" },
  { id: 3, name: "shaxa3" },
  { id: 4, name: "shaxa4" },
  { id: 5, name: "shaxa5" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/courses", (req, res) => {
  res.send(courses);
});
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The cours with the given ID was not found");
  res.send(course);
});
// app.get("/api/courses/:id", (req, res) => {
//   res.send(req.params.id);
// });

//Year/month =>{"year":"2022","month":"5"}
// app.get("/api/:year/:month", (req, res) => {
//   res.send(req.params);
// });

//http://localhost:4500/api/2022/5?sortBy=name => {"sortBy":"name"}
// app.get("/api/:year/:month", (req, res) => {
//   res.send(req.query);
// });

// app.post(); Object qati mukunad
app.post("/api/courses", (req, res) => {
  if (!req.body || req.body.name.length < 3) {
    // 400 Bad Request
    res
      .status(400)
      .send("Name is required and should be minimum 3 characters. ");
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

// app.put();
// app.delete();
// PORT
const port = process.env.PORT || 2900;

app.listen(port, () => console.log(`Listening on port ${port}...`));
