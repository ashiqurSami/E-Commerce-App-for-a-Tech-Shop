const nodemailer=require('nodemailer')
const dotEnv=require("dotenv");
dotEnv.config();

exports.EmailSender=async(EmailTo,EmailText,EmailSubject)=>{

    let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'otpverify.samisoftlab@gmail.com', 
        pass: process.env.GMAIL_APP_PASS 
    }
    });

    let mailOptions = {
    from: 'otpverify.samisoftlab@gmail.com',
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText
    };
    
    return await transporter.sendMail(mailOptions);
}