import React from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../../../../components/StyledH2';
import { StyledOrangeLink } from '../../../../components/StyledBtn';
import { PreviewLastNews } from './PreviewLastNews';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type TabletLastNewsPropsType = {
    lastNews: Array<{
        id:number
        img:string
        title:string
        data:string
        prev:string
        path:string
        }>
    fontSize:number
}

export const TabletLastNews: React.FC<TabletLastNewsPropsType> = (props: TabletLastNewsPropsType) => {
    const lastNewsR = [...props.lastNews].reverse();
    return (
        <StyledTabletLastNews className="bulletLocation_news">            
                <StyledH2><span>Новости клиники</span></StyledH2>
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
                        lastNewsR.map((news) => {
                            return (
                                <SwiperSlide key={news.id}>
                                    <PreviewLastNews 
                                        news={news}
                                        fontSize={props.fontSize}
                                    />
                                </SwiperSlide>
                            );                        
                        })
                    }                     
                </Swiper>                
            </WrapSlider>
            <StyledOrangeLink to="/news">Все новости</StyledOrangeLink>
                                        
        </StyledTabletLastNews>
    );
};

const StyledTabletLastNews = styled.section`
    padding: 20px 0;    
`

const WrapSlider = styled.div`
    margin-bottom: 18px;   
`
