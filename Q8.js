var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pullinkouki6@gmail.com',
    pass: '@ukipulli6'
  }
});

var mailOptions = {
  from: 'pullinkouki6@gmail.com',
  to: 'nithilan32@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
