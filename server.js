const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here");
  // res.send("Hi");
  // res.download("server.js");
  // res.json({ message: "Error" });
  res.render("index", { name: "Teka" });
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(3000);
