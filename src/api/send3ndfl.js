import { sendEmail } from "../lib/mail";

export default async function handler(req, res) {
	console.log("req", req);
	const message = {
		to: '',
		subject: `Запрос для справки 3НДФЛ от ${req.body.patientFullName}`,
		text: `
			ФИО налогоплательщика: ${req.body.taxpayerFullName},
            ИНН налогоплательщика: ${req.body.inn},
            ФИО пациента: ${req.body.patientFullName}, 
        	Телефон: ${req.body.phone},
        	
        `,
	};
	sendEmail(message);
	console.log(message);
	res.send(`Спасибо за заявку, ${req.body.patientFullName}!`);
}

// export default function handler(req, res) {
// 	res.send("Hellow");
// }