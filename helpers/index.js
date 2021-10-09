const nodemailer = require('nodemailer');

const defaultEmailData = { from: 'noreply@node-react.com' };

exports.sendEmail = emailData => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: 'kchadwellwebdev@gmail.com',
            pass: 'mauazsymousybczm'
        }
    });
    return (
        transporter
            .sendMail(emailData)
            .then(info => console.log(`Message sent: ${info.response}`))
            .catch(err => console.log(`Problem sending email: ${err}`))
    );
};