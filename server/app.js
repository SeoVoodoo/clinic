import express from "express";
import { createTransport } from "nodemailer";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});



const CONFIG = {
  from: {
    email: 'c.testoff@yandex.ru',
    password: 'rwkogrpoeljkmimp'
  },
  to: {
    email: 'a-klinik73@yandex.ru'
  }
}

const sendEmail = async ({ subject, message }) => {
    const transporter = createTransport({
        service: "yandex",
        host: "smtp.yandex.ru",
        port: 465,
        auth: {
            user: CONFIG.from.email,
            pass: CONFIG.from.password,
        }
    });

    const mail_configs = {
        from: CONFIG.from.email,
        to: CONFIG.to.email,
        subject: subject,
        html: message,
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mail_configs, (error, info) => {
        if (error) {
          return reject(error)
        }
        return resolve(info)
      })
    })
}

//localhost:5000/sendemail

app.post("/send-mail", async (req, res) => {

  const { subject, message } = req.body

  if (!subject?.trim() || !message?.trim()) {
    return res.status(400).json({
      ok: false,
      error: 'Validation error'
    })
  }

  try {
    await sendEmail({ subject, message })

    return res.status(200).json({
      ok: true
    })
  } catch (e) {
    return res.status(400).json({
      ok: false
    })
  }
});

app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`);
});



// localhost:5000/send-mail?subject=ТЕСТЗАГОЛОВОК&message=ТЕСТСООБЩЕНИЕ123455