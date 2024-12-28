const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: false,
    auth: {
        user: "aartisghorpade2199@gmail.com",
        pass: "fmcjcozyhxhhpsrq",
    },
});


async function sendMail(to, subject, text, html) {
    const info = await transporter.sendMail({
        from: 'aartisghorpade2199@gmail.com',
        to,
        subject,
        text,
        html,
    });
}

module.exports = { sendMail }