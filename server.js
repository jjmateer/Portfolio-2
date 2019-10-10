const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const router = require("./router");
const bodyparser = require("body-parser");
require('dotenv').config()
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Connected to port: http://localhost:${PORT}`)
})