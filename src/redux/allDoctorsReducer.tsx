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
import Chernysh from "../assets/images/single-img/doctorsPage/preview/chernysh.webp";
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

    specializations: [
        "Все врачи",
        "акушер-гинеколог",
        "анестезиолог-реаниматолог",
        "врач ультразвуковой диагностики",
        "маммолог",
        "онколог",
        "репродуктолог",
        "терапевт",
        "травматолог-ортопед",
        "уролог-андролог",
        "физиотерапевт",
        "эмбриолог",        
        "эндокринолог"
    ],
    branches: [
        "Все филиалы",
        "пр-т Врача Сурова, 4",
        "ул. Бебеля, 1А",
        "ул. Рябикова, 96"           
    ],
    doctors: [
        {
            fullName: "Гордеева Ирина Викторовна",
            post: "Главный врач клиники репродуктивного здоровья с лабораторией ЭКО ООО «Альянс Клиник»",
            workExperience: "с 2003 года",
            foto: Gordeeva,
            path: "/doctors/gordeeva",
            status: ["акушер-гинеколог", "репродуктолог"],
            branches: ["пр-т Врача Сурова, 4", "ул. Бебеля, 1А"]
        },
        {
            fullName: "Симанская Светлана Юрьевна",
            post: "Заместитель главного врача по медицинской части, врач-терапевт",
            workExperience: "с 2005 года",
            foto: Simanskaya,
            path: "#",
            status: ["терапевт"],
            branches: ["пр-т Врача Сурова, 4", "ул. Бебеля, 1А"]
        },
        {
            fullName: "Волкова Татьяна Евгеньевна",
            post: "Заведующий отделением ВРТ, врач акушер-гинеколог, репродуктолог",
            workExperience: "с 2003 года",
            foto: Volkova,
            path: "#",
            status: ["акушер-гинеколог", "репродуктолог", "врач ультразвуковой диагностики"],
            branches: ["пр-т Врача Сурова, 4"]
        },
        {
            fullName: "Ладягина Елена Викторовна",
            post: "Заведующий консультативно-диагностическим отделением, врач-акушер-гинеколог, репродуктолог",
            workExperience: "с 2004 года",
            foto: Ladyagina,
            path: "#",
            status: ["акушер-гинеколог", "репродуктолог", "врач ультразвуковой диагностики"],
            branches: ["пр-т Врача Сурова, 4"]
        },
        {
            fullName: "Серебрякова Татьяна Анатольевна",
            post: "Врач акушер-гинеколог",
            workExperience: "с 2004 года",
            foto: Serebryakova,
            path: "#",
            status: ["акушер-гинеколог"],
            branches: ["пр-т Врача Сурова, 4"]
        },
        {
            fullName: "Шабаршина Мария Сергеевна",
            post: "Врач ультразвуковой диагностики",
            workExperience: "с 2004 года",
            foto: Shabarshina,
            path: "#",
            status: ["врач ультразвуковой диагностики"],
            branches: ["пр-т Врача Сурова, 4"]
        },
        {
            fullName: "Лавренюк Сергей Александрович",
            post: "Врач уролог-андролог, врач ультразвуковой диагностики",
            workExperience: "с 2004 года",
            foto: Lavrenuk,
            path: "#",
            status: ["уролог-андролог", "врач ультразвуковой диагностики"],
            branches: ["пр-т Врача Сурова, 4", "ул. Бебеля, 1А"]
        },
        {
            fullName: "Салмина Наталья Викторовна",
            post: "Врач акушер-гинеколог",
            workExperience: "с 2004 года",
            foto: Salmina,
            path: "#",
            status: ["акушер-гинеколог"],
            branches: ["пр-т Врача Сурова, 4"]
        },
        {
            fullName: "Кожевникова Ирина Владимировна",
            post: "Врач акушер-гинеколог",
            workExperience: "с 2004 года",
            foto: Kogevnikova,
            path: "#",
            status: ["акушер-гинеколог"],
            branches: ["пр-т Врача Сурова, 4"]
        },
        {
            fullName: "Борисов Николай Витальевич",
            post: "Врач анестезиолог-реаниматолог",
            workExperience: "с 2004 года",
            foto: Borisov,
            path: "#",
            status: ["анестезиолог-реаниматолог"],
            branches: ["пр-т Врача Сурова, 4"]
        },
        {
            fullName: "Шведов Александр Сергеевич",
            post: "Врач анестезиолог-реаниматолог",
            workExperience: "с 2004 года",
            foto: Shvedov,
            path: "#",
            status: ["анестезиолог-реаниматолог"],
            branches: ["пр-т Врача Сурова, 4"]
        },
        {
            fullName: "Клемендеев Антон Петрович",
            post: "Врач травматолог-ортопед",
            workExperience: "с 2004 года",
            foto: Klemendeev,
            path: "#",
            status: ["травматолог-ортопед"],
            branches: ["пр-т Врача Сурова, 4", "ул. Бебеля, 1А"]
        },
        {
            fullName: "Предтеченская Алена Евгеньевна",
            post: "Старший эмбриолог",
            workExperience: "с 2004 года",
            foto: Predtechenskaya,
            path: "#",
            status: ["эмбриолог"],
            branches: ["пр-т Врача Сурова, 4"]
        },
        {
            fullName: "Шанина Светлана Константиновна",
            post: "Старший эмбриолог",
            workExperience: "с 2004 года",
            foto: Shanina,
            path: "#",
            status: ["эмбриолог"],
            branches: ["пр-т Врача Сурова, 4"]
        },
        {
            fullName: "Зайнуллова Гельназ Рамилевна",
            post: "Эмбриолог",
            workExperience: "с 2004 года",
            foto: Zajnullova,
            path: "#",
            status: ["эмбриолог"],
            branches: ["пр-т Врача Сурова, 4"]
        },
        {
            fullName: "Черныш Ольга Михайловна",
            post: "Эмбриолог",
            workExperience: "с 2004 года",
            foto: Chernysh,
            path: "#",
            status: ["эмбриолог"],
            branches: ["пр-т Врача Сурова, 4"]
        },
        {
            fullName: "Асланова Марина Владимировна",
            post: "Врач акушер-гинеколог, репродуктолог, врач ультразвуковой диагностики.",
            workExperience: "с 2004 года",
            foto: Aslanova,
            path: "#",
            status: ["акушер-гинеколог", "репродуктолог", "врач ультразвуковой диагностики"],
            branches: ["ул. Рябикова, 96", "ул. Бебеля, 1А"]
        },
        {
            fullName: "САБИРОВА ГУЛИЯ ЗАВДЯТОВНА",
            post: "Врач акушер-гинеколог, репродуктолог, врач ультразвуковой диагностики.",
            workExperience: "с 2004 года",
            foto: Sabirova,
            path: "#",
            status: ["акушер-гинеколог", "репродуктолог", "врач ультразвуковой диагностики"],
            branches: ["пр-т Врача Сурова, 4", "ул. Бебеля, 1А"]
        },
        {
            fullName: "ИЛЬГАЧЕВ АЛЕКСЕЙ НИКОЛАЕВИЧ",
            post: "Врач ультразвуковой диагностики",
            workExperience: "с 2004 года",
            foto: Ilgachev,
            path: "#",
            status: ["врач ультразвуковой диагностики"],
            branches: ["ул. Бебеля, 1А"]
        },
        {
            fullName: "МАЛЯНКОВА ЛАРИСА ЮРЬЕВНА",
            post: "Врач ультразвуковой диагностики",
            workExperience: "с 2004 года",
            foto: Malyankova,
            path: "#",
            status: ["врач ультразвуковой диагностики"],
            branches: ["ул. Бебеля, 1А"]
        },
        {
            fullName: "Маланина Екатерина Николаевна",
            post: "Врач ультразвуковой диагностики",
            workExperience: "с 2004 года",
            foto: Malanina,
            path: "#",
            status: ["врач ультразвуковой диагностики"],
            branches: ["ул. Бебеля, 1А"]
        },
        {
            fullName: "БЕЛЫЙ ЛЕВ ЕВГЕНЬЕВИЧ",
            post: "Врач уролог-андролог",
            workExperience: "с 2004 года",
            foto: Belij,
            path: "#",
            status: ["уролог-андролог"],
            branches: ["ул. Бебеля, 1А"]
        },
        {
            fullName: "БРЫГИНА НАТАЛЬЯ АЛЕКСЕЕВНА",
            post: "Врач эндокринолог",
            workExperience: "с 2004 года",
            foto: Brygina,
            path: "#",
            status: ["эндокринолог"],
            branches: ["ул. Бебеля, 1А"]
        },
        {
            fullName: "КОНОВАЛОВА НАТАЛИЯ ВЛАДИМИРОВНА",
            post: "Врач физиотерапевт",
            workExperience: "с 2004 года",
            foto: Konovalova,
            path: "#",
            status: ["физиотерапевт"],
            branches: ["ул. Бебеля, 1А"]
        },
        {
            fullName: "ГОРДЕЕВ АЛЕКСЕЙ ВАЛЕНТИНОВИЧ",
            post: "Врач травматолог-ортопед",
            workExperience: "с 2004 года",
            foto: Gordeev,
            path: "#",
            status: ["травматолог-ортопед"],
            branches: ["пр-т Врача Сурова, 4", "ул. Бебеля, 1А"]
        },
        {
            fullName: "СТЕПАНОВА АНАСТАСИЯ ВЛАДИМИРОВНА",
            post: "Врач онколог, маммолог",
            workExperience: "с 2004 года",
            foto: Stepanova,
            path: "#",
            status: ["онколог", "маммолог"],
            branches: ["ул. Бебеля, 1А"]
        },
        {
            fullName: "МУХАММЕТЖАНОВ РАДИК КАМИЛЬЕВИЧ",
            post: "Врач травматолог-ортопед",
            workExperience: "с 2004 года",
            foto: Muhammetganov,
            path: "#",
            status: ["травматолог-ортопед"],
            branches: ["пр-т Врача Сурова, 4"]
        },
        {
            fullName: "Онищенко Светлана Любомировна",
            post: "Врач уролог-андролог, врач ультразвуковой диагностики",
            workExperience: "с 2004 года",
            foto: Onischenko,
            path: "#",
            status: ["уролог-андролог", "врач ультразвуковой диагностики"],
            branches: ["ул. Бебеля, 1А"]
        },
        {
            fullName: "Кулагина Ирина Олеговна",
            post: "Врач эндокринолог",
            workExperience: "с 2004 года",
            foto: Kulagina,
            path: "#",
            status: ["эндокринолог"],
            branches: ["пр-т Врача Сурова, 4"]
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

