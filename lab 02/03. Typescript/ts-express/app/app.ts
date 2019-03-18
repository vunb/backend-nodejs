import express from "express";
import path from "path";
// initialize configuration
const port = process.env.SERVER_PORT || 3000;
const app = express();

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
// app.use(express.static('public'));

// define a route handler for the default home page
app.get("/", (req, res) => {
  // render the index template
  res.render("index");
});
// start the express server
app.listen(port, () => console.log(`Server started at http://localhost:${ port }`));

