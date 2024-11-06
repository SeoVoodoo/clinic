import React from 'react';
import Img1 from "../assets/images/home_slider/pgt.webp";
import Img2 from "../assets/images/home_slider/unikalnaya-specializirovannaya-sreda.webp";
import Img3 from "../assets/images/home_slider/artroskopiya-kolennogo-sustava.webp";
import Img4 from "../assets/images/home_slider/besplatnye-pervichnye-konsultacii.webp";
import Img5 from "../assets/images/home_slider/prp-terapiya.webp";
import Img6 from "../assets/images/home_slider/dnk-analiz.webp";
import Img7 from "../assets/images/home_slider/eko.webp";
import Img8 from "../assets/images/home_slider/kriokonservaciya-materiala.webp";
import Img9 from "../assets/images/home_slider/onlajn-konsultaciya.webp";

import Img1_tablet from "../assets/images/home_slider/tablet/pgt.webp";
import Img2_tablet from "../assets/images/home_slider/tablet/unikalnaya-specializirovannaya-sreda.webp";
import Img3_tablet from "../assets/images/home_slider/tablet/artroskopiya-kolennogo-sustava.webp";
import Img4_tablet from "../assets/images/home_slider/tablet/besplatnye-pervichnye-konsultacii.webp";
import Img5_tablet from "../assets/images/home_slider/tablet/prp-terapiya.webp";
import Img6_tablet from "../assets/images/home_slider/tablet/dnk-analiz.webp";
import Img7_tablet from "../assets/images/home_slider/tablet/eko.webp";
import Img8_tablet from "../assets/images/home_slider/tablet/kriokonservaciya-materiala.webp";
import Img9_tablet from "../assets/images/home_slider/tablet/onlajn-konsultaciya.webp";

import Img1_mobile from "../assets/images/home_slider/mobile/pgt.webp";
import Img2_mobile from "../assets/images/home_slider/mobile/unikalnaya-specializirovannaya-sreda.webp";
import Img3_mobile from "../assets/images/home_slider/mobile/artroskopiya-kolennogo-sustava.webp";
import Img4_mobile from "../assets/images/home_slider/mobile/besplatnye-pervichnye-konsultacii.webp";
import Img5_mobile from "../assets/images/home_slider/mobile/prp-terapiya.webp";
import Img6_mobile from "../assets/images/home_slider/mobile/dnk-analiz.webp";
import Img7_mobile from "../assets/images/home_slider/mobile/eko.webp";
import Img8_mobile from "../assets/images/home_slider/mobile/kriokonservaciya-materiala.webp";
import Img9_mobile from "../assets/images/home_slider/mobile/onlajn-konsultaciya.webp";

import Gordeeva from "../assets/images/single-img/homePage/doctors/preview/doctor_1.webp";
import Simanskaya from "../assets/images/single-img/homePage/doctors/preview/doctor_2.webp";
import Volkova from "../assets/images/single-img/homePage/doctors/preview/doctor_3.webp";
import Ladyagina from "../assets/images/single-img/homePage/doctors/preview/doctor_4.webp";
import Promo1 from "../assets/images/single-img/homePage/promotions/stock_1.webp";
import Promo2 from "../assets/images/single-img/homePage/promotions/stock_2.webp";
import Promo3 from "../assets/images/single-img/homePage/promotions/stock_3.webp";
import EllipseOrange from "../assets/images/single-img/homePage/promotions/ellipse-orange.webp";
import EllipseGreen from "../assets/images/single-img/homePage/promotions/ellipse-green.webp";

import Img_news_1 from "../assets/images/single-img/news/preview/news-1.webp";
import Img_news_2 from "../assets/images/single-img/news/preview/news-2.webp";
import Img_news_3 from "../assets/images/single-img/news/preview/news-3.webp";
import Img_news_4 from "../assets/images/single-img/news/preview/news-4.webp";
import Img_info_1 from "../assets/images/single-img/info/preview/info-1.webp";
import Img_info_2 from "../assets/images/single-img/info/preview/info-2.webp";
import Img_info_3 from "../assets/images/single-img/info/preview/info-3.webp";
import Img_info_4 from "../assets/images/single-img/info/preview/info-4.webp";

import Img_patner_1 from "../assets/images/single-img/homePage/partners/partners_1.webp";
import Img_patner_2 from "../assets/images/single-img/homePage/partners/partners_2.webp";
import Img_patner_3 from "../assets/images/single-img/homePage/partners/partners_3.webp";
import Img_patner_4 from "../assets/images/single-img/homePage/partners/partners_4.webp";
import Img_patner_5 from "../assets/images/single-img/homePage/partners/partners_5.webp";
import Img_patner_6 from "../assets/images/single-img/homePage/partners/partners_6.webp";
import Img_patner_7 from "../assets/images/single-img/homePage/partners/partners_7.webp";
import Img_patner_8 from "../assets/images/single-img/homePage/partners/partners_8.webp";


const UPDATE_LAST_REVIEW = "UPDATE_LAST_REVIEW";

const initialState = {    
    mainSlider: [
        {
            srcDesktop: Img1,
            srcTablet: Img1_tablet,
            srcMobile: Img1_mobile,
            imageAlt: "ПГТ",
            title: "ПГТ",
            subTitle: "Преимплантанционный генетический тест",                
            path: "#",
            colorTitleType: "orange",
            colorSubTitleType: "green",
            bgBtnType: "orange"
        },
        {
            srcDesktop: Img2,
            srcTablet: Img2_tablet,
            srcMobile: Img2_mobile,
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
            srcDesktop: Img3,
            srcTablet: Img3_tablet,
            srcMobile: Img3_mobile,
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
            srcDesktop: Img4,
            srcTablet: Img4_tablet,
            srcMobile: Img4_mobile,
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
            srcDesktop: Img5,
            srcTablet: Img5_tablet,
            srcMobile: Img5_mobile,
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
            srcDesktop: Img6,
            srcTablet: Img6_tablet,
            srcMobile: Img6_mobile,
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
            srcDesktop: Img7,
            srcTablet: Img7_tablet,
            srcMobile: Img7_mobile,
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
            srcDesktop: Img8,
            srcTablet: Img8_tablet,
            srcMobile: Img8_mobile,
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
            srcDesktop: Img9,
            srcTablet: Img9_tablet,
            srcMobile: Img9_mobile,
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
    ],
    advantages: [
        {
            bgPosition: "-497px -90px",
            startWord: "12 лет",
            endWord: "на рынке ВРТ"
        },
        {
            bgPosition: "-497px -180px",
            startWord: "Более 4000",
            endWord: "программ ЭКО",
        },
        {
            bgPosition: "-497px -270px",
            startWord: "Эффективность",
            endWord: "программ ЭКО 47%"
        },
        {
            bgPosition: "-497px 0px",
            startWord: "Более 50 тысяч",
            endWord: "довольных клиентов"
        }
    ],
    services: [
        [
            {
                serviceName: "Диагностика бесплодия",
                path: "infertility-diagnosis",
                bgPosition: "0px -410px"
            },
            {
                serviceName: "Услуги для беременных",
                path: "pregnant-women-services",
                bgPosition: "-60px -410px"
            },
            {
                serviceName: "Артроскопия коленного сустава",
                path: "knee-joint-arthroscopy",
                bgPosition: "-120px -410px"
            },
            {
                serviceName: "Генетические тесты",
                path: "genetic-tests",
                bgPosition: "-180px -410px"
            }
        ],
        [
            {
                serviceName: "Лечение бесплодия",
                path: "infertility-treatment",
                bgPosition: "-240px -410px"
            },
            {
                serviceName: "Урология-андрология",
                path: "urology-andrology",
                bgPosition: "-300px -410px"
            },
            {
                serviceName: "Ультразвуковые исследования",
                path: "ultrasound-scan",
                bgPosition: "-360px -410px"
            },
            {
                serviceName: "ДНК-тесты на родство",
                path: "kinship-dna-tests",
                bgPosition: "-420px -410px"
            }
        ],
        [
            {
                serviceName: "Гинекология",
                path: "gynecology",
                bgPosition: "-480px -410px"
            },
            {
                serviceName: "Урологические операции",
                path: "urological-operations",
                bgPosition: "-198px -94px"
            },
            {
                serviceName: "Ударно-волновая терапия",
                path: "shock-wave-therapy",
                bgPosition: "-198px -154px"
            },
            {
                serviceName: "Эндокринология",
                path: "endocrinology",
                bgPosition: "-160px -329px"
            }
        ],
        [
            {
                serviceName: "Гинекологические операции",
                path: "gynecological-operations",
                bgPosition: "-220px -329px"
            },
            {
                serviceName: "Травматология и ортопедия",
                path: "traumatology-orthopedics",
                bgPosition: "-280px -329px"
            },
            {
                serviceName: "Функциональная диагностика",
                path: "functional-diagnostics",
                bgPosition: "-340px -329px"
            },
            {
                serviceName: "Терапия",
                path: "therapy",
                bgPosition: "-400px -329px"
            }
        ]
    ],
    doctors: [
        {
            fullName: "Гордеева Ирина Викторовна",
            post: "Главный врач клиники репродуктивного здоровья с лабораторией ЭКО ООО «Альянс Клиник»",
            workExperience: "с 2003 года",
            foto: Gordeeva,
            path: "/doctors/gordeeva"
        },
        {
            fullName: "Симанская Светлана Юрьевна",
            post: "Заместитель главного врача по медицинской части, врач-терапевт",
            workExperience: "с 2005 года",
            foto: Simanskaya,
            path: "#"
        },
        {
            fullName: "Волкова Татьяна Евгеньевна",
            post: "Заведующий отделением ВРТ, врач-акушер-гинеколог, репродуктолог",
            workExperience: "с 2003 года",
            foto: Volkova,
            path: "#"
        },
        {
            fullName: "Ладягина Елена Викторовна",
            post: "Заведующий консультативно-диагностическим отделением, врач-акушер-гинеколог, репродуктолог",
            workExperience: "с 2004 года",
            foto: Ladyagina,
            path: "#"
        }
    ],
    promotions: [
        {
            id: 1,
            endDate: "акция действует до 15.03",
            title: "Комплексное обследование",
            subTitle: "«Женское здоровье»",
            sale: "СКИДКА 10%",
            note: "",
            path: "clinic",
            frontImg: Promo1,
            backImg: EllipseOrange

        },
        {   
            id: 2,
            endDate: "акция действует до 15.03",
            title: "По воскресеньям на Сурова",
            subTitle: "на все анализы",
            sale: "СКИДКА 10%",
            note: "",
            path: "clinic",
            frontImg: Promo2,
            backImg: EllipseGreen
        },
        {   
            id: 3,
            endDate: "акция действует до 15.03",
            title: "БЕСПЛАТНЫЕ",
            subTitle: "консультации по вопросам бесплодия – на Сурова",
            sale: "",
            note: "(по вторникам, по предварительной записи)",
            path: "clinic",
            frontImg: Promo3,
            backImg: EllipseOrange
        }
    ],
    lastNews: [
        {
            id: 1,
            img: Img_news_1,
            title: 'ВАЖНО! Информация для пациентов!',
            data: '20.02.2023',
            prev: 'Уважаемые, пациенты. Доводим до вашего сведения, что с 1 марта изменился режим работы клиники по адресу пр-т врача Сурова,4. Теперь мы работаем для вас ежедневно без выходных.',
            path: 'news_1' 
        },
        {
            id: 2,
            img: Img_news_2,
            title: 'Планируете криоперенос? Тогда это предложение для вас!',
            data: '16.11.2023',
            prev: 'Уважаемые пациенты! В связи с повышением цен с 1 января 2024 года, на ряд услуг ВРТ, ограниченным количеством данных услуг в рамках ОМС ...',
            path: 'news_2' 
        },
        {
            id: 3,
            img: Img_news_3,
            title: 'С 2024 года артроскопию коленного сустава наши пациенты смогут пройти бесплатно, по полису ОМС',
            data: '22.01.2024',
            prev: 'Друзья, мы рады сообщить отличную новость! С 2024 года артроскопию коленного сустава наши пациенты ...',
            path: 'news_3'
        },
        {
            id: 4,
            img: Img_news_4,
            title: 'Тематическая неделя по сохранению репродуктивного здоровья в рамках НП "Демография"',
            data: '06.02.2024',
            prev: 'В рамках национального проекта «Демография» в Ульяновской области с 09 февраля проходит тематическая неделя по сохранению репродуктивного здоровья населения.',
            path: 'news_4'
        }
    ],
    lastReview: {
        date: '11.09.2024 13:40',
        patient: '7 960 37XXXXX',
        history: 'Я обратилась в "Альянс клиник" с проблемой бесплодия. Даже и не знала, что творится в моём организме. Думала, что у меня всё в порядке со здоровьем. Пройдя многочисленные обследования, я поняла, что есть проблемы (и не одна). Здесь мне назначали лечение лекарствами, делали уколы, ставили систему и сделали уже четыре операции.',
        liked: 'Вежливое обслуживание. Девушки в приёмной очень доброжелательные. Когда надо - всё подскажут и помогут при необходимости. Мне нравится ходить на сдачу анализов к лаборанту Наталье. Она очень приветливая. Безболезненно берёт кровь и делает уколы. С ней приятно общаться. Может дать полезный совет. На операции я хожу почти без страха. Знаю, что работают отличные специалисты. После операции появляется желание пойти и заняться своими делами, забывая о том, что надо отдохнуть. Болезненных ощущений особо не чувствуешь.',
        notLiked: 'Всё понравилось.',
        сlinicAdministrator: 'Добрый день, уважаемый пациент. Признательны за ваш выбор и оказанное доверие. Рады, что вы внимательно относитесь к своему здоровью. Желаем, чтобы дальше всё складывалось замечательно!'
    },
    usefulInfo: [
        {
            id: 1,
            img: Img_info_1,
            title: 'Нарушение овуляции',
            path: 'article_1'
        },
        {
            id: 2,
            img: Img_info_2,
            title: 'Уникальная, специализированная среда EmbryoGlue для переноса эмбриона',
            path: 'article_2'
        },
        {
            id: 3,
            img: Img_info_3,
            title: 'TORCH - комплекс',
            path: 'article_3'
        },
        {
            id: 4,
            img: Img_info_4,
            title: 'Внимание, коронавирус!',
            path: 'article_4'
        }
    ],
    partners: [
        {
            id: 1,
            width: "234px",
            height: "57px",
            img: Img_patner_1
            // pos: "0px -272px"
        },
        {
            id: 2,
            width: "231px",
            height: "53px",
            img: Img_patner_2
            // pos: "-266px -155px"
        },
        {
            id: 3,
            width: "200px",
            height: "50px",
            img: Img_patner_3
            //pos: "-251px -218px"
        },
        {
            id: 4,
            width: "185px",
            height: "53px",
            img: Img_patner_4
            //pos: "-234px -272px"
        },
        {
            id: 5,
            width: "251px",
            height: "54px",
            img: Img_patner_5
            //pos: "0px -218px"
        },
        {
            id: 6,
            width: "231px",
            height: "80px",
            img: Img_patner_6
            //pos: "-266px 0px"
        },
        {
            id: 7,
            width: "212px",
            height: "75px",
            img: Img_patner_7
            //pos: "-266px -80px"
        },
        {
            id: 8,
            width: "160px",
            height: "81px",
            img: Img_patner_8
            //pos: " 0px -329px"
        },
    ]    
}

export type initialStateType = typeof initialState;

export const homeReducer = (state = initialState, action:any):initialStateType => {

    switch(action.type) {
        case UPDATE_LAST_REVIEW:
            return {
                ...state,
                lastReview: {
                    ...state.lastReview,
                    date: action.newDate,
                    patient: action.newPatient,
                    history: action.newHistory,
                    liked: action.newLiked,
                    notLiked: action.newNotLiked,
                    сlinicAdministrator: action.newAnswer
                }
            }
        default:
            return state;
    }
    
};

// interface DataLastReview [
//     date:string,
//     patient:string,
//     history?:string 
//     plus?:string
//     minus?:string
//     answer?:string
// ]

export const updateLastReviewActionCreater = (...data:string[]) => {
    const [date, patient, history, plus, minus, answer] = data;
    return ({
        type: UPDATE_LAST_REVIEW, 
        newDate: date,
        newPatient: patient,
        newHistory: history,
        newLiked: plus,
        notLiked: minus,
        newAnswer: answer
    })
}