import React from 'react';
import { styled } from 'styled-components';
import { ScrollTop } from '../../../components/ScrollTop';
import { BreadСrumbs } from '../../../components/bread-crumbs/BreadСrumbs';
import { Container } from '../../../components/Container';
import { StyledH1 } from '../../../components/StyledH1';
import { StyledBtn, StyledReviewBtn } from '../../../components/StyledBtn';

type GordeevaPropsType = {
    gordeevaPage: {
        about: {
            name:string,
            src:string,
            work_experience:string,
            specialization:string,
            description:string
        }
    }
}

const Gordeeva: React.FC<GordeevaPropsType> = (props: GordeevaPropsType) => {
    const htmlstring = props.gordeevaPage.about.description;
    return (
        <StyledGordeeva>
            <ScrollTop />            
            <Container>
            <BreadСrumbs /> 
                <About>
                    <Foto>
                        <img src={props.gordeevaPage.about.src} alt={props.gordeevaPage.about.name} />
                    </Foto>  
                    <StyledH1>{props.gordeevaPage.about.name}</StyledH1>
                    <Experience>{props.gordeevaPage.about.work_experience}</Experience>  
                    <Specialization>Специализация: <span>{props.gordeevaPage.about.specialization}</span></Specialization>                                                 
                    <BriefInformation dangerouslySetInnerHTML={{ __html: htmlstring}}></BriefInformation>
                    <Wrap1>
                        <ActionCall>Запишитесь на прием<br/><span>прямо сейчас!</span></ActionCall>
                        <StyledBtn>Запись на прием</StyledBtn>
                    </Wrap1>
                    <Wrap2>
                        <ActionCall>Понравился прием?<br/><span>Оставьте отзыв о враче</span></ActionCall>
                        <StyledReviewBtn as="a">Оставить отзыв</StyledReviewBtn>
                    </Wrap2>                    
                </About>
            </Container>               
        </StyledGordeeva>
    );
};

export default Gordeeva;

const StyledGordeeva = styled.div`
    
`

const About = styled.div`
    display: grid;
    grid-template-columns: 630px auto auto;
    grid-template-areas:
     "foto name name"
     "foto experience experience"
     "foto specialization specialization"
     "foto info info"
     "foto btn1 btn2";
    gap: 20px; 

    ${StyledBtn}, ${StyledReviewBtn} {
        padding: 16px;
        max-width: 304px;
        text-align: center;
    }
    ${StyledH1}{
        grid-area: name;
    }
    
`
const Foto = styled.div`
    grid-area: foto;
    //width: 630px;
    img {
        max-width: 100%;
        height: auto;
    }    
`
const Experience = styled.span`
    grid-area: experience;
    font-weight: 700;
`
const Specialization = styled.p`
    grid-area: specialization;
    
`
const BriefInformation = styled.div`
    grid-area: info;
`
const Wrap1 = styled.div`
    grid-area: btn1;
    display: flex;
    flex-direction: column;    
`
const Wrap2 = styled.div`
    grid-area: btn2;
    display: flex;
    flex-direction: column;       
`
const ActionCall = styled.span`
 text-align: center;    
`