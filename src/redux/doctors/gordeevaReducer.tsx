import React from 'react';
import Foto from '../../assets/images/single-img/desctop/doctors/gordeeva.webp';



const initialState = {  
    
    about: {
        name: "Гордеева Ирина Викторовна",
        src: Foto,
        work_experience: "Врачебный стаж с 2003 года",
        specialization: "Акушер-гинеколог, Репродуктолог",
        description: `<p>Главный врач клиники репродуктивного здоровья с лабораторией ЭКО ООО «Альянс Клиник»</p><p>Главный внештатный специалист по репродуктивному здоровью Министерства здравоохранения Ульяновской области</p><p>Имеет первую квалификационную категорию, кандидат медицинских наук.</p><p>Доцент кафедры акушерства и гинекологии Ульяновского государственного университета</p>`
    }


     
}

export type initialStateType = typeof initialState;

export const gordeevaReducer = (state = initialState, action:any):initialStateType => {  
    return state;    
};
