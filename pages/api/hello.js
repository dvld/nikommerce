import nodemailer from 'nodemailer';

const handler = async (req, res) => {
  // let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    service: 'Godaddy',
    auth: {
      user: 'admin@nikommerce.com',
      pass: 'GM58^hOtlSYPU!cf',
    },
  });

  let mailOptions = {
    from: '"niko roberts" <niko@nikommerce.com>',
    to: req.body.email,
    subject: `Hello ${req.body.name}`,
    html: '<b>hello tomato</b>',
  };

  let info = await transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log('email sent');
    }
  });

  return info;
};

// handler().catch(console.error);

export default handler;
