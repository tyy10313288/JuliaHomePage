const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(express.json());

require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        ype: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
    }
});

app.post('/subscribe', (req, res) => {
  const { email } = req.body; // 從請求體中獲取電郵地址
  const mailOptions = {
    from: 'game22403001@gmail.com', // 發件人地址
    to: email, // 收件人地址，即用戶的地址
    subject: '訂閱確認',
    text: '感謝您的訂閱，我們將會定期發送更新給您。' // 郵件內容
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Email error details:', error);
        res.status(500).send('Error sending email: ' + error.message);
    } else {
        console.log('Email sent successfully:', info.response);
        res.send('Email sent successfully');
    }
});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
