const nodemailer = require('nodemailer');
exports.home = function (req, res) {
    res.render("index")
}
exports.send = async function (req, res) {
    var output = `
    <h1>New message from portfolio.</h1>
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
    let info = {
        from: "Portfolio Contact",
        to: 'jj.mateer@live.com',
        subject: 'Portfolio Message',
        text: 'Hello world?',
        html: output
    }
    transporter.sendMail(info, (err, info) => {
        console.log(err || response);
        console.log(output)
    })
}