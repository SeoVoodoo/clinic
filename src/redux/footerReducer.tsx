import React from 'react';
import Imgbanner from '../assets/images/single-img/footer/control.webp';

const initialState = {  
    footerMenu: {
        duplicateLinks: [
            {   
                id: 1,
                ancor: "О клинике",
                path: "about"  
            },
            {   
                id: 2,
                ancor: "Новости",
                path: "news"  
            },
            {   
                id: 3,
                ancor: "Отзывы",
                path: "reviews"  
            },
            {   
                id: 4,
                ancor: "Вакансии",
                path: "vacancy"  
            },            
            {   
                id: 5,
                ancor: "3D-тур по клинике ",
                path: "3d-tour"  
            },
            {   
                id: 6,
                ancor: "Условия оплаты",
                path: "payment-terms"  
            },
            {   
                id: 7,
                ancor: "Наши врачи",
                path: "doctors"  
            },
            {   
                id: 8,
                ancor: "График приема",
                path: "timetable"  
            },
            {   
                id: 9,
                ancor: "Цены",
                path: "prices"  
            },
            {   
                id: 10,
                ancor: "Вопрос-ответ",
                path: "faq"  
            },
            {   
                id: 11,
                ancor: "Полезная информация",
                path: "usefulInfo"  
            },
            {   
                id: 12,
                ancor: "Контакты",
                path: "contacts"  
            }        
        ],
        servicesLinks: []
    },
    addresses: [
        "г. Ульяновск, пр-т. Врача Сурова, д. 4",
        "г. Ульяновск, ул. Бебеля, 1А",
        "г. Ульяновск, ул. Рябикова, 96"
    ],
    banner: {
        src: Imgbanner,
        path: "https://minzdrav.gov.ru/open/supervision/format/nezavisimaya-sistema-otsenki-kachestva-okazaniya-uslug-meditsinskimi-organizatsiyami/nezavisimaya-otsenka-kachestva-okazaniya-uslug-meditsinskimi-organizatsiyami"
    } 
     
}

export type initialStateType = typeof initialState;

export const footerReducer = (state = initialState, action: any):initialStateType => {
    return state;
};
