const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const router = require("./router");
const bodyparser = require("body-parser");
const nodemailer = require('nodemailer');
require('dotenv').config()
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/", router);

app.post("/send", (req, res) => {
    var output = `
    <p>New message from portfolio.</p>
    <ul>
    <h3>Contact Details<h3>
    <li>Name:${req.body.name}</li>
    <li>Email:${req.body.email}</li>
    </ul>
    <h3>Message:<h3>
    <p>${req.body.message}</p>
    `;
    let transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: "jj.mateer@live.com",
            pass: process.env.EMAIL_PW
        }
    });

    // send mail with defined transport object
    let info = {
        from: "Portfolio Contact",
        to: 'jj.mateer@live.com',
        subject: 'Portfolio Message',
        text: 'Hello world?',
        html: output
    }
    transporter.sendMail(info, (err, info) => {
        if (err) {
            console.log(err)
        }

        // console.log('Message sent: %s', info.messageId);

        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render("index", { msg: "Message" })

        console.log(output)
    })
})

app.listen(PORT, () => {
    console.log(`Connected to port: http://localhost:${PORT}`)
})