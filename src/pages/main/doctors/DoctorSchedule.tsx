import React, { useState } from 'react';
import { styled } from 'styled-components';
import { TabMenu } from '../prices/TabMenu';
import { СurrentWeekSchedule } from './СurrentWeekSchedule';
import { useSelector } from 'react-redux';
import { StoreType } from '../../../redux/redux-store';
import { initialStateType } from '../../../redux/timeTableReducer';

type DoctorSchedulePropsType = {   
    id:string
    fontSize: number   
}

export const DoctorSchedule: React.FC<DoctorSchedulePropsType> = (props: DoctorSchedulePropsType) => {  
    
    const state: any = useSelector((store: StoreType) => store);
    const timeTablePage: initialStateType = state.timeTablePage;

    const dates = timeTablePage.calendar.dates;
    const days = timeTablePage.calendar.days;

    const surovaSchedule = timeTablePage.calendar.surova.flat().filter(obj => obj.id === props.id);
    const bebelyaSchedule = timeTablePage.calendar.bebelya.flat().filter(obj => obj.id === props.id);//gordeeva_1

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
            <TabMenu 
                tabs={tabs}
                activeBtn={curentBtnActive}
                handleTabClick={handleTabClick}
                fontSize={props.fontSize}
            />
            <СurrentWeekSchedule                
                currentWeekSurovaSchedule={surovaSchedule[curentActiveContentIndex]}
                currentWeekBebelyaSchedule={bebelyaSchedule[curentActiveContentIndex]}
                days={days}
                dates={dates[curentActiveContentIndex]}
                fontSize={props.fontSize}
            />
        </StyledDoctorSchedule>   
       
    );
};

const StyledDoctorSchedule = styled.div`
        
`
