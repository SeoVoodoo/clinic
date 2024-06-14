import React from 'react';
import { DesctopLastNews } from './DesctopLastNews';
import { LaptopLastNews } from './LaptopLastNews';
import { TabletLastNews } from './TabletLastNews';
import { WindowSize } from '../../../../hooks/WindowSize';

type LastNewsPropsType = {
    lastNews: Array<{
        id:number
        img:string
        title:string
        data:string
        prev:string
        path:string
        }>
    fontSize:number
}

export const LastNews: React.FC<LastNewsPropsType> = (props: LastNewsPropsType) => {

    const width = WindowSize(); 
    const laptop = 1200;
    const tablet = 767;    

    if(width > laptop ) {
        return <DesctopLastNews  lastNews={props.lastNews} fontSize={props.fontSize} />
    }
    if(width > tablet && width <= laptop) {
        return <LaptopLastNews  lastNews={props.lastNews} fontSize={props.fontSize} />
    }
    else {
        return <TabletLastNews lastNews={props.lastNews} fontSize={props.fontSize} /> 
    }
    
};