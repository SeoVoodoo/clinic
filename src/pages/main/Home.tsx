import React from 'react';
import { Container } from '../../components/Container';
import { MainSlider } from '../../layout/section/homepage/MainSlider';
import { Advantages } from '../../layout/section/homepage/advantages/Advantages';
import { Services } from '../../layout/section/homepage/services/Services';
import { styled } from 'styled-components';
import bgLeft from './../../assets/images/single-img/desctop/bg_left_advantages.svg';
import bgRight from './../../assets/images/single-img/desctop/bg_right_advantages.svg';
import bg360 from './../../assets/images/single-img/mobile/bg_360_advantages.svg';
import bgTablet from './../../assets/images/single-img/tablet/bg_tablet_advantages.svg';
import { Doctors } from '../../layout/section/homepage/doctors/Doctors';
import bgDoctors from '../../assets/images/single-img/desctop/bg_doctors.svg';

type HomePropsType = {
  homePage: { 
    mainSlider:  Array<{
                  imageSrc:string
                  imageAlt:string
                  title:string
                  subTitle:string
                  description?:string
                  descriptionWeight?:number
                  path:string
                  colorTitleType:string
                  colorSubTitleType?:string        
                  colorDescriptionType?:string
                  bgBtnType:string       
                }>,
    advantages: Array<{bgPosition:string, startWord:string, endWord:string}>,
    services: Array<Array<{serviceName:string, path:string, bgPosition:string}>>,
    doctors: Array<{
      fullName:string
      post:string
      workExperience:string
      foto:string
      path:string
    }>            
  },
  themeName:string,
  fontSize:number
}

export const Home: React.FC<HomePropsType> = (props: HomePropsType) => {
    return (
        <>
          <MainSlider state={props.homePage.mainSlider} themeName={props.themeName}/>
          <WrapAdvantages>
            <Container>
              <Advantages advantages={props.homePage.advantages} />
              <Services services={props.homePage.services}/>
            </Container>
          </WrapAdvantages>

          <WrapDoctors>
            <Container>
              <Doctors doctors={props.homePage.doctors} fontSize={props.fontSize}/>
            </Container>
          </WrapDoctors>
        </>
    );
};

const WrapAdvantages = styled.div`
  padding-top: 30px;
  margin-top: -5px;
  background-image: url(${bgLeft}), url(${bgRight});
  background-color: rgba(213, 243, 238, 0.15);
  background-position: left top, right top;
  background-repeat: no-repeat;
  background-size: 50%;

  @media ${({theme}) => theme.media.tablet} {
    background-image: url(${bgTablet});
    background-position: left top;
    background-size: cover;    
  }

  @media ${({theme}) => theme.media.mobile} {
    background-image: url(${bg360});    
  } 
`

const WrapDoctors = styled.div`
  background-image: url(${bgDoctors});

  @media ${({theme}) => theme.media.tablet} {
    background-image: none;
    background-color: rgba(231, 236, 240, 0.3);    
  }
`
