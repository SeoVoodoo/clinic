import axios from "axios";
import { validateFormData, ValidationSchema } from "../validate-form/ValidateForm";

// interface ValidationSendForm {
//     e: { preventDefault: () => void; target: any }
//     mailMapper:any  
//     formSchema:ValidationSchema 
//     setErrors:Function
//     onSuccess:()=>void
//     onError:()=>void
// }

export const sendForm = async (e: { preventDefault: () => void; target: any }, title:string, mailMapper:any, formSchema:ValidationSchema, setErrors:Function, onSuccess:()=>void, onError:()=>void) => {

    e.preventDefault();

    const formData = new FormData(e.target);
    //console.log("e.target", e.target);
    console.log("formData", formData);
    const validationErrors = validateFormData(formData, formSchema);
    
    //console.log('validationErrors', validationErrors);
    setErrors(validationErrors);

    // если есть некорректно заполненные поля формы, то прерываем отправку
    if (Object.keys(validationErrors).length !== 0) {
        return;
    }
    
    const formEntries: { [key: string]: string } = {};
    
    // formData.forEach((value, key) => {
    //     formEntries[key] = value.toString();
    // })
    
    for(let [key, value] of formData) {
      formEntries[key] = value.toString();
    }

    // npm yarn pnpm
    // vite -> https://vitejs.dev/
    // webpack
    // npm run eject -> webpack.config.js
    // якорные ссылки
    



    console.log("formEntries", formEntries);
    delete formEntries['agreement'];

    const message = Object.entries(formEntries).map(([key, value]) => {
        return `<b>${mailMapper[key] || key}: </b> ${value}<br>`;
    }).join("")


    await axios
      .post("http://localhost:5000/send-mail", {
        subject: title,
        message
      })
      .then(() => {            
        console.log("Успех");
        e.target.reset();
        onSuccess();
      })
      .catch((error) => {
        console.log("Неудача", error);
        onError();
      });
};
