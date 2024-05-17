import React from 'react';
import { Container } from '../../components/Container';
import { MainSlider } from '../../layout/section/homepage/MainSlider';
import { Advantages } from '../../layout/section/homepage/advantages/Advantages';
import { Services } from '../../layout/section/homepage/services/Services';

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
    services: Array<Array<{serviceName:string, path:string, bgPosition:string}>>            
  },
  themeName:string
}

export const Home: React.FC<HomePropsType> = (props: HomePropsType) => {
    return (
        <>
          <MainSlider state={props.homePage.mainSlider} themeName={props.themeName}/>
          <Container>
            <Advantages advantages={props.homePage.advantages} />
            <Services services={props.homePage.services}/>
          </Container>
        </>
    );
};
