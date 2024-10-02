import React from 'react';

const initialState = {    
    calendar: {
        mapper: {
            gordeeva_1: {
                doctor: "Гордеева И. В.",
                description: "Главный врач, акушер-гинеколог, репродуктолог"
            },
            gordeeva_2: {
                doctor: "Гордеева И. В.",
                description: "Выдача заключений по выпискам на ЭКО по ОМС"
            },
            volkova: {
                doctor: "Волкова Т.Е.",
                description: "Акушер-гинеколог, репродуктолог"
            },
            ladyagina: {
                doctor: "Ладягина Е.В.",
                description: "Акушер-гинеколог, репродуктолог"
            },
            sabirova: {
                doctor: "Сабирова Г.З.",
                description: "Акушер-гинеколог"
            },
            serebryakova: {
                doctor: "Серебрякова Т.А.",
                description: "Акушер-гинеколог"
            },
            shabarshina: {
                doctor: "Шабаршина М.С.",
                description: "Врач УЗИ"
            },
            simanskaya: {
                doctor: "Симанская С.Ю.",
                description: "Терапевт"
            },
            lavrenuk: {
                doctor: "Лавренюк С.А.",
                description: "Уролог"
            },
            klemendeev: {
                doctor: "Клемендеев А.П",
                description: "Травматолог"
            },
            salmina: {
                doctor: "Салмина Н.В",
                description: "гистероскопия/гистерорезектоскопия"
            },
            kogevnikova: {
                doctor: "Кожевникова И.В.",
                description: "гистероскопия/гистерорезектоскопия"
            },
            manipulation: {
                doctor: "Манипуляционная",
                description: "спермограммы"
            },
            procedure: {
                doctor: "Процедурный",
                description: "забор материала"
            }    
        },
        days: [
            ["17.03.2025", "18.03.2025", "19.03.2025", "20.03.2025", "21.03.2025", "22.03.2025", "23.03.2025"],
            ["24.03.2025", "25.03.2025", "26.03.2025", "27.03.2025", "28.03.2025", "29.03.2025", "30.03.2025"],
            ["31.03.2025", "01.04.2025", "02.04.2025", "03.04.2025", "04.04.2025", "05.04.2025", "06.04.2025"],
            ["07.04.2025", "08.04.2025", "09.04.2025", "10.04.2025", "11.04.2025", "12.04.2025", "13.04.2025"],
            ["14.04.2025", "15.04.2025", "16.04.2025", "17.04.2025", "18.04.2025", "19.04.2025", "20.04.2025"]		
        ],
        
        surova: [
                    { 
                        id: "gordeeva_1", 
                        Monday: 'прием на Бебеля,1А', 
                        Tuesday: "08:40 - 11:20",
                        Wednesday: "",
                        Thursday: "08:40 - 11:20",
                        Friday: 'прием на Бебеля,1А', 
                        Saturday: "",
                        Sunday: ""                        
                    },
                    { 
                        id: "gordeeva_2", 
                        Monday: "", 
                        Tuesday: "14:40 - 16:00",
                        Wednesday: "",
                        Thursday: "", 
                        Friday: "",
                        Saturday: "",
                        Sunday: ""                      
                    },    
                    { 
                        id: "volkova", 
                        Monday: "08:00 - 19:00",                        
                        Tuesday: "08:00 - 19:00",
                        Wednesday: "",
                        Thursday: "",
                        Friday: "08:00 - 19:00", 
                        Saturday: "08:00 - 17:00",
                        Sunday: ""                         
                    },
                    { 
                        id: "ladyagina", 
                        Monday: 'прием на Бебеля,1А',                        
                        Tuesday: '08:40 - 11:20',
                        Wednesday: "",
                        Thursday: "08:40 - 11:20",
                        Friday: 'прием на Бебеля,1А', 
                        Saturday: "",
                        Sunday: ""                         
                    },
                    { 
                        id: "kogevnikova", 
                        Monday: '15:00 - 18:00',
                        Tuesday: "Отпуск",
                        colspan: 6,                                  
                                                
                    },

            
                ],
        //bebelya: [],
    }
}

export type timeTableMapper = 
    "gordeeva_1" | 
    "gordeeva_2" | 
    "volkova" |
    "ladyagina" |
    "sabirova" |
    "serebryakova" |
    "shabarshina" |
    "simanskaya" |
    "lavrenuk" |
    "klemendeev" |
    "salmina" |
    "kogevnikova" |
    "manipulation" |
    "procedure";

export type initialStateType = typeof initialState;

export const timeTableReducer = (state = initialState, action: any):initialStateType => {
    return state;
};
