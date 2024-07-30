import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	//host: 'smtp.yandex.ru',
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		//user: 'ellada73porte@yandex.ru',
		user: 'seovoodoo.guru@gmail.com',
		//pass: 'Ellada$x2ZaF$j09m'
		pass: 'Tr26PL$w@m8eF'
	},
	tls: {rejectUnauthorized: true},
})

// export const mailOptions = {
// 	from: 'seovoodoo.guru@gmail.com',
// 	to: 'seovoodoo.guru@gmail.com'
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

