import React from 'react';

const initialStateSidebar = {    
    sidebarMenu: {
        "entities": {
            pages: {
                "services": {
                    id: "services",
                    title: "Услуги",
                    path: "services",
                    level: -1,
                    pages: [
                        "infertility-diagnosis",
                        "infertility-treatment",		
                        "gynecology",
                        "gynecological-operations",
                        "pregnant-women-services",
                        "urology-andrology",
                        "urological-operations",
                        "traumatology-orthopedics",
                        "knee-joint-arthroscopy",
                        "ultrasound-scan",
                        "shock-wave-therapy",
                        "functional-diagnostics",
                        "genetic-tests",
                        "therapy",
                        "endocrinology"
                    ]
                },
                "prices": {
                    id: "prices",
                    title: "Цены",
                    path: "prices",
                    level: -1
                },
                "doctors": {
                    id: "doctors",
                    title: "Наши врачи",
                    path: "doctors",
                    level: -1
                },
                "timetable": {
                    id: "timetable",
                    title: "График приема",
                    path: "timetable",
                    level: -1
                },
                "eco-oms": {
                    id: "eco-oms",
                    title: "Эко по ОМС",
                    path: "eco",
                    level: -1
                },
                "faq": {
                    id: "faq",
                    title: "Вопрос-Ответ",
                    path: "faq",
                    level: -1
                },
                "about-us": {
                    id: "about-us",
                    title: "О нас",
                    path: "#",
                    level: -1,
                    pages: [
                       "about",
                       "reviews",
                       "news",
                       "questionnaire",
                       "documents",
                       "vacancy",
                       "reception-of-citizens",
                       "3d-tour",
                       "payment-terms"
                    ]
                },
                "contacts": {
                    id: "contacts",
                    title: "Контакты",
                    path: "contacts",
                    level: -1
                },
                "about": {
                    id: "about",
                    title: "О компании",
                    path: "about",
                    level: 0,
                    parentId: "about-us"
                },
                "reviews": {
                    id: "reviews",
                    title: "Отзывы",
                    path: "reviews",
                    level: 0,
                    parentId: "about-us"
                },
                "news": {
                    id: "news",
                    title: "Новости",
                    path: "news",
                    level: 0,
                    parentId: "about-us"
                },
                "questionnaire": {
                    id: "questionnaire",
                    title: "Пройти опрос",
                    path: "questionnaire",
                    level: 0,
                    parentId: "about-us"
                },
                "documents": {
                    id: "documents",
                    title: "Документы",
                    path: "documents",
                    level: 0,
                    parentId: "about-us"
                },
                "vacancy": {
                    id: "vacancy",
                    title: "Вакансии",
                    path: "vacancy",
                    level: 0,
                    parentId: "about-us"
                },
                "reception-of-citizens": {
                    id: "reception-of-citizens",
                    title: "Прием граждан",
                    path: "reception-of-citizens",
                    level: 0,
                    parentId: "about-us"
                },
                "3d-tour": {
                    id: "3d-tour",
                    title: "3Д-тур по клинике",
                    path: "3d-tour",
                    level: 0,
                    parentId: "about-us"
                },
                "payment-terms": {
                    id: "payment-terms",
                    title: "Условия оплаты",
                    path: "payment-terms",
                    level: 0,
                    parentId: "about-us"
                },

                "infertility-diagnosis": {
                    id: "infertility-diagnosis",
                    title: "Диагностика бесплодия",
                    path: "infertility-diagnosis",
                    level: 0,
                    pages: [
                        "assessment-of-ovarian-reserve",
                        "tubal-patency-assessment",
                        "ultrasound-of-the-pelvic-organs-in-women",
                        "folliculometry",
                        "ultrasound-of-the-thyroid-gland",
                        "ultrasound-of-the-mammary-glands",
                        "ultrasound-of-the-scrotum-organs",
                        "spermogram-of-the-pelvis-in-women",
                        "kruger-morphology",
                        "map-test",
                        "determination-of-leukocytes-in-sperm",
                        "sperm-DNA-fragmentation-analysis",
                        "diagnostic-hysteroscopy",
                        "medical-tests",
                        "karyotype-analysis",
                        "preparing-for-research"			
                    ]
                },
    
                "assessment-of-ovarian-reserve": {
                    id: "assessment-of-ovarian-reserve",
                    title: "Оценка овариального резерва яичников",
                    path: "assessment-of-ovarian-reserve",
                    level: 1,                    
                    parentId: "infertility-diagnosis"
                },
                
                "tubal-patency-assessment": {
                    id: "tubal-patency-assessment",
                    title: "Оценка проходимости маточных труб",
                    path: "tubal-patency-assessment",
                    level: 1,                    
                    parentId: "infertility-diagnosis"
                },
                
                "ultrasound-of-the-pelvic-organs-in-women": {
                    id: "ultrasound-of-the-pelvic-organs-in-women",
                    title: "УЗИ органов малого таза у женщин",
                    path: "ultrasound-of-the-pelvic-organs-in-women",
                    level: 1,                    
                    parentId: "infertility-diagnosis"
                },
                
                "folliculometry": {
                    id: "folliculometry",
                    title: "Фолликулометрия",
                    path: "folliculometry",
                    level: 1,                    
                    parentId: "infertility-diagnosis"
                },
                
                "ultrasound-of-the-thyroid-gland": {
                    id: "ultrasound-of-the-thyroid-gland",
                    title: "УЗИ щитовидной железы",
                    path: "ultrasound-of-the-thyroid-gland",
                    level: 1,                    
                    parentId: "infertility-diagnosis"
                },
                
                "ultrasound-of-the-mammary-glands": {
                    id: "ultrasound-of-the-mammary-glands",
                    title: "УЗИ молочных желез",
                    path: "ultrasound-of-the-mammary-glands",
                    level: 1,                    
                    parentId: "infertility-diagnosis"
                },
                
                "ultrasound-of-the-scrotum-organs": {
                    id: "ultrasound-of-the-scrotum-organs",
                    title: "УЗИ органов мошонки",
                    path: "ultrasound-of-the-scrotum-organs",
                    level: 1,                    
                    parentId: "infertility-diagnosis"
                },
                
                "spermogram-of-the-pelvis-in-women": {
                    id: "spermogram-of-the-pelvis-in-women",
                    title: "Спермограмма (базовая и расширенная) малого таза у женщин",
                    path: "spermogram-of-the-pelvis-in-women",
                    level: 1,                    
                    parentId: "infertility-diagnosis"
                },
                
                "kruger-morphology": {
                    id: "kruger-morphology",
                    title: "Морфология по Крюгеру (оценка внешнего строения сперматозоидов)",
                    path: "kruger-morphology",
                    level: 1,                    
                    parentId: "infertility-diagnosis"		
                },
                
                "map-test": {
                    id: "map-test",
                    title: "МАР-тест (определение иммунного бесплодия)",
                    path: "map-test",
                    level: 1,                    
                    parentId: "infertility-diagnosis"
                },
                
                "determination-of-leukocytes-in-sperm": {
                    id: "determination-of-leukocytes-in-sperm",
                    title: "LeucoScreen (определение лейкоцитов в сперме)",
                    path: "determination-of-leukocytes-in-sperm",
                    level: 1,                    
                    parentId: "infertility-diagnosis"
                },
                
                "sperm-DNA-fragmentation-analysis": {
                    id: "sperm-DNA-fragmentation-analysis",
                    title: "Анализ на фрагментацию ДНК сперматозоидов",
                    path: "sperm-DNA-fragmentation-analysis",
                    level: 1,                    
                    parentId: "infertility-diagnosis"
                },
                
                "diagnostic-hysteroscopy": {
                    id: "diagnostic-hysteroscopy",
                    title: "Диагностическая гистероскопия",
                    path: "diagnostic-hysteroscopy",
                    level: 1,                    
                    parentId: "infertility-diagnosis"
                },
                
                "medical-tests": {
                    id: "medical-tests",
                    title: "Медицинские анализы",
                    path: "medical-tests",
                    level: 1,                    
                    parentId: "infertility-diagnosis"
                },
                
                "karyotype-analysis": {
                    id: "karyotype-analysis",
                    title: "Анализ на кариотип (кариотипирование)",
                    path: "karyotype-analysis",
                    level: 1,                    
                    parentId: "infertility-diagnosis"
                },
                
                "preparing-for-research": {
                    id: "preparing-for-research",
                    title: "Подготовка к исследованиям",
                    path: "preparing-for-research",
                    level: 1,                    
                    parentId: "infertility-diagnosis"
                },                    
                
                "infertility-treatment": {
                    id: "infertility-treatment",
                    title: "Лечение бесплодия",
                    path: "infertility-treatment",
                    level: 0,
                    pages: [
                        "appointment-with-a-fertility-specialist",
                        "in-vitro-fertilization",
                        "eco",
                        "IVF-with-donor-eggs",
                        "IVF-with-donor-embryos",
                        "IVF-with-donor-sperm",
                        "ERA-test",
                        "assisted-hatching",
                        "preimplantation-genetic-diagnosis",
                        "cryopreservation",
                        "embryo-cryopreservation",
                        "eggs-cryopreservation",
                        "sperm-cryopreservation",
                        "intrauterine-insemination",
                        "hormonal-stimulation-of-the-ovaries"
                    ]
                },
                
                "appointment-with-a-fertility-specialist": {
                    id: "appointment-with-a-fertility-specialist",
                    title: "Приём врача репродуктолога",
                    path: "appointment-with-a-fertility-specialist",
                    level: 1,                    
                    parentId: "infertility-treatment" 
                },
                
                "in-vitro-fertilization": {
                    id: "in-vitro-fertilization",
                    title: "Экстракорпоральное оплодотворение (ЭКО/ИКСИ)",
                    path: "in-vitro-fertilization",
                    level: 1,                    
                    parentId: "infertility-treatment"
                },
                
                "eco": {
                    id: "eco",
                    title: "Бесплатное ЭКО по ОМС",
                    path: "eco",
                    level: 1,                    
                    parentId: "infertility-treatment"
                },
                
                "IVF-with-donor-eggs": {   
                    id: "IVF-with-donor-eggs",
                    title: "ЭКО с донорской яйцеклеткой",
                    path: "IVF-with-donor-eggs",
                    level: 1,                    
                    parentId: "infertility-treatment"
                },
                
                "IVF-with-donor-embryos": {   
                    id: "IVF-with-donor-embryos",
                    title: "ЭКО с донорскими эмбрионами",
                    path: "IVF-with-donor-embryos",
                    level: 1,                    
                    parentId: "infertility-treatment"
                },
                
                "IVF-with-donor-sperm": {
                    id: "IVF-with-donor-sperm",
                    title: "ЭКО с донорской спермой",
                    path: "IVF-with-donor-sperm",
                    level: 1,                    
                    parentId: "infertility-treatment"
                },
                
                "ERA-test": {
                    id: "ERA-test",
                    title: "Определение рецептивности эндометрия – тест ERA (ЭРА)",
                    path: "ERA-test",
                    level: 1,                    
                    parentId: "infertility-treatment"
                },
                
                "assisted-hatching": {
                    id: "assisted-hatching",
                    title: "Вспомогательный хетчинг",
                    path: "assisted-hatching",
                    level: 1,                    
                    parentId: "infertility-treatment"
                },
                
                "preimplantation-genetic-diagnosis": {
                    id: "preimplantation-genetic-diagnosis",
                    title: "Преимплантационная генетическая диагностика",
                    path: "preimplantation-genetic-diagnosis",
                    level: 1,                    
                    parentId: "infertility-treatment"
                },
                
                "cryopreservation": {
                    id: "cryopreservation",
                    title: "Криоконсервация",
                    path: "cryopreservation",
                    level: 1,
                    parentId: "infertility-treatment"
                },
                
                "embryo-cryopreservation": {
                    id: "embryo-cryopreservation",
                    title: "Криоконсервация эмбрионов",
                    path: "embryo-cryopreservation",
                    level: 1,                    
                    parentId: "infertility-treatment"
                },
                
                "eggs-cryopreservation": {
                    id: "eggs-cryopreservation",
                    title: "Криоконсервация яйцеклеток",
                    path: "eggs-cryopreservation",
                    level: 1,                    
                    parentId: "infertility-treatment"
                },
                
                "sperm-cryopreservation": {
                    id: "sperm-cryopreservation",
                    title: "Криоконсервация спермы",
                    path: "sperm-cryopreservation",
                    level: 1,                    
                    parentId: "infertility-treatment"
                },
                
                "intrauterine-insemination": {
                    id: "intrauterine-insemination",
                    title: "Внутриматочная инсеминация (ВМИ)",
                    path: "intrauterine-insemination",
                    level: 1,                    
                    parentId: "infertility-treatment"
                },
                
                "hormonal-stimulation-of-the-ovaries": {
                    id: "hormonal-stimulation-of-the-ovaries",
                    title: "Гормональная стимуляция яичников",
                    path: "hormonal-stimulation-of-the-ovaries",
                    level: 1,                    
                    parentId: "infertility-treatment"
                },                
                
                "gynecology": {
                    id: "gynecology",
                    title: "Гинекология",
                    path: "gynecology",
                    level: 0,                   
                    pages: [
                        "gynecologist-appointment",
                        "gynecological-diseases",
                        "female-infertility",
                        "gynecological-smears",
                        "gynecological-ultrasound",
                        "colposcopy",
                        "pathologies-of-the-cervix",
                        "endometrial-biopsy-of-the-uterus"
                    ]
                },
                
                "gynecologist-appointment": {
                    id: "gynecologist-appointment",
                    title: "Приём гинеколога",
                    path: "gynecologist-appointment",
                    level: 1,                    
                    parentId: "gynecology"
                },
                
                "gynecological-diseases": {
                    id: "gynecological-diseases",
                    title: "Гинекологические заболевания",
                    path: "gynecological-diseases",
                    level: 1,                    
                    parentId: "gynecology"
                },
                
                "female-infertility": {
                    id: "female-infertility",
                    title: "Женское бесплодие",
                    path: "female-infertility",
                    level: 1,                    
                    parentId: "gynecology"
                },
                
                "gynecological-smears": {
                    id: "gynecological-smears",
                    title: "Гинекологические мазки",
                    path: "gynecological-smears",
                    level: 1,                    
                    parentId: "gynecology"
                },
                
                "gynecological-ultrasound": {
                    id: "gynecological-ultrasound",
                    title: "УЗИ гинекологическое",
                    path: "gynecological-ultrasound",
                    level: 1,                    
                    parentId: "gynecology"
                },
                
                "colposcopy": {
                    id: "colposcopy",
                    title: "Кольпоскопия",
                    path: "colposcopy",
                    level: 1,                    
                    parentId: "gynecology"
                },
                
                "pathologies-of-the-cervix": {
                    id: "pathologies-of-the-cervix",
                    title: "Патологии шейки матки",
                    path: "pathologies-of-the-cervix",
                    level: 1,                    
                    parentId: "gynecology"
                },
                
                "endometrial-biopsy-of-the-uterus": {
                    id: "endometrial-biopsy-of-the-uterus",
                    title: "Биопсия эндметрия матки (пайпель)",
                    path: "endometrial-biopsy-of-the-uterus",
                    level: 1,                    
                    parentId: "gynecology"
                },
                
                "gynecological-operations": {
                    id: "gynecological-operations",
                    title: "Гинекологические операции",
                    path: "gynecological-operations",
                    level: 0,                    
                    pages: [
                        "hysteroscopy",
                        "hysteroresectoscopy",
                        "hymenoplasty",
                        "correction-of-the-labia-minora",
                        "minor-gynecological-operations",
                        "radio-wave-treatment-of-the-cervix"
                    ]
                },
                
                "hysteroscopy": {
                    id: "hysteroscopy",
                    title: "Гистероскопия",
                    path: "hysteroscopy",
                    level: 1,                    
                    parentId: "gynecological-operations"
                },
                
                "hysteroresectoscopy": {
                    id: "hysteroresectoscopy",
                    title: "Гистерорезектоскопия",
                    path: "hysteroresectoscopy",
                    level: 1,                    
                    parentId: "gynecological-operations"
                },
                
                "hymenoplasty": {
                    id: "hymenoplasty",
                    title: "Гименопластика (восстановление девственной плевы)",
                    path: "hymenoplasty",
                    level: 1,                     
                    parentId: "gynecological-operations"
                },
                
                "correction-of-the-labia-minora": {
                    id: "correction-of-the-labia-minora",
                    title: "Коррекция малых половых губ (лабиопластика)",
                    path: "correction-of-the-labia-minora",
                    level: 1,                    
                    parentId: "gynecological-operations"
                },
                
                "minor-gynecological-operations": {
                    id: "minor-gynecological-operations",
                    title: "Малые гинекологические операции",
                    path: "minor-gynecological-operations",
                    level: 1,                    
                    parentId: "gynecological-operations"
                },
                
                "radio-wave-treatment-of-the-cervix": {
                    id: "radio-wave-treatment-of-the-cervix",
                    title: "Радиоволновое лечение шейки матки",
                    path: "radio-wave-treatment-of-the-cervix",
                    level: 1,                    
                    parentId: "gynecological-operations"
                },
                
                
                "pregnant-women-services": {
                    id: "pregnant-women-services",
                    title: "Услуги для беременных",
                    path: "pregnant-women-services",
                    level: 0,
                    pages: [
                        "determining-the-sex-of-a-child-by-mothers-blood",
                        "prenetix-test",
                        "determination-of-the-rhesus-factor",
                        "pregnancy-management",
                        "screening-examinations-during-pregnancy"
                    ]
                },
                
                "determining-the-sex-of-a-child-by-mothers-blood": {
                    id: "determining-the-sex-of-a-child-by-mothers-blood",
                    title: "Определение пола ребёнка по крови матери",
                    path: "determining-the-sex-of-a-child-by-mothers-blood",
                    level: 1,                    
                    parentId: "pregnant-women-services"
                },
                
                "prenetix-test": {
                    id: "prenetix-test",
                    title: "Определение генетических патологий на сроке 10 недель по крови матери (тест Prenetix)",
                    path: "prenetix-test",
                    level: 1,                    
                    parentId: "pregnant-women-services"	
                },
                
                "determination-of-the-rhesus-factor": {
                    id: "determination-of-the-rhesus-factor",
                    title: "Определение резусфактора (профилактика резусконфликта)",
                    path: "determination-of-the-rhesus-factor",
                    level: 1,                    
                    parentId: "pregnant-women-services"
                },
                
                "pregnancy-management": {
                    id: "pregnancy-management",
                    title: "Ведение беременности",
                    path: "pregnancy-management",
                    level: 1,                    
                    parentId: "pregnant-women-services"
                },
                
                "screening-examinations-during-pregnancy": {
                    id: "screening-examinations-during-pregnancy",
                    title: "Скрининговые обследования при беременности",
                    path: "screening-examinations-during-pregnancy",
                    level: 1,                    
                    parentId: "pregnant-women-services"
                },                
                
                "urology-andrology": {
                    id: "urology-andrology",
                    title: "Урология-андрология",
                    path: "urology-andrology",
                    level: 0, 
                    pages: [
                        "appointment-of-a-urologist-andrologist",
                        "urological-diseases",
                        "male-infertility",
                        "urological-research",
                        "examination-of-a-man-at-the-stage-of-pregnancy-planning",
                        "sperm-examination",
                        "ultrasound-urological",
                        "cystoscopy",
                        "testicular-epididymal-biopsy",
                        "IVF-using-ICSI"
                    ]
                },
                
                "appointment-of-a-urologist-andrologist": {
                    id: "appointment-of-a-urologist-andrologist",
                    title: "Приём уролога-андролога",
                    path: "appointment-of-a-urologist-andrologist",
                    level: 1,                    
                    parentId: "urology-andrology"	
                },
                
                "urological-diseases": {
                    id: "urological-diseases",
                    title: "Урологические заболевания",
                    path: "urological-diseases",
                    level: 1,                    
                    parentId: "urology-andrology"
                },
                
                "male-infertility": {
                    id: "male-infertility",
                    title: "Мужское бесплодие",
                    path: "male-infertility",
                    level: 1,                    
                    parentId: "urology-andrology"
                },
                
                "urological-research": {
                    id: "urological-research",
                    title: "Урологические исследования",
                    path: "urological-research",
                    level: 1,                    
                    parentId: "urology-andrology"
                },
                
                "examination-of-a-man-at-the-stage-of-pregnancy-planning": {
                    id: "examination-of-a-man-at-the-stage-of-pregnancy-planning",
                    title: "Обследование мужчины на этапе планирования беременности",
                    path: "examination-of-a-man-at-the-stage-of-pregnancy-planning",
                    level: 1,                    
                    parentId: "urology-andrology"
                },
                
                "sperm-examination": {
                    id: "sperm-examination",
                    title: "Исследование спермы",
                    path: "sperm-examination",
                    level: 1,                    
                    parentId: "urology-andrology"
                },
                
                "ultrasound-urological": {
                    id: "ultrasound-urological",
                    title: "УЗИ урологическое",
                    path: "ultrasound-urological",
                    level: 1,                    
                    parentId: "urology-andrology"			
                },
                
                "cystoscopy": {
                    id: "cystoscopy",
                    title: "Цистоскопия",
                    path: "cystoscopy",
                    level: 1,                    
                    parentId: "urology-andrology"
                },
                
                "testicular-epididymal-biopsy": {
                    id: "testicular-epididymal-biopsy",
                    title: "Биопсия яичка/придатка",
                    path: "testicular-epididymal-biopsy",
                    level: 1,                    
                    parentId: "urology-andrology"
                },
                
                "IVF-using-ICSI": {
                    id: "IVF-using-ICSI",
                    title: "ЭКО методом ИКСИ",
                    path: "IVF-using-ICSI",
                    level: 1,                    
                    parentId: "urology-andrology"
                },                
                
                "urological-operations": {
                    id: "urological-operations",
                    title: "Урологические операции",
                    path: "urological-operations",
                    level: 0,
                    pages: [
                        "varicocelectomy",
                        "circumcisio"				
                    ]
                },

                "varicocelectomy": {
                    id: "varicocelectomy",
                    title: "Варикоцелэктомия",
                    path: "varicocelectomy",
                    level: 1,                    
                    parentId: "urological-operations"
                },
                
                "circumcisio": {
                    id: "circumcisio",
                    title: "Циркумцизио (обрезание крайней плоти)",
                    path: "circumcisio",
                    level: 1,                    
                    parentId: "urological-operations"
                },                
                
                "traumatology-orthopedics": {
                    id: "traumatology-orthopedics",
                    title: "Травматология и ортопедия",
                    path: "traumatology-orthopedics",
                    level: 0                    
                },		
                
                "knee-joint-arthroscopy": {
                    id: "knee-joint-arthroscopy",
                    title: "Артроскопия коленного сустава",
                    path: "knee-joint-arthroscopy",
                    level: 0
                },                
                
                "ultrasound-scan": {
                    id: "ultrasound-scan",
                    title: "Ультразвуковые исследования",
                    path: "ultrasound-scan",
                    level: 0,
                    pages: [
                        "expert-class-ultrasound",
                        "ultrasound-for-infertility",
                        "ultrasound-of-the-abdominal-organs",
                        "ultrasound-of-the-prostate-gland",
                        "4d-ultrasound",
                        "how-to-prepare-for-ultrasound"
                    ]
                },
                
                "expert-class-ultrasound": {
                    id: "expert-class-ultrasound",
                    title: "УЗИ экспертного класса",
                    path: "expert-class-ultrasound",
                    level: 1,                    
                    parentId: "ultrasound-scan"
                },
                
                "ultrasound-for-infertility": {
                    id: "ultrasound-for-infertility",
                    title: "УЗИ при бесплодии",
                    path: "ultrasound-for-infertility",
                    level: 1,                    
                    parentId: "ultrasound-scan"
                },
                
                "ultrasound-of-the-abdominal-organs": {
                    id: "ultrasound-of-the-abdominal-organs",
                    title: "УЗИ органов брюшной полости",
                    path: "ultrasound-of-the-abdominal-organs",
                    level: 1,                    
                    parentId: "ultrasound-scan"
                },
                
                "ultrasound-of-the-prostate-gland": {
                    id: "ultrasound-of-the-prostate-gland",
                    title: "УЗИ предстательной железы (ТРУЗИ - трансректально)",
                    path: "ultrasound-of-the-prostate-gland",
                    level: 1,                    
                    parentId: "ultrasound-scan"
                },
                
                "4d-ultrasound": {
                    id: "4d-ultrasound",
                    title: "4D УЗИ",
                    path: "4d-ultrasound",
                    level: 1,                    
                    parentId: "ultrasound-scan"
                },
                
                "how-to-prepare-for-ultrasound": {
                    id: "how-to-prepare-for-ultrasound",
                    title: "Как подготовиться к УЗИ",
                    path: "how-to-prepare-for-ultrasound",
                    level: 1,                    
                    parentId: "ultrasound-scan"
                },                
                
                "shock-wave-therapy": {
                    id: "shock-wave-therapy",
                    title: "Ударно-волновая терапия",
                    path: "shock-wave-therapy",
                    level: 0                    
                },
                
                "functional-diagnostics": {
                    id: "functional-diagnostics",
                    title: "Функциональная диагностика",
                    path: "functional-diagnostics",
                    level: 0                    
                },
                
                "genetic-tests": {
                    id: "genetic-tests",
                    title: "Генетические тесты",
                    path: "genetic-tests",
                    level: 0,
                    pages: [
                        "prenatal-diagnosis",
                        "reproduction-disorder",
                        "establishment-of-paternity-and-relationship",
                        "hereditary-diseases-and-chromosomal-pathology",
                        "oncogenetics"
                    ]
                },
                
                "prenatal-diagnosis": {
                    id: "prenatal-diagnosis",
                    title: "Пренатальная диагностика",
                    path: "prenatal-diagnosis",
                    level: 1,                    
                    parentId: "genetic-tests"
                },
                
                "reproduction-disorder": {
                    id: "reproduction-disorder",
                    title: "Нарушение репродукции",
                    path: "reproduction-disorder",
                    level: 1,                    
                    parentId: "genetic-tests"
                },
                
                "establishment-of-paternity-and-relationship": {
                    id: "establishment-of-paternity-and-relationship",
                    title: "Установление отцовства и родства",
                    path: "establishment-of-paternity-and-relationship",
                    level: 1,                    
                    parentId: "genetic-tests"
                },
                
                "hereditary-diseases-and-chromosomal-pathology": {
                    id: "hereditary-diseases-and-chromosomal-pathology",
                    title: "Наследственные заболевания и хромосомная патология",
                    path: "hereditary-diseases-and-chromosomal-pathology",
                    level: 1,                    
                    parentId: "genetic-tests"
                },
                
                "oncogenetics": {
                    id: "oncogenetics",
                    title: "Онкогенетика",
                    path: "oncogenetics",
                    level: 1,                    
                    parentId: "genetic-tests"
                },
                
                "therapy": {
                    id: "therapy",
                    title: "Терапия",
                    path: "therapy",
                    level: 0                    
                },
                
                "endocrinology": {
                    id: "endocrinology",
                    title: "Эндокринология",
                    path: "endocrinology",
                    level: 0                    
                }
            },
            
            topLevelIds: {
                descktop: [
                    "infertility-diagnosis",
                    "infertility-treatment",		
                    "gynecology",
                    "gynecological-operations",
                    "pregnant-women-services",
                    "urology-andrology",
                    "urological-operations",
                    "traumatology-orthopedics",
                    "knee-joint-arthroscopy",
                    "ultrasound-scan",
                    "shock-wave-therapy",
                    "functional-diagnostics",
                    "genetic-tests",
                    "therapy",
                    "endocrinology"
                ] as topLevelIdsDesktopType,
                mobile: [
                    "services",
                    "prices",
                    "doctors",
                    "timetable",
                    "eco-oms",
                    "faq",
                    "about-us",
                    "contacts"
                ] as topLevelIdsMobileType
            }
        }
    }
}

// const initialStateSidebar2 = {    
//     sidebarMenu: {
//         "entities": {
//             pages: {
//                 "infertility-diagnosis": {
//                     id: "infertility-diagnosis",
//                     title: "Диагностика бесплодия",
//                     path: "infertility-diagnosis",
//                     level: 0,
//                     pages: [
//                         "assessment-of-ovarian-reserve",
//                         "tubal-patency-assessment",
//                         "ultrasound-of-the-pelvic-organs-in-women",
//                         "folliculometry",
//                         "ultrasound-of-the-thyroid-gland",
//                         "ultrasound-of-the-mammary-glands",
//                         "ultrasound-of-the-scrotum-organs",
//                         "spermogram-of-the-pelvis-in-women",
//                         "kruger-morphology",
//                         "map-test",
//                         "determination-of-leukocytes-in-sperm",
//                         "sperm-DNA-fragmentation-analysis",
//                         "diagnostic-hysteroscopy",
//                         "medical-tests",
//                         "karyotype-analysis",
//                         "preparing-for-research"			
//                     ]
//                 },
    
//                 "assessment-of-ovarian-reserve": {
//                     id: "assessment-of-ovarian-reserve",
//                     title: "Оценка овариального резерва яичников",
//                     path: "assessment-of-ovarian-reserve",
//                     level: 1,
//                     parentId: "infertility-diagnosis"
//                 },
                
//                 "tubal-patency-assessment": {
//                     id: "tubal-patency-assessment",
//                     title: "Оценка проходимости маточных труб",
//                     path: "tubal-patency-assessment",
//                     level: 1,
//                     parentId: "infertility-diagnosis"
//                 },
                
//                 "ultrasound-of-the-pelvic-organs-in-women": {
//                     id: "ultrasound-of-the-pelvic-organs-in-women",
//                     title: "УЗИ органов малого таза у женщин",
//                     path: "ultrasound-of-the-pelvic-organs-in-women",
//                     level: 1,
//                     parentId: "infertility-diagnosis"
//                 },
                
//                 "folliculometry": {
//                     id: "folliculometry",
//                     title: "Фолликулометрия",
//                     path: "folliculometry",
//                     level: 1,
//                     parentId: "infertility-diagnosis"
//                 },
                
//                 "ultrasound-of-the-thyroid-gland": {
//                     id: "ultrasound-of-the-thyroid-gland",
//                     title: "УЗИ щитовидной железы",
//                     path: "ultrasound-of-the-thyroid-gland",
//                     level: 1,
//                     parentId: "infertility-diagnosis"
//                 },
                
//                 "ultrasound-of-the-mammary-glands": {
//                     id: "ultrasound-of-the-mammary-glands",
//                     title: "УЗИ молочных желез",
//                     path: "ultrasound-of-the-mammary-glands",
//                     level: 1,
//                     parentId: "infertility-diagnosis"
//                 },
                
//                 "ultrasound-of-the-scrotum-organs": {
//                     id: "ultrasound-of-the-scrotum-organs",
//                     title: "УЗИ органов мошонки",
//                     path: "ultrasound-of-the-scrotum-organs",
//                     level: 1,
//                     parentId: "infertility-diagnosis"
//                 },
                
//                 "spermogram-of-the-pelvis-in-women": {
//                     id: "spermogram-of-the-pelvis-in-women",
//                     title: "Спермограмма (базовая и расширенная) малого таза у женщин",
//                     path: "spermogram-of-the-pelvis-in-women",
//                     level: 1,
//                     parentId: "infertility-diagnosis"
//                 },
                
//                 "kruger-morphology": {
//                     id: "kruger-morphology",
//                     title: "Морфология по Крюгеру (оценка внешнего строения сперматозоидов)",
//                     path: "kruger-morphology",
//                     level: 1,
//                     parentId: "infertility-diagnosis"		
//                 },
                
//                 "map-test": {
//                     id: "map-test",
//                     title: "МАР-тест (определение иммунного бесплодия)",
//                     path: "map-test",
//                     level: 1,
//                     parentId: "infertility-diagnosis"
//                 },
                
//                 "determination-of-leukocytes-in-sperm": {
//                     id: "determination-of-leukocytes-in-sperm",
//                     title: "LeucoScreen (определение лейкоцитов в сперме)",
//                     path: "determination-of-leukocytes-in-sperm",
//                     level: 1,
//                     parentId: "infertility-diagnosis"
//                 },
                
//                 "sperm-DNA-fragmentation-analysis": {
//                     id: "sperm-DNA-fragmentation-analysis",
//                     title: "Анализ на фрагментацию ДНК сперматозоидов",
//                     path: "sperm-DNA-fragmentation-analysis",
//                     level: 1,
//                     parentId: "infertility-diagnosis"
//                 },
                
//                 "diagnostic-hysteroscopy": {
//                     id: "diagnostic-hysteroscopy",
//                     title: "Диагностическая гистероскопия",
//                     path: "diagnostic-hysteroscopy",
//                     level: 1,
//                     parentId: "infertility-diagnosis"
//                 },
                
//                 "medical-tests": {
//                     id: "medical-tests",
//                     title: "Медицинские анализы",
//                     path: "medical-tests",
//                     level: 1,
//                     parentId: "infertility-diagnosis"
//                 },
                
//                 "karyotype-analysis": {
//                     id: "karyotype-analysis",
//                     title: "Анализ на кариотип (кариотипирование)",
//                     path: "karyotype-analysis",
//                     level: 1,
//                     parentId: "infertility-diagnosis"
//                 },
                
//                 "preparing-for-research": {
//                     id: "preparing-for-research",
//                     title: "Подготовка к исследованиям",
//                     path: "preparing-for-research",
//                     level: 1,
//                     parentId: "infertility-diagnosis"
//                 },                    
                
//                 "infertility-treatment": {
//                     id: "infertility-treatment",
//                     title: "Лечение бесплодия",
//                     path: "infertility-treatment",
//                     level: 0,
//                     pages: [
//                         "appointment-with-a-fertility-specialist",
//                         "in-vitro-fertilization",
//                         "eco",
//                         "IVF-with-donor-eggs",
//                         "IVF-with-donor-embryos",
//                         "IVF-with-donor-sperm",
//                         "ERA-test",
//                         "assisted-hatching",
//                         "preimplantation-genetic-diagnosis",
//                         "cryopreservation",
//                         "embryo-cryopreservation",
//                         "eggs-cryopreservation",
//                         "sperm-cryopreservation",
//                         "intrauterine-insemination",
//                         "hormonal-stimulation-of-the-ovaries"
//                     ]
//                 },
                
//                 "appointment-with-a-fertility-specialist": {
//                     id: "appointment-with-a-fertility-specialist",
//                     title: "Приём врача репродуктолога",
//                     path: "appointment-with-a-fertility-specialist",
//                     level: 1,
//                     parentId: "infertility-treatment" 
//                 },
                
//                 "in-vitro-fertilization": {
//                     id: "in-vitro-fertilization",
//                     title: "Экстракорпоральное оплодотворение (ЭКО/ИКСИ)",
//                     path: "in-vitro-fertilization",
//                     level: 1,
//                     parentId: "infertility-treatment"
//                 },
                
//                 "eco": {
//                     id: "eco",
//                     title: "Бесплатное ЭКО по ОМС",
//                     path: "eco",
//                     level: 1,
//                     parentId: "infertility-treatment"
//                 },
                
//                 "IVF-with-donor-eggs": {   
//                     id: "IVF-with-donor-eggs",
//                     title: "ЭКО с донорской яйцеклеткой",
//                     path: "IVF-with-donor-eggs",
//                     level: 1,
//                     parentId: "infertility-treatment"
//                 },
                
//                 "IVF-with-donor-embryos": {   
//                     id: "IVF-with-donor-embryos",
//                     title: "ЭКО с донорскими эмбрионами",
//                     path: "IVF-with-donor-embryos",
//                     level: 1,
//                     parentId: "infertility-treatment"
//                 },
                
//                 "IVF-with-donor-sperm": {
//                     id: "IVF-with-donor-sperm",
//                     title: "ЭКО с донорской спермой",
//                     path: "IVF-with-donor-sperm",
//                     level: 1,
//                     parentId: "infertility-treatment"
//                 },
                
//                 "ERA-test": {
//                     id: "ERA-test",
//                     title: "Определение рецептивности эндометрия – тест ERA (ЭРА)",
//                     path: "ERA-test",
//                     level: 1,
//                     parentId: "infertility-treatment"
//                 },
                
//                 "assisted-hatching": {
//                     id: "assisted-hatching",
//                     title: "Вспомогательный хетчинг",
//                     path: "assisted-hatching",
//                     level: 1,
//                     parentId: "infertility-treatment"
//                 },
                
//                 "preimplantation-genetic-diagnosis": {
//                     id: "preimplantation-genetic-diagnosis",
//                     title: "Преимплантационная генетическая диагностика",
//                     path: "preimplantation-genetic-diagnosis",
//                     level: 1,
//                     parentId: "infertility-treatment"
//                 },
                
//                 "cryopreservation": {
//                     id: "cryopreservation",
//                     title: "Криоконсервация",
//                     path: "cryopreservation",
//                     level: 1,
//                     parentId: "infertility-treatment"
//                 },
                
//                 "embryo-cryopreservation": {
//                     id: "embryo-cryopreservation",
//                     title: "Криоконсервация эмбрионов",
//                     path: "embryo-cryopreservation",
//                     level: 1,
//                     parentId: "infertility-treatment"
//                 },
                
//                 "eggs-cryopreservation": {
//                     id: "eggs-cryopreservation",
//                     title: "Криоконсервация яйцеклеток",
//                     path: "eggs-cryopreservation",
//                     level: 1,
//                     parentId: "infertility-treatment"
//                 },
                
//                 "sperm-cryopreservation": {
//                     id: "sperm-cryopreservation",
//                     title: "Криоконсервация спермы",
//                     path: "sperm-cryopreservation",
//                     level: 1,
//                     parentId: "infertility-treatment"
//                 },
                
//                 "intrauterine-insemination": {
//                     id: "intrauterine-insemination",
//                     title: "Внутриматочная инсеминация (ВМИ)",
//                     path: "intrauterine-insemination",
//                     level: 1,
//                     parentId: "infertility-treatment"
//                 },
                
//                 "hormonal-stimulation-of-the-ovaries": {
//                     id: "hormonal-stimulation-of-the-ovaries",
//                     title: "Гормональная стимуляция яичников",
//                     path: "hormonal-stimulation-of-the-ovaries",
//                     level: 1,
//                     parentId: "infertility-treatment"
//                 },                
                
//                 "gynecology": {
//                     id: "gynecology",
//                     title: "Гинекология",
//                     path: "gynecology",
//                     level: 0,
//                     pages: [
//                         "gynecologist-appointment",
//                         "gynecological-diseases",
//                         "female-infertility",
//                         "gynecological-smears",
//                         "gynecological-ultrasound",
//                         "colposcopy",
//                         "pathologies-of-the-cervix",
//                         "endometrial-biopsy-of-the-uterus"
//                     ]
//                 },
                
//                 "gynecologist-appointment": {
//                     id: "gynecologist-appointment",
//                     title: "Приём гинеколога",
//                     path: "gynecologist-appointment",
//                     level: 1,
//                     parentId: "gynecology"
//                 },
                
//                 "gynecological-diseases": {
//                     id: "gynecological-diseases",
//                     title: "Гинекологические заболевания",
//                     path: "gynecological-diseases",
//                     level: 1,
//                     parentId: "gynecology"
//                 },
                
//                 "female-infertility": {
//                     id: "female-infertility",
//                     title: "Женское бесплодие",
//                     path: "female-infertility",
//                     level: 1,
//                     parentId: "gynecology"
//                 },
                
//                 "gynecological-smears": {
//                     id: "gynecological-smears",
//                     title: "Гинекологические мазки",
//                     path: "gynecological-smears",
//                     level: 1,
//                     parentId: "gynecology"
//                 },
                
//                 "gynecological-ultrasound": {
//                     id: "gynecological-ultrasound",
//                     title: "УЗИ гинекологическое",
//                     path: "gynecological-ultrasound",
//                     level: 1,
//                     parentId: "gynecology"
//                 },
                
//                 "colposcopy": {
//                     id: "colposcopy",
//                     title: "Кольпоскопия",
//                     path: "colposcopy",
//                     level: 1,
//                     parentId: "gynecology"
//                 },
                
//                 "pathologies-of-the-cervix": {
//                     id: "pathologies-of-the-cervix",
//                     title: "Патологии шейки матки",
//                     path: "pathologies-of-the-cervix",
//                     level: 1,
//                     parentId: "gynecology"
//                 },
                
//                 "endometrial-biopsy-of-the-uterus": {
//                     id: "endometrial-biopsy-of-the-uterus",
//                     title: "Биопсия эндметрия матки (пайпель)",
//                     path: "endometrial-biopsy-of-the-uterus",
//                     level: 1,
//                     parentId: "gynecology"
//                 },
                
//                 "gynecological-operations": {
//                     id: "gynecological-operations",
//                     title: "Гинекологические операции",
//                     path: "gynecological-operations",
//                     level: 0,
//                     pages: [
//                         "hysteroscopy",
//                         "hysteroresectoscopy",
//                         "hymenoplasty",
//                         "correction-of-the-labia-minora",
//                         "minor-gynecological-operations",
//                         "radio-wave-treatment-of-the-cervix"
//                     ]
//                 },
                
//                 "hysteroscopy": {
//                     id: "hysteroscopy",
//                     title: "Гистероскопия",
//                     path: "hysteroscopy",
//                     level: 1,
//                     parentId: "gynecological-operations"
//                 },
                
//                 "hysteroresectoscopy": {
//                     id: "hysteroresectoscopy",
//                     title: "Гистерорезектоскопия",
//                     path: "hysteroresectoscopy",
//                     level: 1,
//                     parentId: "gynecological-operations"
//                 },
                
//                 "hymenoplasty": {
//                     id: "hymenoplasty",
//                     title: "Гименопластика (восстановление девственной плевы)",
//                     path: "hymenoplasty",
//                     level: 1, 
//                     parentId: "gynecological-operations"
//                 },
                
//                 "correction-of-the-labia-minora": {
//                     id: "correction-of-the-labia-minora",
//                     title: "Коррекция малых половых губ (лабиопластика)",
//                     path: "correction-of-the-labia-minora",
//                     level: 1,
//                     parentId: "gynecological-operations"
//                 },
                
//                 "minor-gynecological-operations": {
//                     id: "minor-gynecological-operations",
//                     title: "Малые гинекологические операции",
//                     path: "minor-gynecological-operations",
//                     level: 1,
//                     parentId: "gynecological-operations"
//                 },
                
//                 "radio-wave-treatment-of-the-cervix": {
//                     id: "radio-wave-treatment-of-the-cervix",
//                     title: "Радиоволновое лечение шейки матки",
//                     path: "radio-wave-treatment-of-the-cervix",
//                     level: 1,
//                     parentId: "gynecological-operations"
//                 },
                
                
//                 "pregnant-women-services": {
//                     id: "pregnant-women-services",
//                     title: "Услуги для беременных",
//                     path: "pregnant-women-services",
//                     level: 0,
//                     pages: [
//                         "determining-the-sex-of-a-child-by-mothers-blood",
//                         "prenetix-test",
//                         "determination-of-the-rhesus-factor",
//                         "pregnancy-management",
//                         "screening-examinations-during-pregnancy"
//                     ]
//                 },
                
//                 "determining-the-sex-of-a-child-by-mothers-blood": {
//                     id: "determining-the-sex-of-a-child-by-mothers-blood",
//                     title: "Определение пола ребёнка по крови матери",
//                     path: "determining-the-sex-of-a-child-by-mothers-blood",
//                     level: 1,
//                     parentId: "pregnant-women-services"
//                 },
                
//                 "prenetix-test": {
//                     id: "prenetix-test",
//                     title: "Определение генетических патологий на сроке 10 недель по крови матери (тест Prenetix)",
//                     path: "prenetix-test",
//                     level: 1,
//                     parentId: "pregnant-women-services"	
//                 },
                
//                 "determination-of-the-rhesus-factor": {
//                     id: "determination-of-the-rhesus-factor",
//                     title: "Определение резусфактора (профилактика резусконфликта)",
//                     path: "determination-of-the-rhesus-factor",
//                     level: 1,
//                     parentId: "pregnant-women-services"
//                 },
                
//                 "pregnancy-management": {
//                     id: "pregnancy-management",
//                     title: "Ведение беременности",
//                     path: "pregnancy-management",
//                     level: 1,
//                     parentId: "pregnant-women-services"
//                 },
                
//                 "screening-examinations-during-pregnancy": {
//                     id: "screening-examinations-during-pregnancy",
//                     title: "Скрининговые обследования при беременности",
//                     path: "screening-examinations-during-pregnancy",
//                     level: 1,
//                     parentId: "pregnant-women-services"
//                 },                
                
//                 "urology-andrology": {
//                     id: "urology-andrology",
//                     title: "Урология-андрология",
//                     path: "urology-andrology",
//                     level: 0, 
//                     pages: [
//                         "appointment-of-a-urologist-andrologist",
//                         "urological-diseases",
//                         "male-infertility",
//                         "urological-research",
//                         "examination-of-a-man-at-the-stage-of-pregnancy-planning",
//                         "sperm-examination",
//                         "ultrasound-urological",
//                         "cystoscopy",
//                         "testicular-epididymal-biopsy",
//                         "IVF-using-ICSI"
//                     ]
//                 },
                
//                 "appointment-of-a-urologist-andrologist": {
//                     id: "appointment-of-a-urologist-andrologist",
//                     title: "Приём уролога-андролога",
//                     path: "appointment-of-a-urologist-andrologist",
//                     level: 1,
//                     parentId: "urology-andrology"	
//                 },
                
//                 "urological-diseases": {
//                     id: "urological-diseases",
//                     title: "Урологические заболевания",
//                     path: "urological-diseases",
//                     level: 1,
//                     parentId: "urology-andrology"
//                 },
                
//                 "male-infertility": {
//                     id: "male-infertility",
//                     title: "Мужское бесплодие",
//                     path: "male-infertility",
//                     level: 1,
//                     parentId: "urology-andrology"
//                 },
                
//                 "urological-research": {
//                     id: "urological-research",
//                     title: "Урологические исследования",
//                     path: "urological-research",
//                     level: 1,
//                     parentId: "urology-andrology"
//                 },
                
//                 "examination-of-a-man-at-the-stage-of-pregnancy-planning": {
//                     id: "examination-of-a-man-at-the-stage-of-pregnancy-planning",
//                     title: "Обследование мужчины на этапе планирования беременности",
//                     path: "examination-of-a-man-at-the-stage-of-pregnancy-planning",
//                     level: 1,
//                     parentId: "urology-andrology"
//                 },
                
//                 "sperm-examination": {
//                     id: "sperm-examination",
//                     title: "Исследование спермы",
//                     path: "sperm-examination",
//                     level: 1,
//                     parentId: "urology-andrology"
//                 },
                
//                 "ultrasound-urological": {
//                     id: "ultrasound-urological",
//                     title: "УЗИ урологическое",
//                     path: "ultrasound-urological",
//                     level: 1,
//                     parentId: "urology-andrology"			
//                 },
                
//                 "cystoscopy": {
//                     id: "cystoscopy",
//                     title: "Цистоскопия",
//                     path: "cystoscopy",
//                     level: 1,
//                     parentId: "urology-andrology"
//                 },
                
//                 "testicular-epididymal-biopsy": {
//                     id: "testicular-epididymal-biopsy",
//                     title: "Биопсия яичка/придатка",
//                     path: "testicular-epididymal-biopsy",
//                     level: 1,
//                     parentId: "urology-andrology"
//                 },
                
//                 "IVF-using-ICSI": {
//                     id: "IVF-using-ICSI",
//                     title: "ЭКО методом ИКСИ",
//                     path: "IVF-using-ICSI",
//                     level: 1,
//                     parentId: "urology-andrology"
//                 },                
                
//                 "urological-operations": {
//                     id: "urological-operations",
//                     title: "Урологические операции",
//                     path: "urological-operations",
//                     level: 0,
//                     pages: [
//                         "varicocelectomy",
//                         "circumcisio"				
//                     ]
//                 },

//                 "varicocelectomy": {
//                     id: "varicocelectomy",
//                     title: "Варикоцелэктомия",
//                     path: "varicocelectomy",
//                     level: 1,
//                     parentId: "urological-operations"
//                 },
                
//                 "circumcisio": {
//                     id: "circumcisio",
//                     title: "Циркумцизио (обрезание крайней плоти)",
//                     path: "circumcisio",
//                     level: 1,
//                     parentId: "urological-operations"
//                 },                
                
//                 "traumatology-orthopedics": {
//                     id: "traumatology-orthopedics",
//                     title: "Травматология и ортопедия",
//                     path: "traumatology-orthopedics",
//                     level: 0
//                 },		
                
//                 "knee-joint-arthroscopy": {
//                     id: "knee-joint-arthroscopy",
//                     title: "Артроскопия коленного сустава",
//                     path: "knee-joint-arthroscopy",
//                     level: 0 
//                 },                
                
//                 "ultrasound-scan": {
//                     id: "ultrasound-scan",
//                     title: "Ультразвуковые исследования",
//                     path: "ultrasound-scan",
//                     level: 0,
//                     pages: [
//                         "expert-class-ultrasound",
//                         "ultrasound-for-infertility",
//                         "ultrasound-of-the-abdominal-organs",
//                         "ultrasound-of-the-prostate-gland",
//                         "4d-ultrasound",
//                         "how-to-prepare-for-ultrasound"
//                     ]
//                 },
                
//                 "expert-class-ultrasound": {
//                     id: "expert-class-ultrasound",
//                     title: "УЗИ экспертного класса",
//                     path: "expert-class-ultrasound",
//                     level: 1,
//                     parentId: "ultrasound-scan"
//                 },
                
//                 "ultrasound-for-infertility": {
//                     id: "ultrasound-for-infertility",
//                     title: "УЗИ при бесплодии",
//                     path: "ultrasound-for-infertility",
//                     level: 1,
//                     parentId: "ultrasound-scan"
//                 },
                
//                 "ultrasound-of-the-abdominal-organs": {
//                     id: "ultrasound-of-the-abdominal-organs",
//                     title: "УЗИ органов брюшной полости",
//                     path: "ultrasound-of-the-abdominal-organs",
//                     level: 1,
//                     parentId: "ultrasound-scan"
//                 },
                
//                 "ultrasound-of-the-prostate-gland": {
//                     id: "ultrasound-of-the-prostate-gland",
//                     title: "УЗИ предстательной железы (ТРУЗИ - трансректально)",
//                     path: "ultrasound-of-the-prostate-gland",
//                     level: 1,
//                     parentId: "ultrasound-scan"
//                 },
                
//                 "4d-ultrasound": {
//                     id: "4d-ultrasound",
//                     title: "4D УЗИ",
//                     path: "4d-ultrasound",
//                     level: 1,
//                     parentId: "ultrasound-scan"
//                 },
                
//                 "how-to-prepare-for-ultrasound": {
//                     id: "how-to-prepare-for-ultrasound",
//                     title: "Как подготовиться к УЗИ",
//                     path: "how-to-prepare-for-ultrasound",
//                     level: 1,
//                     parentId: "ultrasound-scan"
//                 },                
                
//                 "shock-wave-therapy": {
//                     id: "shock-wave-therapy",
//                     title: "Ударно-волновая терапия",
//                     path: "shock-wave-therapy",
//                     level: 0
//                 },
                
//                 "functional-diagnostics": {
//                     id: "functional-diagnostics",
//                     title: "Функциональная диагностика",
//                     path: "functional-diagnostics",
//                     level: 0 
//                 },
                
//                 "genetic-tests": {
//                     id: "genetic-tests",
//                     title: "Генетические тесты",
//                     path: "genetic-tests",
//                     level: 0,
//                     pages: [
//                         "prenatal-diagnosis",
//                         "reproduction-disorder",
//                         "establishment-of-paternity-and-relationship",
//                         "hereditary-diseases-and-chromosomal-pathology",
//                         "oncogenetics"
//                     ]
//                 },
                
//                 "prenatal-diagnosis": {
//                     id: "prenatal-diagnosis",
//                     title: "Пренатальная диагностика",
//                     path: "prenatal-diagnosis",
//                     level: 1,
//                     parentId: "genetic-tests"
//                 },
                
//                 "reproduction-disorder": {
//                     id: "reproduction-disorder",
//                     title: "Нарушение репродукции",
//                     path: "reproduction-disorder",
//                     level: 1,
//                     parentId: "genetic-tests"
//                 },
                
//                 "establishment-of-paternity-and-relationship": {
//                     id: "establishment-of-paternity-and-relationship",
//                     title: "Установление отцовства и родства",
//                     path: "establishment-of-paternity-and-relationship",
//                     level: 1,
//                     parentId: "genetic-tests"
//                 },
                
//                 "hereditary-diseases-and-chromosomal-pathology": {
//                     id: "hereditary-diseases-and-chromosomal-pathology",
//                     title: "Наследственные заболевания и хромосомная патология",
//                     path: "hereditary-diseases-and-chromosomal-pathology",
//                     level: 1,
//                     parentId: "genetic-tests"
//                 },
                
//                 "oncogenetics": {
//                     id: "oncogenetics",
//                     title: "Онкогенетика",
//                     path: "oncogenetics",
//                     level: 1,
//                     parentId: "genetic-tests"
//                 },
                
//                 "therapy": {
//                     id: "therapy",
//                     title: "Терапия",
//                     path: "therapy",
//                     level: 0 
//                 },
                
//                 "endocrinology": {
//                     id: "endocrinology",
//                     title: "Эндокринология",
//                     path: "endocrinology",
//                     level: 0
//                 }
//             },
            
//             topLevelIds: [
//                 "infertility-diagnosis",
//                 "infertility-treatment",		
//                 "gynecology",
//                 "gynecological-operations",
//                 "pregnant-women-services",
//                 "urology-andrology",
//                 "urological-operations",
//                 "traumatology-orthopedics",
//                 "knee-joint-arthroscopy",
//                 "ultrasound-scan",
//                 "shock-wave-therapy",
//                 "functional-diagnostics",
//                 "genetic-tests",
//                 "therapy",
//                 "endocrinology"		
//             ]
//         }
//     }
// }


type topLevelIdsDesktopType = [
    "infertility-diagnosis",
    "infertility-treatment",		
    "gynecology",
    "gynecological-operations",
    "pregnant-women-services",
    "urology-andrology",
    "urological-operations",
    "traumatology-orthopedics",
    "knee-joint-arthroscopy",
    "ultrasound-scan",
    "shock-wave-therapy",
    "functional-diagnostics",
    "genetic-tests",
    "therapy",
    "endocrinology"
]

type topLevelIdsMobileType = [
    "services",
    "prices",
    "doctors",
    "timetable",
    "eco-oms",
    "faq",
    "about-us",
    "contacts"
]


export type initialStateSidebarType = typeof initialStateSidebar;


export type topLevelIdsType = 
| topLevelIdsDesktopType[number] 
| topLevelIdsMobileType[number];


export const sidebarReducer = (state = initialStateSidebar, action: any):initialStateSidebarType => {
    return state;
};
