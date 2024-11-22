import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { DesktopDoctorSchedule } from './desktop/DesktopDoctorSchedule';
import { Lg992DoctorSchedule } from './lg992/Lg992DoctorSchedule';
import { StoreType } from '../../../redux/redux-store';
import { initialStateType } from '../../../redux/timeTableReducer';

type DoctorSchedulePropsType = {   
    id:string
    fontSize:number 
    windowWidth:number  
}

export const DoctorSchedule: React.FC<DoctorSchedulePropsType> = (props: DoctorSchedulePropsType) => {  
    
    const state: any = useSelector((store: StoreType) => store);
    const timeTablePage: initialStateType = state.timeTablePage;

    const dates = timeTablePage.calendar.dates;
    const days = timeTablePage.calendar.days;

    const surovaSchedule = timeTablePage.calendar.surova.flat().filter(obj => obj.id === props.id);
    const bebelyaSchedule = timeTablePage.calendar.bebelya.flat().filter(obj => obj.id === props.id);
    
    const tabs = dates.map(currentDates => {
        return {
            title: `${currentDates[0].slice(0, 6)} - ${currentDates[6].slice(0, 6)}`,
            status: `${currentDates[0].slice(0, 6)} - ${currentDates[6].slice(0, 6)}` 
        }
    });
    const[curentBtnActive, setCurentBtnActive] = useState(tabs[0].status);
    const[curentActiveContentIndex, setCurentActiveContentIndex] = useState(0);
    

    const handleTabClick = (status:string) => {        
        const index = tabs.findIndex(obj => obj.status === status);
        setCurentBtnActive(status);
        setCurentActiveContentIndex(index);
    }

    return (
        <StyledDoctorSchedule>
           {props.windowWidth > 992 
                    ?
                    <DesktopDoctorSchedule                    
                        id={props.id}
                        fontSize={props.fontSize}
                        dates={dates}
                        days={days}
                        surovaSchedule={surovaSchedule}
                        bebelyaSchedule={bebelyaSchedule}
                        tabs={tabs}
                        curentBtnActive={curentBtnActive}
                        curentActiveContentIndex={curentActiveContentIndex}
                        handleTabClick={handleTabClick}
                     /> 
                    : 
                    <Lg992DoctorSchedule  
                        id={props.id}
                        fontSize={props.fontSize}
                        dates={dates}
                        days={days}
                        surovaSchedule={surovaSchedule}
                        bebelyaSchedule={bebelyaSchedule}
                        tabs={tabs}
                        curentBtnActive={curentBtnActive}
                        curentActiveContentIndex={curentActiveContentIndex}                        
                        setCurentBtnActive={setCurentBtnActive}
                        setCurentActiveContentIndex={setCurentActiveContentIndex}
                    />                
                }                

        </StyledDoctorSchedule>   
       
    );
};

const StyledDoctorSchedule = styled.div`
        
`
