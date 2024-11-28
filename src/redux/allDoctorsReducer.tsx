import React from 'react';
import Img_desktop from "../assets/images/single-img/desctop/childrens.webp";
import Img_mobile from "../assets/images/single-img/mobile/children_faq.webp";
import Img_tablet from "../assets/images/single-img/tablet/childrens.webp";
import Gordeeva from "../assets/images/single-img/doctorsPage/preview/gordeeva.webp";
import Simanskaya from "../assets/images/single-img/doctorsPage/preview/simanskaya.webp";
import Volkova from "../assets/images/single-img/doctorsPage/preview/volkova.webp";
import Ladyagina from "../assets/images/single-img/doctorsPage/preview/ladyagina.webp";

import Serebryakova from "../assets/images/single-img/doctorsPage/preview/serebryakova.webp";
import Shabarshina from "../assets/images/single-img/doctorsPage/preview/shabarshina.webp";
import Lavrenuk from "../assets/images/single-img/doctorsPage/preview/lavrenyuk.webp";
import Salmina from "../assets/images/single-img/doctorsPage/preview/salmina.webp";
import Kogevnikova from "../assets/images/single-img/doctorsPage/preview/kozhevnikova.webp";
import Borisov from "../assets/images/single-img/doctorsPage/preview/borisov.webp";
import Shvedov from "../assets/images/single-img/doctorsPage/preview/shvedov.webp";
import Klemendeev from "../assets/images/single-img/doctorsPage/preview/klemendeev.webp";
import Predtechenskaya from "../assets/images/single-img/doctorsPage/preview/predtechenskaya.webp";
import Shanina from "../assets/images/single-img/doctorsPage/preview/shanina.webp";
import Zajnullova from "../assets/images/single-img/doctorsPage/preview/zajnullova.webp";
import Chernysh from "../assets/images/single-img/doctorsPage/preview/304.webp";
import Aslanova from "../assets/images/single-img/doctorsPage/preview/aslanova.webp";
import Sabirova from "../assets/images/single-img/doctorsPage/preview/sabirova.webp";
import Ilgachev from "../assets/images/single-img/doctorsPage/preview/ilgachev.webp";
import Malyankova from "../assets/images/single-img/doctorsPage/preview/malyankova.webp";
import Malanina from "../assets/images/single-img/doctorsPage/preview/malanina.webp";
import Yacenko from "../assets/images/single-img/doctorsPage/preview/yacenko.webp";
import Belij from "../assets/images/single-img/doctorsPage/preview/belyj.webp";
import Brygina from "../assets/images/single-img/doctorsPage/preview/brygina.webp";
import Konovalova from "../assets/images/single-img/doctorsPage/preview/konovalova.webp";
import Gordeev from "../assets/images/single-img/doctorsPage/preview/gordeev.webp";
import Stepanova from "../assets/images/single-img/doctorsPage/preview/stepanova.webp";
import Muhammetganov from "../assets/images/single-img/doctorsPage/preview/mukhametzhanov.webp";
import Onischenko from "../assets/images/single-img/doctorsPage/preview/onishchenko.webp";
import Kulagina from "../assets/images/single-img/doctorsPage/preview/kulagina.webp";


const initialState = {   
    pageTopPart: {
        pageName: "doctors",
        srcDesktop: Img_desktop,            
        srcMobile: Img_mobile,
        srcTablet: Img_tablet,
        title: "Наши врачи"       
    }, 

    // directions: [
    //     "Все направления",
    //     "Диагностика бесплодия",
    //     "Лечение бесплодия",
    //     "Гинекология",
    //     "Гинекологические операции",
    //     "Услуги для беременных",
    //     "Урология-андрология",
    //     "Урологические операции",
    //     "Травматология и ортопедия",
    //     "Травматолог-ортопед",
    //     "Артроскопия коленного сустава",  
    //     "Ультразвуковые исследования",
    //     "Ударно-волновая терапия",
    //     "Функциональная диагностика",
    //     "Генетические тесты",
    //     "Терапия",  
    //     "Эндокринология"    
    // ],
    // doctors2: [
    //     "Гордеева И. В.",
    //     "Волкова Т.Е.",
    //     "Ладягина Е.В.",
    //     "Сабирова Г.З.",
    //     "Серебрякова Т.А.",
    //     "Шабаршина М.С.",
    //     "Симанская С.Ю.",
    //     "Лавренюк С.А.",
    //     "Клемендеев А.П",
    //     "Салмина Н.В",
    //     "Кожевникова И.В.",
    //     "Асланова М.В.",
    //     "Ильгачев А.Н.",
    //     "Маланина Е.Н.",
    //     "Степанова А.В.",
    //     "Гордеев А.В.",
    //     "Белый Л.Е.",
    //     "Коновалова Н.В.",
    //     "Брыгина Н.А.",
    //     "Малянкова Л.Ю",        
    // ],
    doctors: [
        {
            fullName: "Гордеева Ирина Викторовна",
            post: "Главный врач клиники репродуктивного здоровья с лабораторией ЭКО ООО «Альянс Клиник»",
            workExperience: "с 2003 года",
            foto: Gordeeva,
            path: "/doctors/gordeeva",
            status: ["акушер-гинеколог", "репродуктолог"],
            branches: ["Сурова", "Бебеля"]
        },
        {
            fullName: "Симанская Светлана Юрьевна",
            post: "Заместитель главного врача по медицинской части, врач-терапевт",
            workExperience: "с 2005 года",
            foto: Simanskaya,
            path: "#",
            status: ["терапевт"],
            branches: ["Сурова", "Бебеля"]
        },
        {
            fullName: "Волкова Татьяна Евгеньевна",
            post: "Заведующий отделением ВРТ, врач акушер-гинеколог, репродуктолог",
            workExperience: "с 2003 года",
            foto: Volkova,
            path: "#",
            status: ["акушер-гинеколог", "репродуктолог", "врач ультразвуковой диагностики"],
            branches: ["Сурова"]
        },
        {
            fullName: "Ладягина Елена Викторовна",
            post: "Заведующий консультативно-диагностическим отделением, врач-акушер-гинеколог, репродуктолог",
            workExperience: "с 2004 года",
            foto: Ladyagina,
            path: "#",
            status: ["акушер-гинеколог", "репродуктолог", "врач ультразвуковой диагностики"],
            branches: ["Сурова"]
        },
        {
            fullName: "Серебрякова Татьяна Анатольевна",
            post: "Врач акушер-гинеколог",
            workExperience: "с 2004 года",
            foto: Serebryakova,
            path: "#",
            status: ["акушер-гинеколог"],
            branches: ["Сурова"]
        },
        {
            fullName: "Шабаршина Мария Сергеевна",
            post: "Врач ультразвуковой диагностики",
            workExperience: "с 2004 года",
            foto: Shabarshina,
            path: "#",
            status: ["акушер-гинеколог", "врач ультразвуковой диагностики"],
            branches: ["Сурова"]
        },
        {
            fullName: "Лавренюк Сергей Александрович",
            post: "Врач уролог-андролог, врач ультразвуковой диагностики",
            workExperience: "с 2004 года",
            foto: Lavrenuk,
            path: "#",
            status: ["уролог-андролог", "врач ультразвуковой диагностики"],
            branches: ["Сурова", "Бебеля"]
        },
        {
            fullName: "САЛМИНА НАТАЛЬЯ ВИКТОРОВНА",
            post: "Врач акушер-гинеколог",
            workExperience: "с 2004 года",
            foto: Salmina,
            path: "#",
            status: ["акушер-гинеколог"],
            branches: ["Сурова"]
        },
        {
            fullName: "КОЖЕВНИКОВА ИРИНА ВЛАДИМИРОВНА",
            post: "Врач акушер-гинеколог",
            workExperience: "с 2004 года",
            foto: Kogevnikova,
            path: "#",
            status: ["акушер-гинеколог"],
            branches: ["Сурова"]
        },
        {
            fullName: "БОРИСОВ НИКОЛАЙ ВИТАЛЬЕВИЧ",
            post: "Врач анестезиолог-реаниматолог",
            workExperience: "с 2004 года",
            foto: Borisov,
            path: "#",
            status: ["анестезиолог-реаниматолог"],
            branches: ["Сурова"]
        },
        {
            fullName: "ШВЕДОВ АЛЕКСАНДР СЕРГЕЕВИЧ",
            post: "Врач анестезиолог-реаниматолог",
            workExperience: "с 2004 года",
            foto: Shvedov,
            path: "#",
            status: ["анестезиолог-реаниматолог"],
            branches: ["Сурова"]
        },
        {
            fullName: "КЛЕМЕНДЕЕВ АНТОН ПЕТРОВИЧ",
            post: "Врач травматолог-ортопед",
            workExperience: "с 2004 года",
            foto: Klemendeev,
            path: "#",
            status: ["травматолог-ортопед"],
            branches: ["Сурова", "Бебеля"]
        },
        {
            fullName: "ПРЕДТЕЧЕНСКАЯ АЛЁНА ЕВГЕНЬЕВНА",
            post: "Старший эмбриолог",
            workExperience: "с 2004 года",
            foto: Predtechenskaya,
            path: "#",
            status: ["эмбриолог"],
            branches: ["Сурова"]
        },
        {
            fullName: "ШАНИНА СВЕТЛАНА КОНСТАНТИНОВНА",
            post: "Старший эмбриолог",
            workExperience: "с 2004 года",
            foto: Shanina,
            path: "#",
            status: ["эмбриолог"],
            branches: ["Сурова"]
        },
        {
            fullName: "ЗАЙНУЛЛОВА ГЕЛЬНАЗ РАМИЛЕВНА",
            post: "Эмбриолог",
            workExperience: "с 2004 года",
            foto: Zajnullova,
            path: "#",
            status: ["эмбриолог"],
            branches: ["Сурова"]
        },
        {
            fullName: "Черныш Ольга Михайловна",
            post: "Эмбриолог",
            workExperience: "с 2004 года",
            foto: Chernysh,
            path: "#",
            status: ["эмбриолог"],
            branches: ["Сурова"]
        },
        {
            fullName: "АСЛАНОВА МАРИНА ВЛАДИМИРОВНА",
            post: "Врач акушер-гинеколог, репродуктолог, врач ультразвуковой диагностики.",
            workExperience: "с 2004 года",
            foto: Aslanova,
            path: "#",
            status: ["акушер-гинеколог", "репродуктолог", "врач ультразвуковой диагностики"],
            branches: ["Рябикова", "Бебеля"]
        },
        {
            fullName: "САБИРОВА ГУЛИЯ ЗАВДЯТОВНА",
            post: "Врач-акушер-гинеколог, репродуктолог, врач ультразвуковой диагностики.",
            workExperience: "с 2004 года",
            foto: Sabirova,
            path: "#",
            status: ["акушер-гинеколог", "репродуктолог", "врач ультразвуковой диагностики"],
            branches: ["Сурова", "Бебеля"]
        },
        {
            fullName: "ИЛЬГАЧЕВ АЛЕКСЕЙ НИКОЛАЕВИЧ",
            post: "Врач ультразвуковой диагностики",
            workExperience: "с 2004 года",
            foto: Ilgachev,
            path: "#",
            status: ["врач ультразвуковой диагностики"],
            branches: ["Бебеля"]
        },
        {
            fullName: "МАЛЯНКОВА ЛАРИСА ЮРЬЕВНА",
            post: "Врач ультразвуковой диагностики",
            workExperience: "с 2004 года",
            foto: Malyankova,
            path: "#",
            status: ["врач ультразвуковой диагностики"],
            branches: ["Бебеля"]
        },
        {
            fullName: "Маланина Екатерина Николаевна",
            post: "Врач ультразвуковой диагностики",
            workExperience: "с 2004 года",
            foto: Malanina,
            path: "#",
            status: ["врач ультразвуковой диагностики"],
            branches: ["Бебеля"]
        },
        {
            fullName: "БЕЛЫЙ ЛЕВ ЕВГЕНЬЕВИЧ",
            post: "Врач уролог-андролог",
            workExperience: "с 2004 года",
            foto: Belij,
            path: "#",
            status: ["уролог-андролог"],
            branches: ["Бебеля"]
        },
        {
            fullName: "БРЫГИНА НАТАЛЬЯ АЛЕКСЕЕВНА",
            post: "Врач эндокринолог",
            workExperience: "с 2004 года",
            foto: Brygina,
            path: "#",
            status: ["эндокринолог"],
            branches: ["Бебеля"]
        },
        {
            fullName: "КОНОВАЛОВА НАТАЛИЯ ВЛАДИМИРОВНА",
            post: "Врач физиотерапевт",
            workExperience: "с 2004 года",
            foto: Konovalova,
            path: "#",
            status: ["физиотерапевт"],
            branches: ["Бебеля"]
        },
        {
            fullName: "ГОРДЕЕВ АЛЕКСЕЙ ВАЛЕНТИНОВИЧ",
            post: "Врач травматолог-ортопед",
            workExperience: "с 2004 года",
            foto: Gordeev,
            path: "#",
            status: ["травматолог-ортопед"],
            branches: ["Сурова", "Бебеля"]
        },
        {
            fullName: "СТЕПАНОВА АНАСТАСИЯ ВЛАДИМИРОВНА",
            post: "Врач онколог, маммолог",
            workExperience: "с 2004 года",
            foto: Stepanova,
            path: "#",
            status: ["онколог", "маммолог"],
            branches: ["Бебеля"]
        },
        {
            fullName: "МУХАММЕТЖАНОВ РАДИК КАМИЛЬЕВИЧ",
            post: "Врач травматолог-ортопед",
            workExperience: "с 2004 года",
            foto: Muhammetganov,
            path: "#",
            status: ["травматолог-ортопед"],
            branches: ["Сурова"]
        },
        {
            fullName: "Онищенко Светлана Любомировна",
            post: "Врач уролог-андролог, врач ультразвуковой диагностики",
            workExperience: "с 2004 года",
            foto: Onischenko,
            path: "#",
            status: ["уролог-андролог", "врач ультразвуковой диагностики"],
            branches: ["Бебеля"]
        },
        {
            fullName: "Кулагина Ирина Олеговна",
            post: "Врач эндокринолог",
            workExperience: "с 2004 года",
            foto: Kulagina,
            path: "#",
            status: ["эндокринолог"],
            branches: ["Сурова"]
        }
    ],
    step: 8    
}

// export type avatarsType = {
//     "Волкова Татьяна Евгеньевна": string,
//     "Серебрякова Татьяна Анатольевна": string,
//     "Симанская Светлана Юрьевна": string
// } 

export type initialStateType = typeof initialState;

export const allDoctorsReducer = (state = initialState, action: any):initialStateType => {

    // switch(action.type) {
    //     case REMOVE_NEW_QUESTION:
    //         console.log("state.newQuestions", state.newQuestions);
    //         return {
    //             ...state,
    //             newQuestions: [...state.newQuestions.filter(q => q.id !== action.id)]
    //         }
    //     default: 
    //         return state; 
    // }
    return state;
    
};

