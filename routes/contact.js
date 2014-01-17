var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport('SMTP', {
  service : 'Gmail',
  auth : {
    user : 'dfm.contact.form@gmail.com',
    pass : 'asdfqwer1!'
  }
});

exports.sendEmail = function(req, res, next) {
  var data = req.body;
  var options = {
    from : data.senderName + '<' + data.senderEmail + '>',
    to : 'dfmcmurray@gmail.com',
    subject : 'DFM, Inc. Web Correspondence',
    text : 'Name: ' + data.senderName + '\nEmail: ' + data.senderEmail + '\nOrganization: ' + data.senderOrganization + '\n\nContent:\n' + data.text
  }
  smtpTransport.sendMail(options, function(err, response) {
    if (err) return next(err);
    res.writeHead(204);
    res.end();
  });
};
