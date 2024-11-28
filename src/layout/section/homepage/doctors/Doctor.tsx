import React from 'react';
import { css, styled } from 'styled-components';
import { StyledGreenLink } from '../../../../components/StyledBtn';


type DoctorPropsType = {
    doctor: {
        fullName:string
        post:string
        workExperience:string
        foto:string
        path:string        
    },
    fontSize:number
}

export const Doctor: React.FC<DoctorPropsType> = (props: DoctorPropsType) => {
    return (
        <StyledDoctor>            
            <Foto>                
                <img loading="lazy" src={props.doctor.foto} alt={props.doctor.fullName} />                
            </Foto>
            
            <Info fontSize={props.fontSize}>
                <FulName>{props.doctor.fullName}</FulName>
                <Post>{props.doctor.post}</Post>
                <WorkExperience><span>Стаж:</span> {props.doctor.workExperience}</WorkExperience>
                <StyledGreenLink to={`${props.doctor.path}`}>Подробнее</StyledGreenLink>
            </Info>
            
        </StyledDoctor>
    );
};

const StyledDoctor = styled.li`    
    max-width: 304px;
    width: 100%;
    display: flex;
    flex-direction: column;    
`

const Foto = styled.div`
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
    overflow: hidden;
    img {
        max-width: 100%;    
        height: auto;
    }    
`
const Info = styled.div<{fontSize:number}>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 304px;    
    width: 100%;     
    padding: 20px;
    border-radius: 24px;
    background-color: ${({theme}) => theme.bgCol.default};
    outline: 1px solid ${({theme}) => theme.color.outline};
    margin-top: -68px;
    z-index: 10;

    height: ${props => props.fontSize > 14 ? "100%" : "249px"}; 
    /* ${props => props.fontSize && css<{fontSize:number}>`
        height: ${props.fontSize > 14 ? "100%" : "249px"};    
    `} */

    @media ${({theme}) => theme.media.mobile} {
        margin-top: -52px;    
    }
`
const FulName = styled.span`
    margin-bottom: 12px;
    font-weight: 700;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
`
const Post = styled.span`
    max-width: 224px;
    width: 100%;
    margin-bottom: auto;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem);
    color: ${({theme}) => theme.color.multiСhannel};
    font-weight: 600;
`
const WorkExperience = styled.span`
    margin-bottom: 16px;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
    color: ${({theme}) => theme.color.multiСhannel};
    font-weight: 600;
    span {
        font-weight: 700;
        color: ${({theme}) => theme.color.defaultText};
    }
`