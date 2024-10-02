import React from 'react';
import Img_desktop from "../assets/images/single-img/desctop/childrens.webp";
import Img_mobile from "../assets/images/single-img/mobile/children.webp";

const initialState = {  
    pageTopPart: {
        pageName: "reviews",
        srcDesktop: Img_desktop,            
        srcMobile: Img_mobile,
        title: "Отзывы"       
    }    
}

export type tabNameType = "surova"|"bebelya"|"geneticResearch"; 

export type initialStateType = typeof initialState;

export const reviewsReducer = (state = initialState, action:any):initialStateType => {
    return state;
};