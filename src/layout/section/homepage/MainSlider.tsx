import React from 'react';
import { css, styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import "../../../styles/slider/Slider.css";
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';


type MainSliderPropsType = {
    state: Array<{
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
    }>
    themeName:string
} 

export const MainSlider: React.FC<MainSliderPropsType> =  (props: MainSliderPropsType) => {
    
    
    return (
        <StyledMainSlider>
            <Swiper                
                pagination={true} 
                modules={[EffectFade, Pagination, Autoplay]}                                
                className="mySwiper"
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false
                // }}                                
            >
                {props.state.map((slide, index) =>
                    <SwiperSlide key={index}>                        
                        <img src={slide.imageSrc} alt={slide.imageAlt} />
                        <Info>
                            <Title 
                                colorTitleType={slide.colorTitleType} 
                                themeName={props.themeName}
                            >
                                {slide.title}
                            </Title>
                            {slide.colorSubTitleType && 
                                <SubTitle 
                                    colorSubTitleType={slide.colorSubTitleType}
                                    themeName={props.themeName}
                                >
                                    {slide.subTitle}
                                </SubTitle>
                            }
                            <Description
                                colorDescriptionType={slide.colorDescriptionType}
                                descriptionWeight={slide.descriptionWeight}
                                themeName={props.themeName}
                            >
                                {slide.description}
                            </Description>
                            <Button 
                                as="a" 
                                href={slide.path}
                                bgBtnType={slide.bgBtnType}
                                themeName={props.themeName}
                            >
                                Узнать подробнее
                            </Button>
                        </Info>
                    </SwiperSlide>
                )}

            </Swiper>
        </StyledMainSlider>
    );
};

const StyledMainSlider = styled.section` 
    margin-bottom: 0;   
    img {
        max-width: 1920px;
        width: 100%;
        object-fit: cover;
    }
`

const Info = styled.div`    
    position: absolute;
    max-width: 1320px;
    width: 100%;    
    left: calc((100vw - 1320px)/2 + 20px);    
    top: 50%;    
    transform: translateY(-50%);
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    @media screen and (max-width: 1320px) {
        left: 20px;
    } 
`
type TitlePropsType = {    
    colorTitleType:string
    themeName:string    
}

type SubTitlePropsType = {
    colorSubTitleType:string | undefined
    themeName:string
}

type DescriptionPropsType = {
    colorDescriptionType:string | undefined
    descriptionWeight:number | undefined
    themeName:string
}

type ButtonPropsType = {
    bgBtnType:string
    themeName:string
}

const Title = styled.h2<TitlePropsType>`

    font-size: calc((100vw - 26rem)/(137 - 26) * (5 - 2) + 2rem);    
    margin-bottom: 1.7rem;
    max-width: 625px;

    ${props => props.colorTitleType === "orange" && css<TitlePropsType>`     
        color: ${props => props.themeName === "default" ? ({theme}) => theme.homeSlider.orange : ({theme}) => theme.homeSlider.color}  
    `}

    ${props => props.colorTitleType === "white" && css<TitlePropsType>`    
        color: ${props => props.themeName === "default" ? ({theme}) => theme.homeSlider.white : ({theme}) => theme.homeSlider.color}
    `}

    ${props => props.colorTitleType === "black" && css<TitlePropsType>`    
        color: ${props => props.themeName === "default" ? ({theme}) => theme.homeSlider.black : ({theme}) => theme.homeSlider.color}
    `}
`

const SubTitle = styled.h3<SubTitlePropsType>` 
    font-size: calc((100vw - 26rem)/(137 - 26) * (3.4 - 1.14) + 1.14rem);
    max-width: 700px;
    margin-bottom: 1.2rem;

    ${props => props.colorSubTitleType === "green" && css<SubTitlePropsType>`     
        color: ${props => props.themeName === "default" ? ({theme}) => theme.homeSlider.green : ({theme}) => theme.homeSlider.color}  
    `}    
`

const Description = styled.span<DescriptionPropsType>` 
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.86 - 1) + 1rem); 
    font-weight: ${props => props.descriptionWeight};
    
    ${props => props.colorDescriptionType === "green" && css<DescriptionPropsType>`     
        color: ${props => props.themeName === "default" ? ({theme}) => theme.homeSlider.green : ({theme}) => theme.homeSlider.color}
    `}
    
    ${props => props.colorDescriptionType === "black" && css<DescriptionPropsType>`     
        color: ${props => props.themeName === "default" ? ({theme}) => theme.homeSlider.black : ({theme}) => theme.homeSlider.color}
    `}
`

const Button = styled.button<ButtonPropsType>`
    padding: 20px 80px;
    border: none;    
    font-size: 1rem;
    line-height: 18px;
    font-weight: 700;  
    border-radius: 10px;
    margin-top: 2.2rem;

    color: ${props => props.themeName === "default" 
        ? ({theme}) => theme.color.defaultBtn
        : ({theme}) => theme.homeSlider.color};

    outline: 1px solid ${props => props.themeName === "default" 
        ? ({theme}) => theme.color.outline 
        : ({theme}) => theme.homeSlider.color}; 
    
    &:hover {
        background: ${props => props.bgBtnType === "green"
            ? ({theme}) => theme.bgCol.btn.primaryHover
            : ({theme}) => theme.bgCol.btn.secondaryHover};      
    }

    ${props => props.bgBtnType === "orange" && css<ButtonPropsType>`    
        background: ${props => props.themeName === "default" 
            ? ({theme}) => theme.homeSlider.orange 
            : ({theme}) => theme.homeSlider.transparent}
    `}

    ${props => props.bgBtnType === "green" && css<ButtonPropsType>`    
        background: ${props => props.themeName === "default" 
            ? ({theme}) => theme.homeSlider.green 
            : ({theme}) => theme.homeSlider.transparent}
    `}
`