const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: false,
    auth: {
        user: "youremail",
        pass: "yourpass",
    },
});


async function sendMail(to, subject, text, html) {
    const info = await transporter.sendMail({
        from: 'youremail',
        to,
        subject,
        text,
        html,
    });
}

module.exports = { sendMail }