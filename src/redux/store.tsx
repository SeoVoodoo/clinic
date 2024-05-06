
//const COLOR_SOCIAL_ICON = "COLOR_SOCIAL_ICON";

import Img1 from "../assets/images/home_slider/pgt.webp";
import Img2 from "../assets/images/home_slider/unikalnaya-specializirovannaya-sreda.webp";
import Img3 from "../assets/images/home_slider/artroskopiya-kolennogo-sustava.webp";
import Img4 from "../assets/images/home_slider/besplatnye-pervichnye-konsultacii.webp";
import Img5 from "../assets/images/home_slider/prp-terapiya.webp";
import Img6 from "../assets/images/home_slider/dnk-analiz.webp";
import Img7 from "../assets/images/home_slider/eko.webp";
import Img8 from "../assets/images/home_slider/kriokonservaciya-materiala.webp";
import Img9 from "../assets/images/home_slider/onlajn-konsultaciya.webp";


export const store = {
    headerMenu: {
        mainMenu: [
            {
                ancor: "Услуги",
                path: "services"
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
        email: "a-klinik@yandex.ru"
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
    homePage: {
        mainSlider: [
            {
                imageSrc: Img1,
                imageAlt: "ПГТ",
                title: "ПГТ",
                subTitle: "Преимплантанционный генетический тест",                
                path: "#",
                colorTitleType: "orange",
                colorSubTitleType: "green",
                bgBtnType: "orange"  
                                
            },
            {
                imageSrc: Img2,
                imageAlt: "Уникальная, специализированная среда",
                title: "Уникальная, специализированная среда",
                subTitle: "EmbryoGlue для переноса эмбриона",
                description: "Среда повышает уровень успеха имплантации эмбрионов на 8-9%",
                descriptionWeight: 500,
                path: "#",
                colorTitleType: "orange",
                colorSubTitleType: "green",
                colorDescriptionType: "black",
                bgBtnType: "green"
            },
            {
                imageSrc: Img3,
                imageAlt: "Артроскопия коленного сустава",
                title: "Артроскопия коленного сустава",
                subTitle: "Бесплатно по полису ОМС",
                description: "Мы вернем Вам радость движения!",
                descriptionWeight: 500,
                path: "#",
                colorTitleType: "black",
                colorSubTitleType: "green",
                colorDescriptionType: "black",
                bgBtnType: "orange"
            },
            {
                imageSrc: Img4,
                imageAlt: "Бесплатные первичные консультации",
                title: "Бесплатные первичные консультации",
                subTitle: "",
                description: "По проблемам бесплодия",
                descriptionWeight: 700,
                path: "#",
                colorTitleType: "orange",
                colorDescriptionType: "green",
                bgBtnType: "orange"
            },
            {
                imageSrc: Img5,
                imageAlt: "PRP-терапия",
                title: "PRP-терапия",
                subTitle: "",
                description: "Уменьшение боли",
                descriptionWeight: 700,
                path: "#",
                colorTitleType: "black",
                colorDescriptionType: "green",
                bgBtnType: "green"                                                
            },
            {
                imageSrc: Img6,
                imageAlt: "ДНК-анализ",
                title: "ДНК-анализ",
                subTitle: "",
                description: "С целью установления родства",
                descriptionWeight: 700,
                path: "#",
                colorTitleType: "white",
                colorDescriptionType: "black",
                bgBtnType: "orange"                                                
            },
            {
                imageSrc: Img7,
                imageAlt: "ЭКО",
                title: "ЭКО",
                subTitle: "",
                description: "Бесплатно по полису ОМС",
                descriptionWeight: 700,
                path: "#",
                colorTitleType: "orange",
                colorDescriptionType: "black",
                bgBtnType: "green"                               
            },
            {
                imageSrc: Img8,
                imageAlt: "Криоконсервация материала",
                title: "Криоконсервация материала",
                subTitle: "",
                description: "Самый лучший способ сохранить биоматериал",
                descriptionWeight: 700,
                path: "#",
                colorTitleType: "white",
                colorDescriptionType: "black",
                bgBtnType: "green"                                
            },
            {
                imageSrc: Img9,
                imageAlt: "Онлайн консультация",
                title: "Онлайн консультация",
                subTitle: "",
                description: "Как это работает?",
                descriptionWeight: 400,
                path: "#",
                colorTitleType: "orange",
                colorDescriptionType: "black",
                bgBtnType: "green"                                                
            }            
        ]
    }

    // dispatch(action){
    //     if(action.type === COLOR_SOCIAL_ICON){

    //     }
    // }
}

export type InitialStoreType = typeof store;