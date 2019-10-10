
exports.home = function (req, res) {
    res.render("index")
}
// exports.send = async function (req, res, err) {
//     var output = `
//     <p>New message from portfolio.</p>
//     <ul>
//     <h3>Contact Details<h3>
//     <li>Name:${req.body.name}</li>
//     <li>Email:${req.body.email}</li>
//     </ul>
//     <p>Message:${req.body.message}</p>
//     `;
//     let transporter = nodemailer.createTransport({
//         host: '	smtp-mail.outlook.com',
//         port: 587,
//         secure: false,
//         auth: {
//             user: "jj.mateer@live.com",
//             pass: process.env.EMAIL_PW
//         },
//         tls: {
//             rejectUnauthorized: false
//         }
//     });

//     // send mail with defined transport object
//     let info = {
//         from: '"Portfolio Contact" <jj.mateer@live.com>',
//         to: 'jj.mateer@live.com',
//         subject: 'Hello ✔',
//         text: 'Hello world?',
//         html: '<b>Hello world?</b>'
//     }
//     transporter.sendMail(info, (err, info) => {
//         if (err) {
//             console.log(err)
//         }

//         console.log('Message sent: %s', info.messageId);

//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//         res.render("index", { msg: "Message" })

//         console.log(output)
//     })
// }
