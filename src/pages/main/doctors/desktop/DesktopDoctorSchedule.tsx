import React, { useState } from 'react';
import { styled } from 'styled-components';
import { TabMenu } from '../../prices/TabMenu';
import { DesktopСurrentWeekSchedule } from './DesktopСurrentWeekSchedule';

type DesktopDoctorSchedulePropsType = {   
    id:string
    fontSize:number  
    dates:string[][]
    days:string[]
    surovaSchedule: Array<{
        id:string,                            
        Monday?:string, 
        Tuesday?:string,
        Wednesday?:string,
        Thursday?:string,
        Friday?:string, 
        Saturday?:string,
        Sunday?:string,
        colspan?:number
    }>
    bebelyaSchedule: Array<{
        id:string,                            
        Monday?:string, 
        Tuesday?:string,
        Wednesday?:string,
        Thursday?:string,
        Friday?:string, 
        Saturday?:string,
        Sunday?:string,
        colspan?:number
    }>
    tabs: Array<{title:string, status:string}>
    curentBtnActive:string
    curentActiveContentIndex:number
    handleTabClick: (status:string) => void;
}

export const DesktopDoctorSchedule: React.FC<DesktopDoctorSchedulePropsType> = (props: DesktopDoctorSchedulePropsType) => {      
    
    return (
        <StyledDesktopDoctorSchedule>
            <TabMenu 
                tabs={props.tabs}
                activeBtn={props.curentBtnActive}
                handleTabClick={props.handleTabClick}
                fontSize={props.fontSize}
            />
            <DesktopСurrentWeekSchedule                
                currentWeekSurovaSchedule={props.surovaSchedule[props.curentActiveContentIndex]}
                currentWeekBebelyaSchedule={props.bebelyaSchedule[props.curentActiveContentIndex]}
                days={props.days}
                dates={props.dates[props.curentActiveContentIndex]}
                fontSize={props.fontSize}
            />
        </StyledDesktopDoctorSchedule>   
       
    );
};

const StyledDesktopDoctorSchedule = styled.div`
        
`
