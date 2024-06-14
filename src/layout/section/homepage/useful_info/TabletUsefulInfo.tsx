import React from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../../../../components/StyledH2';
import { PreviewArticle } from './PreviewArticle';
import { StyledOrangeLink } from '../../../../components/StyledBtn';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


type TabletUsefulInfoPropsType = {
    usefulInfo: Array<{
        id:number
        img:string
        title:string        
        path:string
        }>
    fontSize:number
}

export const TabletUsefulInfo: React.FC<TabletUsefulInfoPropsType> = (props: TabletUsefulInfoPropsType) => {
    const usefulInfoR = [...props.usefulInfo].reverse();
    
    return (
        <StyledTabletUsefulInfo className="bulletLocation_news">
           <StyledH2><span>Полезная информация</span></StyledH2>
            <WrapSlider>                 
                <Swiper 
                    pagination={true} 
                    modules={[Pagination]}
                    grabCursor={true}                                
                    slidesPerView={'auto'}
                    spaceBetween={18}
                    //loop={true} 
                    initialSlide={0}
                    className="mySwiper"
                >                   
                    {
                        usefulInfoR.map((article) => {
                            return (
                                <SwiperSlide key={article.id}>
                                    <PreviewArticle 
                                        article={article}
                                        fontSize={props.fontSize}
                                    />
                                </SwiperSlide>
                            );                        
                        })
                    }                     
                </Swiper>                
            </WrapSlider>
            <StyledOrangeLink to="/usefulInfo">Все записи</StyledOrangeLink>     
        </StyledTabletUsefulInfo>
    );
};

const StyledTabletUsefulInfo = styled.section`
    padding: 20px 0;    
`

const WrapSlider = styled.div`
    margin-bottom: 18px;   
`