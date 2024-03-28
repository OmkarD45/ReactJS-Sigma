const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/contact", (req, res) => {
  res.send("Contact Me");
});

app.get("/blog", (req, res) => {
  res.send("Blog ");
});

app.get("/blog/:slug", (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(`Blog- ${req.params.slug}`);
  });

// app.get("/blog/Python", (req, res) => {
//   res.send("Blog-Python ");
// });

// app.get("/blog/Java", (req, res) => {
//   res.send("Blog-Java ");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
