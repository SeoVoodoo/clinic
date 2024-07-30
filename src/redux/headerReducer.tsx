import React from 'react';

const initialState = {    
        headerMenu: {
            mainMenu: [
                {
                    ancor: "Услуги",
                    path: "#"
                },
                {
                    ancor: "Цены",
                    path: "prices"
                },
                {
                    ancor: "Наши врачи",
                    path: "doctors"
                },
                {
                    ancor: "График приема",
                    path: "timetable"
                },
                {
                    ancor: "Эко по ОМС",
                    path: "eco"
                },
                {
                    ancor: "Вопрос-Ответ",
                    path: "faq"
                },
                {
                    ancor: "О нас",
                    path: "#"
                },
                {
                    ancor: "Контакты",
                    path: "contacts"
                }    
            ],
            subMenu: [
                {
                    ancor: "О клинике",
                    path: "about"
                },
                {
                    ancor: "Отзывы",
                    path: "reviews"
                },
                {
                    ancor: "Новости",
                    path: "news"
                },
                {
                    ancor: "Пройти опрос",
                    path: "questionnaire"
                },
                {
                    ancor: "Документы",
                    path: "documents"
                },
                {
                    ancor: "Вакансии",
                    path: "vacancy"
                },
                {
                    ancor: "Прием граждан",
                    path: "reception-of-citizens"
                },
                {
                    ancor: "3Д тур по клинике",
                    path: "3d-tour"
                },
                {
                    ancor: "Условия оплаты",
                    path: "payment-terms"
                }
            ]
        },
        contacts: {
            phone1: "8 (8422) 24-01-44",
            phone2: "8 (8422) 25-54-23",
            email: "a-klinik@yandex.ru",
            callback: false
        },
        counter: {
            boys: 518,
            girls: 496        
        },
        socials: [
            {
                id: "classmates",        
                link: "https://ok.ru/profile/593726626588"
            },
            {
                id: "telegram",        
                link: "https://t.me/aliansklinikeko"
            },
            {
                id: "viber",        
                link: "https://invite.viber.com/?g2=AQBAf%2Bx%2F82e7mktNV7q6hphMd%2FGP4D8mqeuOFWjD2vnFajGX828VqIasBDcHG7f3"
            },
            {
                id: "vk",        
                link: "https://vk.com/aliansklinikeko73"
            }
        ],
        forms: {
            ndfl: {                
                values: ["2024", "2023", "2022"]
            }
        }   
}

export type initialStateType = typeof initialState;

export const headerReducer = (state = initialState, action: any):initialStateType => {
    return state;
};
