let nodemailer = require('nodemailer');

const mail = async (req, res) => {

    const formData = req.body || {}


    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS // app password - to be generated from MANAGE YOUR GOOGLE ACCOUNT by searching APP PASSWORDS
      }
    });

    let mailOptions = {
      from: 'jeevanchaudhary.76129@gmail.com',
      to: formData.to,
      subject: formData.subject,
      text: formData.text,
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        res.json({
            status: 500,
            success: false,
            message: "Error sending mail: "+ error
        })
      } else {
        console.log('Email sent: ' + info.response);

        res.json({
            success: true,
            status: 200,
            message: "Email Sent"
        })
      }
    });
}

module.exports = {mail}