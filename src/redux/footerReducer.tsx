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
        servicesLinks: [
            [
                {   
                    id: "infertility-diagnosis",
                    title: "Диагностика бесплодия",
                    path: "infertility-diagnosis",
                    level: 0 
                },
                {   
                    id: "assessment-of-ovarian-reserve",
                    title: "Оценка овариального резерва яичников",
                    path: "assessment-of-ovarian-reserve",
                    level: 1  
                },
                {   
                    id: "tubal-patency-assessment",
                    title: "Оценка проходимости маточных труб",
                    path: "tubal-patency-assessment",
                    level: 1  
                },
                {   
                    id: "ultrasound-of-the-pelvic-organs-in-women",
                    title: "УЗИ органов малого таза у женщин",
                    path: "ultrasound-of-the-pelvic-organs-in-women",
                    level: 1  
                },
                {   
                    id: "folliculometry",
                    title: "Фолликулометрия",
                    path: "folliculometry",
                    level: 1  
                },
                {   
                    id: "ultrasound-of-the-thyroid-gland",
                    title: "УЗИ щитовидной железы",
                    path: "ultrasound-of-the-thyroid-gland",
                    level: 1  
                },
                {   
                    id: "ultrasound-of-the-mammary-glands",
                    title: "УЗИ молочных желез",
                    path: "ultrasound-of-the-mammary-glands",
                    level: 1  
                },
                {   
                    id: "ultrasound-of-the-scrotum-organs",
                    title: "УЗИ органов мошонки",
                    path: "ultrasound-of-the-scrotum-organs",
                    level: 1  
                },
                {   
                    id: "spermogram-of-the-pelvis-in-women",
                    title: "Спермограмма (базовая и расширенная) малого таза у женщин",
                    path: "spermogram-of-the-pelvis-in-women",
                    level: 1  
                },
                {   
                    id: "kruger-morphology",
                    title: "Морфология по Крюгеру (оценка внешнего строения сперматозоидов)",
                    path: "kruger-morphology",
                    level: 1  
                },
                {   
                    id: "map-test",
                    title: "МАР-тест (определение иммунного бесплодия)",
                    path: "map-test",
                    level: 1  
                },
                {   
                    id: "determination-of-leukocytes-in-sperm",
                    title: "LeucoScreen (определение лейкоцитов в сперме)",
                    path: "determination-of-leukocytes-in-sperm",
                    level: 1  
                },
                {   
                    id: "sperm-DNA-fragmentation-analysis",
                    title: "Анализ на фрагментацию ДНК сперматозоидов",
                    path: "sperm-DNA-fragmentation-analysis",
                    level: 1  
                },
                {   
                    id: "diagnostic-hysteroscopy",
                    title: "Диагностическая гистероскопия",
                    path: "diagnostic-hysteroscopy",
                    level: 1  
                },
                {   
                    id: "medical-tests",
                    title: "Медицинские анализы",
                    path: "medical-tests",
                    level: 1  
                },
                {   
                    id: "karyotype-analysis",
                    title: "Анализ на кариотип (кариотипирование)",
                    path: "karyotype-analysis",
                    level: 1  
                },
                {   
                    id: "preparing-for-research",
                    title: "Подготовка к исследованиям",
                    path: "preparing-for-research",
                    level: 1  
                }
            ],
            [
                {   
                    id: "infertility-treatment",
                    title: "Лечение бесплодия",
                    path: "infertility-treatment",
                    level: 0  
                },
                {   
                    id: "appointment-with-a-fertility-specialist",
                    title: "Приём врача репродуктолога",
                    path: "appointment-with-a-fertility-specialist",
                    level: 1  
                },
                {   
                    id: "in-vitro-fertilization",
                    title: "Экстракорпоральное оплодотворение (ЭКО/ИК­СИ)",
                    path: "in-vitro-fertilization",
                    level: 1  
                },
                {   
                    id: "eco",
                    title: "Бесплатное ЭКО по ОМС",
                    path: "eco",
                    level: 1  
                },
                {   
                    id: "IVF-with-donor-eggs",
                    title: "ЭКО с донорской яйцеклеткой",
                    path: "IVF-with-donor-eggs",
                    level: 1  
                },
                {   
                    id: "IVF-with-donor-embryos",
                    title: "ЭКО с донорскими эмбрионами",
                    path: "IVF-with-donor-embryos",
                    level: 1  
                },
                {   
                    id: "IVF-with-donor-sperm",
                    title: "ЭКО с донорской спермой",
                    path: "IVF-with-donor-sperm",
                    level: 1  
                },
                {   
                    id: "ERA-test",
                    title: "Определение рецептивности эндометрия – тест ERA (ЭРА)",
                    path: "ERA-test",
                    level: 1  
                },
                {   
                    id: "assisted-hatching",
                    title: "Вспомогательный хетчинг",
                    path: "assisted-hatching",
                    level: 1  
                },
                {   
                    id: "preimplantation-genetic-diagnosis",
                    title: "Преимплантационная генетическая диагностика",
                    path: "preimplantation-genetic-diagnosis",
                    level: 1  
                },
                {   
                    id: "cryopreservation",
                    title: "Криоконсервация",
                    path: "cryopreservation",
                    level: 1  
                },
                {   
                    id: "",
                    title: "Криоконсервация эмбрионов",
                    path: "",
                    level: 1  
                },
                {   
                    id: "embryo-cryopreservation",
                    title: "Криоконсервация яйцеклеток",
                    path: "embryo-cryopreservation",
                    level: 1  
                },
                {   
                    id: "sperm-cryopreservation",
                    title: "Криоконсервация спермы",
                    path: "sperm-cryopreservation",
                    level: 1  
                },
                {   
                    id: "intrauterine-insemination",
                    title: "Внутриматочная инсеминация (ВМИ)",
                    path: "intrauterine-insemination",
                    level: 1  
                },
                {   
                    id: "hormonal-stimulation-of-the-ovaries",
                    title: "Гормональная стимуляция яичников",
                    path: "hormonal-stimulation-of-the-ovaries",
                    level: 1  
                }
            ],
            [
                {   
                    id: "urology-andrology",
                    title: "Урология-андрология",
                    path: "urology-andrology",
                    level: 0  
                },
                {   
                    id: "appointment-of-a-urologist-andrologist",
                    title: "Приём уролога-андролога",
                    path: "appointment-of-a-urologist-andrologist",
                    level: 1  
                },
                {   
                    id: "urological-diseases",
                    title: "Урологические заболевания",
                    path: "urological-diseases",
                    level: 1  
                },
                {   
                    id: "male-infertility",
                    title: "Мужское бесплодие",
                    path: "male-infertility",
                    level: 1  
                },
                {   
                    id: "urological-research",
                    title: "Урологические исследования",
                    path: "urological-research",
                    level: 1  
                },
                {   
                    id: "examination-of-a-man-at-the-stage-of-pregnancy-planning",
                    title: "Обследование мужчины на этапе планирования беременности",
                    path: "examination-of-a-man-at-the-stage-of-pregnancy-planning",
                    level: 1  
                },
                {   
                    id: "sperm-examination",
                    title: "Исследование спермы",
                    path: "sperm-examination",
                    level: 1  
                },
                {   
                    id: "ultrasound-urological",
                    title: "УЗИ урологическое",
                    path: "ultrasound-urological",
                    level: 1  
                },
                {   
                    id: "cystoscopy",
                    title: "Цистоскопия",
                    path: "cystoscopy",
                    level: 1  
                },
                {   
                    id: "testicular-epididymal-biopsy",
                    title: "Биопсия яичка/придатка",
                    path: "testicular-epididymal-biopsy",
                    level: 1  
                },
                {   
                    id: "IVF-using-ICSI",
                    title: "ЭКО методом ИКСИ",
                    path: "IVF-using-ICSI",
                    level: 1  
                }
            ],
            [
                {   
                    id: "gynecological-operations",
                    title: "Гинекологические операции",
                    path: "gynecological-operations",
                    level: 0  
                },
                {   
                    id: "hysteroscopy",
                    title: "Гистероскопия",
                    path: "hysteroscopy",
                    level: 1  
                },
                {   
                    id: "hysteroresectoscopy",
                    title: "Гистерорезектоскопия",
                    path: "hysteroresectoscopy",
                    level: 1  
                },
                {   
                    id: "hymenoplasty",
                    title: "Гименопластика (восстановление девственной плевы)",
                    path: "hymenoplasty",
                    level: 1  
                },
                {   
                    id: "correction-of-the-labia-minora",
                    title: "Коррекция малых половых губ (лабиопластика)",
                    path: "correction-of-the-labia-minora",
                    level: 1  
                },
                {   
                    id: "minor-gynecological-operations",
                    title: "Малые гинекологические операции",
                    path: "minor-gynecological-operations",
                    level: 1  
                },
                {   
                    id: "radio-wave-treatment-of-the-cervix",
                    title: "Радиоволновое лечение шейки матки",
                    path: "radio-wave-treatment-of-the-cervix",
                    level: 1  
                }
            ],
            [
                {   
                    id: "pregnant-women-services",
                    title: "Услуги для беременных",
                    path: "pregnant-women-services",
                    level: 0  
                }, 
                {   
                    id: "determining-the-sex-of-a-child-by-mothers-blood",
                    title: "Определение пола ребёнка по крови матери",
                    path: "determining-the-sex-of-a-child-by-mothers-blood",
                    level: 1  
                },
                {   
                    id: "prenetix-test",
                    title: "Определение генетических патологий на сроке 10 недель по крови матери (тест Prenetix)",
                    path: "prenetix-test",
                    level: 1  
                },
                {   
                    id: "determination-of-the-rhesus-factor",
                    title: "Определение резусфактора (профилактика резусконфликта)",
                    path: "determination-of-the-rhesus-factor",
                    level: 1  
                },
                {   
                    id: "pregnancy-management",
                    title: "Ведение беременности",
                    path: "pregnancy-management",
                    level: 1  
                },
                {   
                    id: "screening-examinations-during-pregnancy",
                    title: "Скрининговые обследования при беременности",
                    path: "screening-examinations-during-pregnancy",
                    level: 1  
                }
            ],
            [
                {   
                    id: "gynecology",
                    title: "Гинекология",
                    path: "gynecology",
                    level: 0  
                },
                {   
                    id: "gynecologist-appointment",
                    title: "Приём гинеколога",
                    path: "gynecologist-appointment",
                    level: 1  
                },
                {   
                    id: "gynecological-diseases",
                    title: "Гинекологические заболевания",
                    path: "gynecological-diseases",
                    level: 1  
                },
                {   
                    id: "female-infertility",
                    title: "Женское бесплодие",
                    path: "female-infertility",
                    level: 1  
                },
                {   
                    id: "gynecological-smears",
                    title: "Гинекологические мазки",
                    path: "gynecological-smears",
                    level: 1  
                },
                {   
                    id: "gynecological-ultrasound",
                    title: "УЗИ гинекологическое",
                    path: "gynecological-ultrasound",
                    level: 1  
                },
                {   
                    id: "colposcopy",
                    title: "Кольпоскопия",
                    path: "colposcopy",
                    level: 1  
                },
                {   
                    id: "pathologies-of-the-cervix",
                    title: "Патологии шейки матки",
                    path: "pathologies-of-the-cervix",
                    level: 1  
                },
                {   
                    id: "endometrial-biopsy-of-the-uterus",
                    title: "Биопсия энд­метрия матки (пайпель)",
                    path: "endometrial-biopsy-of-the-uterus",
                    level: 1  
                }
            ],
            [
                {   
                    id: "genetic-tests",
                    title: "Генетические тесты",
                    path: "genetic-tests",
                    level: 0
                },
                {   
                    id: "prenatal-diagnosis",
                    title: "Пренатальная диагностика",
                    path: "prenatal-diagnosis",
                    level: 1  
                },
                {   
                    id: "reproduction-disorder",
                    title: "Нарушение репродукции",
                    path: "reproduction-disorder",
                    level: 1  
                },
                {   
                    id: "establishment-of-paternity-and-relationship",
                    title: "Установление отцовства и родства",
                    path: "establishment-of-paternity-and-relationship",
                    level: 1  
                },
                {   
                    id: "hereditary-diseases-and-chromosomal-pathology",
                    title: "Наследственные заболевания и хромосомная патология",
                    path: "hereditary-diseases-and-chromosomal-pathology",
                    level: 1  
                },
                {   
                    id: "oncogenetics",
                    title: "Онкогенетика",
                    path: "oncogenetics",
                    level: 1  
                },
            ],
            [
                {   
                    id: "ultrasound-scan",
                    title: "Ультразвуковые исследования",
                    path: "ultrasound-scan",
                    level: 0  
                },
                {   
                    id: "expert-class-ultrasound",
                    title: "УЗИ экспертного класса",
                    path: "expert-class-ultrasound",
                    level: 1  
                },
                {   
                    id: "ultrasound-for-infertility",
                    title: "УЗИ при бесплодии",
                    path: "ultrasound-for-infertility",
                    level: 1  
                },
                {   
                    id: "ultrasound-of-the-abdominal-organs",
                    title: "УЗИ органов брюшной полости",
                    path: "ultrasound-of-the-abdominal-organs",
                    level: 1  
                },
                {   
                    id: "ultrasound-of-the-prostate-gland",
                    title: "УЗИ предстательной железы (ТРУЗИ - трансректально)",
                    path: "ultrasound-of-the-prostate-gland",
                    level: 1  
                },
                {   
                    id: "4d-ultrasound",
                    title: "4D УЗИ",
                    path: "4d-ultrasound",
                    level: 1  
                },
                {   
                    id: "how-to-prepare-for-ultrasound",
                    title: "Как подготовиться к УЗИ",
                    path: "how-to-prepare-for-ultrasound",
                    level: 1  
                },
            ],
            [
                {   
                    id: "urological-operations",
                    title: "Урологические операции",
                    path: "urological-operations",
                    level: 0  
                },
                {   
                    id: "varicocelectomy",
                    title: "Варикоцелэктомия",
                    path: "varicocelectomy",
                    level: 1  
                },
                {   
                    id: "circumcisio",
                    title: "Циркумцизио (обрезание крайней плоти)",
                    path: "circumcisio",
                    level: 1  
                }
            ],
            [
                {   
                    id: "knee-joint-arthroscopy",
                    title: "Артроскопия коленного сустава",
                    path: "knee-joint-arthroscopy",
                    level: 0  
                },
            ],
            [
                {   
                    id: "shock-wave-therapy",
                    title: "Ударно-волновая терапия",
                    path: "shock-wave-therapy",
                    level: 0  
                },
            ],
            [
                {   
                    id: "endocrinology",
                    title: "Эндокринология",
                    path: "endocrinology",
                    level: 0  
                },
            ],
            [
                {   
                    id: "traumatology-orthopedics",
                    title: "Травматология и ортопедия",
                    path: "traumatology-orthopedics",
                    level: 0  
                },
            ],
            [
                {   
                    id: "functional-diagnostics",
                    title: "Функциональная диагностика",
                    path: "functional-diagnostics",
                    level: 0  
                },
            ],
            [
                {   
                    id: "therapy",
                    title: "Терапия",
                    path: "therapy",
                    level: 0  
                },
            ]
            
        ]
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
