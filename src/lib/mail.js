import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
// 	//host: 'smtp.yandex.ru',
// 	host: 'smtp.gmail.com',
// 	port: 465,
// 	secure: true,
// 	auth: {
// 		user: 'ellada73porte@yandex.ru', 		
// 		pass: 'Ellada$x2ZaF$j09m'
// 	},
// 	tls: {rejectUnauthorized: true},
// })

// export const mailOptions = {
// 	from: 'ellada73porte@yandex.ru',
// 	to: 'ellada73porte@yandex.ru'
// }

export const sendEmail = (message) => {
    transporter.sendMail(message, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully", info);
        }
        transporter.close();
    });
}

