import React from 'react';
import desktopFoto from '../../assets/images/single-img/desctop/doctors/gordeeva.webp';
import tabletFoto from '../../assets/images/single-img/tablet/doctors/gordeeva.webp';
import mobileFoto from '../../assets/images/single-img/mobile/doctors/gordeeva.webp';
import sert1 from '../../assets/images/single-img/desctop/sertificates/gordeeva/1.webp';
import sert2 from '../../assets/images/single-img/desctop/sertificates/gordeeva/2.webp';
import sert3 from '../../assets/images/single-img/desctop/sertificates/gordeeva/3.webp';
import sert4 from '../../assets/images/single-img/desctop/sertificates/gordeeva/4.webp';
import sert5 from '../../assets/images/single-img/desctop/sertificates/gordeeva/5.webp';
import sert6 from '../../assets/images/single-img/desctop/sertificates/gordeeva/6.webp';
import sert7 from '../../assets/images/single-img/desctop/sertificates/gordeeva/7.webp';
import sert8 from '../../assets/images/single-img/desctop/sertificates/gordeeva/8.webp';
import sert9 from '../../assets/images/single-img/desctop/sertificates/gordeeva/9.webp';
import sert10 from '../../assets/images/single-img/desctop/sertificates/gordeeva/10.webp';
import sert11 from '../../assets/images/single-img/desctop/sertificates/gordeeva/11.webp';
import sert12 from '../../assets/images/single-img/desctop/sertificates/gordeeva/12.webp';




const initialState = {  
    id: "gordeeva_1",// serebryakova gordeeva_1 volkova belij malanina
    about: {
        name: "Гордеева Ирина Викторовна",
        srcdesktop: desktopFoto,
        srctablet: tabletFoto,
        srcmobile: mobileFoto,
        work_experience: "Врачебный стаж с 2003 года",
        specialization: "Акушер-гинеколог, Репродуктолог",
        description: `<p>Главный врач клиники репродуктивного здоровья с лабораторией ЭКО ООО «Альянс Клиник»</p><p>Главный внештатный специалист по репродуктивному здоровью Министерства здравоохранения Ульяновской области</p><p>Имеет первую квалификационную категорию, кандидат медицинских наук.</p><p>Доцент кафедры акушерства и гинекологии Ульяновского государственного университета</p>`,
        externalLink: "https://prodoctorov.ru/ulyanovsk/vrach/236323-gordeeva/"        
    },
    tileLayout: {

        education: `<h3>Образование</h3><p>Окончила Ульяновский государственный университет по специальности «Лечебное  дело» в 2001 году.</p><p>Проходила обучение в клинической ординатуре на кафедре акушерства и гинекологии Ульяновского государственного университета.</p><p>Окончила Ульяновский государственный университет по специальности «Юриспруденция» в 2005 году. В 2007 г. защитила кандидатскую диссертацию в Санкт-Петербургской медицинской академии последипломного образования.</p>`,

        advancedEducation: `<h3>Дополнительное образование</h3><ol><li>Акушерство и гинекология (сертификат № 0173040012478 от 27.03.2020)</li>
            <li>Организация здравоохранения и общественное здоровье (сертификат № 0173040012646 от 24.04.20)</li>
            <li>Ультразвуковая диагностика (сертификат № 0173310552369 от 11.12.20)</li> 
            <li>Методы ВРТ в лечении женского и мужского бесплодия</li> 
            </ol>`,

        specialization: `<h3>Специализация</h3><p><b>С 2003 г.</b> работала врачом-акушером-гинекологом МУЗ Ульяновская городская клиническая больница скорой медицинской помощи.</p><p><b>С 2008 г.</b> главный акушер-гинеколог г. Ульяновска.</p><p><b>С 2011 г.</b> главный специалист Министерства здравоохранения Ульяновской области.</p><p><b>С апреля 2012 г.</b> главный врач ООО «Альянс Клиник».</p>`,

        professionalSkills:`<h3>Профессиональные навыки</h3><p>Прием супружеской пары по бесплодию</p><p>Оценка овариального резерва</p><p>Назначение обследований при бесплодии</p><p>Определение стратегии лечения пары при бесплодии</p><p>Разработка индивидуальных программ ЭКО</p><p>Назначение схемы стимуляции</p><p>Назначение поддерживающей терапии после переноса</p>`,

        professionalAchievements:`<h3>Профессиональные достижения</h3><p>Принимает активное участие в международных и межрегиональных конгрессах, конференциях.</p><p>Постоянно повышает свой профессиональный уровень в рамках непрерывного медицинского образования.</p><p>Член Российской Академии репродукции человека (РАРЧ), член Европейского общества по репродукции человека и эмбриологии (European Society for Human Reproduction and Embryology (ESHRE)).</p><p>Член Российского общества акушеров-гинекологов (РОАГ).</p>`                
    },
    certificates: [sert1, sert2, sert3, sert4, sert5, sert6, sert7, sert8, sert9, sert10, sert11, sert12]

}

export type initialStateType = typeof initialState;

export const gordeevaReducer = (state = initialState, action:any):initialStateType => {    
    return state;  
};
