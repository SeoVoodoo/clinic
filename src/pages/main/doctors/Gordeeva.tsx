import React from 'react';
import { styled } from 'styled-components';
import { ScrollTop } from '../../../components/ScrollTop';
import { BreadСrumbs } from '../../../components/bread-crumbs/BreadСrumbs';
import { Container } from '../../../components/Container';
import { StyledH1 } from '../../../components/StyledH1';
import { StyledBtn, StyledReviewBtn } from '../../../components/StyledBtn';
import { Tile } from './Tile';

type GordeevaPropsType = {
    gordeevaPage: {
        about: {
            name:string,
            srcdesktop: string,
            srctablet: string,
            srcmobile: string,
            work_experience:string,
            specialization:string,
            description:string,
            externalLink:string
        }
        tileLayout: {
            education:string,
            advancedEducation:string,
            specialization:string,
            professionalSkills:string,
            professionalAchievements:string            
        }
    }
    handleToggleModalWindow: (windowName:string) => void 
    windowWidth:number
}

const Gordeeva: React.FC<GordeevaPropsType> = (props: GordeevaPropsType) => {
    const htmlstring = props.gordeevaPage.about.description;
    return (
        <StyledGordeeva>
            <ScrollTop />            
            <Container>
            <BreadСrumbs /> 
                <About>                                           
                    <Picture>
                        <source media="(max-width: 576px)" srcSet={props.gordeevaPage.about.srcmobile} />
                        <source media="(min-width: 992px)" srcSet={props.gordeevaPage.about.srcdesktop} />
                        <img src={props.gordeevaPage.about.srctablet} alt={props.gordeevaPage.about.name} />
                    </Picture>                     
                    <StyledH1>{props.gordeevaPage.about.name}</StyledH1>
                    <Experience>{props.gordeevaPage.about.work_experience}</Experience>  
                    <Specialization>Специализация: <span>{props.gordeevaPage.about.specialization}</span></Specialization>                                                 
                    <BriefInformation dangerouslySetInnerHTML={{ __html: htmlstring}}></BriefInformation>
                    <Buttons>
                        <Wrap1>
                            <ActionCall>
                                Запишитесь на прием {props.windowWidth <= 767 ? "" : <br/>} <span>прямо сейчас!</span>
                            </ActionCall>
                            <StyledBtn onClick={() => props.handleToggleModalWindow("record")}>Запись на прием</StyledBtn>
                        </Wrap1>
                        <Wrap2>
                            <ActionCall>Понравился прием?<br/><span>Оставьте отзыв о враче</span></ActionCall>
                            <StyledReviewBtn as="a" href={props.gordeevaPage.about.externalLink}>Оставить отзыв</StyledReviewBtn>
                        </Wrap2>   
                    </Buttons>                 
                </About>                
            </Container>  
            <TileLayout>
                <Container>
                    <Education 
                        dangerouslySetInnerHTML={{ __html: props.gordeevaPage.tileLayout.education}}
                    >                        
                    </Education>
                    <SpecializationMore 
                        dangerouslySetInnerHTML={{ __html: props.gordeevaPage.tileLayout.specialization}}
                    >
                    </SpecializationMore>
                    <AdvancedEducation 
                        dangerouslySetInnerHTML={{ __html: props.gordeevaPage.tileLayout.advancedEducation}}
                    >
                    </AdvancedEducation>
                    <ProfessionalSkills
                        dangerouslySetInnerHTML={{ __html: props.gordeevaPage.tileLayout.professionalSkills}}
                    >
                    </ProfessionalSkills>
                    <ProfessionalAchievements
                        dangerouslySetInnerHTML={{ __html: props.gordeevaPage.tileLayout.professionalAchievements}}
                    >
                    </ProfessionalAchievements>
                    {/* {Object.values(props.gordeevaPage.tileLayout).map((content, index) => {
                        return (
                            <Tile key={index} content={content} area="education" />                            
                        );
                    })} */}
                </Container>
            </TileLayout>             
        </StyledGordeeva>
    );
};

export default Gordeeva;

const StyledGordeeva = styled.div`
    
`

const About = styled.div`
    display: grid;
    grid-template-columns: 50% auto auto;
    grid-template-areas:
     "foto name name"
     "foto experience experience"
     "foto specialization specialization"
     "foto info info"
     "foto buttons buttons";
    gap: 20px; 

    ${StyledBtn}, ${StyledReviewBtn} {
        padding: 16px;
        width: 100%;        
        text-align: center;
        
    }
    ${StyledH1}{
        grid-area: name;
    } 

    @media ${({theme}) => theme.media.lg992}{
        grid-template-columns: 42% auto auto;
        gap: 10px;       
    } 

    @media ${({theme}) => theme.media.mobile}{
        grid-template-columns: auto;
        grid-template-areas:
        "foto"
        "name"
        "experience"
        "specialization"
        "info"
        "buttons";        
        justify-items: center;
        gap: 20px;

        /* ${StyledBtn}, ${StyledReviewBtn} {           
            width: 320px;           
        } */

        ${StyledH1}{
            text-align: center;
        } 
    }  
`
const Picture = styled.picture`
    grid-area: foto;
    
    img {
        max-width: 100%;
        height: auto;
        /* width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center; */
    }  
    
    /* @media ${({theme}) => theme.media.tablet}{
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    } */
`
const Experience = styled.span`
    grid-area: experience;
    font-weight: 700;
    font-size: 1.14rem; 
    @media ${({theme}) => theme.media.mobile}{
        margin-bottom: 15px;
    }
`
const Specialization = styled.p`
    grid-area: specialization;
    font-size: 1.14rem;
    color: ${({theme}) => theme.color.multiСhannel};

    & > span {        
        color: ${({theme}) => theme.color.primary};
    }

    @media ${({theme}) => theme.media.mobile}{
        justify-self: start
    }
    
`
const BriefInformation = styled.div`
    grid-area: info;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem); 

    p {
        margin-bottom: 20px;
    }
    p:last-child {
        margin-bottom: 0;
    }
`
const Buttons = styled.div`
    grid-area: buttons;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;

    @media ${({theme}) => theme.media.tablet}{
        flex-direction: column;
        align-items: center;
    }
`
const Wrap1 = styled.div`
    //grid-area: btn1;
    width: 160px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    //justify-content: flex-start;  

    @media ${({theme}) => theme.media.tablet}{
        width: 100%;
    }
    
    @media ${({theme}) => theme.media.mobile}{
        margin-bottom: 10px;
    }
`
const Wrap2 = styled.div`
    //grid-area: btn2;
    width: 160px;
    flex-grow: 1;
    display: flex;
    flex-direction: column; 
    //justify-content: flex-start; 
    
    @media ${({theme}) => theme.media.tablet}{
        width: 100%;
    }
`
const ActionCall = styled.span`
    text-align: center;   
    font-weight: 700;
    font-size: 1.07rem;
    line-height: 1.43rem;
    color: ${({theme}) => theme.color.primary};
    margin-bottom: 8px;
    span {
        color: ${({theme}) => theme.color.secondary};
    } 
`
const TileLayout = styled.div`
    background-color: ${({theme}) => theme.bgCol.homePage.doctors};
    padding: 50px 0;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem); 
    font-weight: 500;
    line-height: calc((100vw - 26rem)/(137 - 26) * (1.57 - 1.43) + 1.43rem); 

    ${Container} {
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 20px;
        grid-template-areas:
        "education specialization"
        "advancedEducation professionalSkills"
        "professionalAchievements professionalAchievements";

        div {
            padding: 20px 24px;
            border-radius: 24px;
        }
    }
    h3 {
        color: ${({theme}) => theme.color.primary}; 
        margin-bottom: 20px;
    }
    
    ol {
        margin-left: 14px;
    }
    ol > li, p {
        margin-bottom: 10px;
    }
`
const Education = styled.div`
    grid-area: education;    
    background-color: rgba(213, 243, 238, 0.3);   
`
const SpecializationMore = styled.div`
    grid-area: specialization;    
    background-color: ${({theme}) => theme.bgCol.default};    
`
const AdvancedEducation = styled.div`
    grid-area: advancedEducation;    
    background-color: rgba(213, 243, 238, 0.8);    
`
const ProfessionalSkills = styled.div`
    grid-area: professionalSkills;    
    background-color:rgba(247, 192, 143, 0.6);    
`
const ProfessionalAchievements = styled.div`
    grid-area: professionalAchievements;    
    background-color: rgba(231, 236, 240, 1);    
`