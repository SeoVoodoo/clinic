import React from 'react';

import { WindowSize } from '../../../../hooks/WindowSize';
import { DesctopUsefulInfo } from './DesctopUsefulInfo';
import { LaptopUsefulInfo } from './LaptopUsefulInfo';
import { TabletUsefulInfo } from './TabletUsefulInfo';

type UsefulInfoPropsType = {
    usefulInfo: Array<{
        id:number
        img:string
        title:string        
        path:string
        }>
    fontSize:number
}

export const UsefulInfo: React.FC<UsefulInfoPropsType> = (props: UsefulInfoPropsType) => {

    const width = WindowSize(); 
    const laptop = 1200;
    const tablet = 767;    

    if(width > laptop ) {
        return <DesctopUsefulInfo  usefulInfo={props.usefulInfo} fontSize={props.fontSize} />
    }
    if(width > tablet && width <= laptop) {
        return <LaptopUsefulInfo  usefulInfo={props.usefulInfo} fontSize={props.fontSize} />
    }
    else {
        return <TabletUsefulInfo usefulInfo={props.usefulInfo} fontSize={props.fontSize} /> 
    }
    
};