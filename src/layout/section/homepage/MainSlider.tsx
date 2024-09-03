import React from 'react';
import { css, styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import "../../../styles/slider/Slider.css";
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';


type MainSliderPropsType = {
    data: Array<{
        srcDesktop:string
        srcTablet:string
        srcMobile:string
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
    fontSize:number
} 

export const MainSlider: React.FC<MainSliderPropsType> =  (props: MainSliderPropsType) => {
    
    
    return (
        <StyledMainSlider>
            <Swiper                
                pagination={true} 
                modules={[EffectFade, Pagination, Autoplay]}                                
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}                                
            >
                {props.data.map((slide, index) =>
                    <SwiperSlide key={index}> 
                    <Wrap>
                    <picture>  
                        <source media="(max-width: 360px)" srcSet={slide.srcMobile} />
                        <source media="(min-width: 768px)" srcSet={slide.srcDesktop} />                    
                        <img src={slide.srcTablet} alt={slide.imageAlt} />
                    </picture> 
                    </Wrap>
                        <Info>
                            <Title 
                                colorTitleType={slide.colorTitleType} 
                                themeName={props.themeName}
                                fontSize={props.fontSize}
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
                                fontSize={props.fontSize}
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
    /* img {
        max-width: 1920px;
        width: 100%;        
        object-fit: cover;
    }
    @media ${({theme}) => theme.media.tablet}{
        img {
            max-width: 100%;
            width: 100%; 
            height: 100%;
            object-position: center;
        }
    } */
`
const Wrap = styled.div`
    max-width: 1920px;
    height: auto;
    width: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }

    @media ${({theme}) => theme.media.lg992}{
        max-width: 992px;
        height: 460px;

        img {
            object-position: right;
        }
    }

    @media ${({theme}) => theme.media.tablet}{
        max-width: 767px;
        height: 350px;
    }

    @media screen and (max-width: 360px) {
        max-width: 360px;
        height: 274px;
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
    fontSize:number    
}

type SubTitlePropsType = {
    colorSubTitleType:string | undefined
    themeName:string
}

type DescriptionPropsType = {
    colorDescriptionType:string | undefined
    descriptionWeight:number | undefined
    themeName:string
    fontSize:number
}

type ButtonPropsType = {
    bgBtnType:string
    themeName:string
}

const Title = styled.h2<TitlePropsType>`

    font-size: calc((100vw - 26rem)/(137 - 26) * (5 - 2) + 2rem);    
    /* margin-bottom: 1.7rem; */
    margin-bottom: 24px;
    max-width: ${props => props.fontSize > 14 ? "100%" : "625px"};
    line-height: ${props => props.fontSize > 14 ? "100%" : "120%"};  
    //line-height: 120%;
    
    @media ${({theme}) => theme.media.tablet}{
        margin-bottom: 0;    
    }

    @media ${({theme}) => theme.media.mobile}{
        line-height: ${props => props.fontSize > 14 ? "100%" : "2.2rem"};     
    }

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

    @media ${({theme}) => theme.media.tablet}{        
        margin-top: 20px;  
        margin-bottom: 0;  
    }

    @media ${({theme}) => theme.media.mobile}{
        max-width: 320px;
        margin-top: 15px;          
    }

    ${props => props.colorSubTitleType === "green" && css<SubTitlePropsType>`     
        color: ${props => props.themeName === "default" ? ({theme}) => theme.homeSlider.green : ({theme}) => theme.homeSlider.color}  
    `}    
`

const Description = styled.span<DescriptionPropsType>` 
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.86 - 1) + 1rem); 
    font-weight: ${props => props.descriptionWeight};

    @media ${({theme}) => theme.media.tablet}{
        margin-top: 16px;
    }

    @media ${({theme}) => theme.media.mobile}{
        max-width: ${props => props.fontSize > 14 ? "100%" : "300px"};        
    }
    
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

    @media ${({theme}) => theme.media.tablet}{
        padding: 16px 22px;
        margin-top: 20px;
    }

    @media ${({theme}) => theme.media.mobile}{
        margin-top: 15px;     
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