const nodemailer = require("nodemailer")
require("ditenv").config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host:'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD, 
    },
});

//config

const mailOptions = {
    from: {
        name: 'Teste Pepe',
        address: process.env.USER
    },
    to: ['peppepretto@gmail.com', 'matheusbarcon@gmail.com'],
    subject: 'EMAIL DO SMTP',
    text: 'ESSE É O EMAIL DO SMTP',
    html: '<img src="C:\Users\giuseppe.castro\Desktop\kevin-hart" alt="My cool gif">',
};

//send mail conif

const sendMail = async (transporter, mailOptions) => {
    try{
        await transporter.sendMail
    }
}