import nodemailer from 'nodemailer';

// const handler = async (req, res) => {
//   let transporter = nodemailer.createTransport({
//     service: 'Godaddy',
//     auth: {
//       user: process.env.EMAIL_AUTH_USER,
//       pass: process.env.EMAIL_AUTH_PASS,
//     },
//   });

//   let message = {
//     from: '"Niko Roberts" <niko@nikommerce.com>',
//     to: req.body.email,
//     subject: `This is a test`,
//     html: '<p>this test may have been successful</p>',
//   };

//   let transportData = await transporter.sendMail(message, (err, data) => {
//     if (!err) {
//       res.status(200);
//       console.log('Email Sent');
//     } else {
//       console.log(err.message);
//     }

//     return data;
//   });

//   res.json({ transportData });
// };

import mailjet from 'node-mailjet';

const handler = (req, res) => {
  try {
    mailjet.connect(
      process.env.MAILJET_AUTH_USER,
      process.env.MAILJET_AUTH_PASS
    );

    const request = mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: 'niko@nikommerce.com',
              Name: 'Niko Roberts',
            },
            To: [
              {
                Email: req.body.email,
                Name: req.body.name,
              },
            ],
            Subject: 'This is a test',
            TextPart: 'Hello from Nikommerce',
            HTMLPart: '<h2>Potato</h2>',
          },
        ],
      })
      .then((result) => {
        console.log(result.body);
      })
      .catch((err) => {
        console.error(err.statusCode);
      });
  } catch (error) {
    console.error(error.message);
  }

  return res;
};

export default handler;
