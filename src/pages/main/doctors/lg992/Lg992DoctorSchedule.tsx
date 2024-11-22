import React, { useState } from 'react';
import { styled, useTheme } from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { Lg992СurrentWeekSchedule } from './Lg992СurrentWeekSchedule';

type Lg992DoctorSchedulePropsType = {
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
    setCurentBtnActive: Function;
    setCurentActiveContentIndex: Function;
}

export const Lg992DoctorSchedule: React.FC<Lg992DoctorSchedulePropsType> = (props:Lg992DoctorSchedulePropsType) => {     

    const theme = useTheme();
        
    const handleBtnClick = (status: string) => {
        if(status === props.curentBtnActive){
            props.setCurentBtnActive("");  
        }
        else {
            const index = props.tabs.findIndex(obj => obj.status === status);
            props.setCurentBtnActive(status);
            props.setCurentActiveContentIndex(index);
        }        
    }
    
    return (
        <StyledLg992DoctorSchedule>
            <ul>
                {
                    props.tabs.map((obj, index) => {                        
                        return (
                            <ListItem key={index} >
                                <TabBtn                                    
                                    activeBtn={props.curentBtnActive === obj.status}
                                    onClick={() => handleBtnClick(obj.status)}
                                >
                                    <span>{obj.title}</span>
                                    <Icon
                                        id={props.curentBtnActive === obj.status ? "arrow_up_tab" : "arrow_down_tab"}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24" 
                                        fill={props.curentBtnActive === obj.status ? theme.color.defaultBtn : theme.color.multiСhannel}                                       
                                    />
                                </TabBtn>
                                { props.curentBtnActive === obj.status && <Lg992СurrentWeekSchedule                                    
                                    activeBtn={props.curentBtnActive}
                                    currentWeekSurovaSchedule={props.surovaSchedule[props.curentActiveContentIndex]}
                                    currentWeekBebelyaSchedule={props.bebelyaSchedule[props.curentActiveContentIndex]}
                                    days={props.days}
                                    dates={props.dates[props.curentActiveContentIndex]}
                                    fontSize={props.fontSize}                                                                       
                                />}
                            </ListItem>
                        );
                    })
                }
            </ul>   
        </StyledLg992DoctorSchedule>
    );
};

const StyledLg992DoctorSchedule = styled.div`
    margin: 30px 0 60px;
    ul {
        display: flex;
        flex-direction: column;
    }    
`

const ListItem = styled.li`    
`

const TabBtn = styled.button<{activeBtn:boolean}>` 
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;       
    border: 1px solid ${props => props.activeBtn ? ({theme}) => theme.color.outline : ({theme}) => theme.color.multiСhannel};
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.43 - 1) + 1rem);    
    padding: 22px;       
    color: ${props => props.activeBtn ? ({theme}) => theme.color.defaultBtn : ({theme}) => theme.color.multiСhannel};  
    background-color:  ${props => props.activeBtn ? ({theme}) => theme.bgCol.btn.primary : ({theme}) => theme.bgCol.default};
    margin-top: -1px;

    span {
        display: inline-block;
        margin-left: 50%;
        transform: translateX(-50%);
        font-weight: 700;
    }
    
`