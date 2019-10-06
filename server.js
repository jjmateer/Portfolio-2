const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
// const db = require("./models");
const router = require("./router");

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Connected to port: http://localhost:${PORT}`)
})