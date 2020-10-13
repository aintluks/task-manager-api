const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andrew@mead.io',
        subject: 'this is my creation!',
        text: `Welcome ${name}`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'andrew@mead.io',
        subject: 'this is my creation!',
        text: `Goodbye ${name}`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}