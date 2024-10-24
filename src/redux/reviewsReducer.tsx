import React from 'react';
import Img_desktop from "../assets/images/single-img/desctop/childrens.webp";
import Img_mobile from "../assets/images/single-img/mobile/children.webp";
import Img_tablet from "../assets/images/single-img/tablet/childrens.webp";

const initialState = {  
    pageTopPart: {
        pageName: "reviews",
        srcDesktop: Img_desktop,            
        srcMobile: Img_mobile,
        srcTablet: Img_tablet,
        title: "Отзывы"       
    }    
}

export type tabNameType = "surova"|"bebelya"|"geneticResearch"; 

export type initialStateType = typeof initialState;

export const reviewsReducer = (state = initialState, action:any):initialStateType => {
    return state;
};