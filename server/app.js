import express from "express";
import { createTransport } from "nodemailer";
import cors from "cors";

const app = express();
//const port = 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail({ email, subject, message }) {
  return new Promise((resolve, reject) => {
    var transporter = createTransport({
      service: "yandex",
      auth: {
        user: "ellada73porte@yandex.ru",
        pass: "Ellada$x2ZaF$j09m",
      },
    });

    const mail_configs = {
      from: "ellada73porte@yandex.ru",
      // to: email,
      // subject: subject,
      html: `      
      <p>${taxpayerFullName}</p>
      <p>${inn}</p>
      <p>${patientFullName}</p>
      <p>${phone}</p>      
      `,
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        console.log(error);
        return reject({ message: `An error has occurred` });
      }
      return resolve({ message: "Email sent successfully" });
    });
  }); 
}

//localhost:5000/sendemail

app.get("/", (req, res) => {
  console.log("Зашли на Сервер");
  sendEmail(req.query)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

// app.listen(port, () => {
//   console.log(`nodemailerProject is listening at http://localhost:${port}`);
// });