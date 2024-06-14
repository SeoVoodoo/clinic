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
import { Promotions } from '../../layout/section/homepage/promotions/Promotions';
import { LastNews } from '../../layout/section/homepage/last_news/LastNews';
import { UsefulInfo } from '../../layout/section/homepage/useful_info/UsefulInfo';
import { Partners } from '../../layout/section/homepage/partners/Partners';

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
    }>,
    promotions: Array<{
      id:number
      endDate:string
      title:string
      subTitle?:string
      sale?:string
      note?:string
      path:string
      frontImg:string
      backImg:string
    }>,
    lastNews: Array<{
      id:number
      img:string
      title:string
      data:string
      prev:string
      path:string
    }>,
    usefulInfo: Array<{id:number, img:string, title:string, path:string}>,
    partners:Array<{
      id:number, 
      width:string, 
      height:string, 
      img:string
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
              <Promotions promotions={props.homePage.promotions} fontSize={props.fontSize} />              
            </Container>
          </WrapAdvantages>

          <Container>
            <Services services={props.homePage.services} />         
          </Container>

          <WrapDoctors>
            <Container>
              <Doctors doctors={props.homePage.doctors} fontSize={props.fontSize} />
            </Container>
          </WrapDoctors>

          <WrapLastNews>
            <Container>
              <LastNews lastNews={props.homePage.lastNews} fontSize={props.fontSize}/>         
            </Container>
          </WrapLastNews>

          <WrapUsefulInfo>
            <Container>
              <UsefulInfo usefulInfo={props.homePage.usefulInfo} fontSize={props.fontSize}/>         
            </Container>
          </WrapUsefulInfo>

          <Container>
              <Partners partners={props.homePage.partners} />         
          </Container>
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
  background-color: ${({theme}) => theme.bgCol.homePage.doctors};

  @media ${({theme}) => theme.media.tablet} {
    background-image: none;
        
  }
`

const WrapLastNews = styled.div`
  background-color: ${({theme}) => theme.bgCol.homePage.news};
`

const WrapUsefulInfo = styled.div`
  background-color: ${({theme}) => theme.bgCol.homePage.info};
`
