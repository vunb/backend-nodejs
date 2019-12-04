import express from "express";

const app = express();

app.get("/todo", (req, res, next) => {
  res.send("Hello Express.ts!!!!");
});

app.listen(3000, () => {
  console.log("Server started at port 3000!");
});
