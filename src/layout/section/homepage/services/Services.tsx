import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { styled } from 'styled-components';
import { StyledH2 } from '../../../../components/StyledH2';
import { ServicesSlide } from './ServicesSlide';
import { Pagination} from 'swiper/modules';

type ServicesPropsType = {
    services: Array<Array<{serviceName:string, path:string, bgPosition:string}>>
}

export const Services: React.FC<ServicesPropsType> = (props: ServicesPropsType) => {

    // const [width, setWidth] = useState(window.innerWidth);
    
    // const tablet = 767;    

    // const handleWindowResize = () => setWidth(window.innerWidth);

    // useEffect(() => {        
    //     window.addEventListener('resize', handleWindowResize );

    //     return () => {
    //         window.removeEventListener('resize', handleWindowResize)
    //     }
    // }, []);

    return (
        <StyledServices className="bulletLocation_services">
            <StyledH2>
                Наши <span>услуги</span>
            </StyledH2> 
            <Swiper 
                pagination={true} 
                modules={[Pagination]}                                
                slidesPerView={'auto'}
                spaceBetween={15}
                //loop={true} 
                initialSlide={0}
                className="mySwiper"
            >               
                {
                   props.services.map((arr, index) => {
                        return (
                            <SwiperSlide 
                                key={index}                                                                      
                            >
                                <ServicesSlide slide={arr} slideIndex={index} />
                            </SwiperSlide>
                        );
                   }) 
                }
            </Swiper>           
        </StyledServices>
    );
};

const StyledServices = styled.section`
    //margin-bottom: 80px;    
`