import React from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../../../../components/StyledH2';
import { StyledOrangeLink } from '../../../../components/StyledBtn';
import { Doctor } from './Doctor';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';

type TabletDoctorsPropsType = {
    doctors: Array<{
        fullName:string
        post:string
        workExperience:string
        foto:string
        path:string
      }>,
      fontSize:number
}

export const TabletDoctors: React.FC<TabletDoctorsPropsType> = (props: TabletDoctorsPropsType) => {    
    
    return (
        <StyledTabletDoctors className="bulletLocation_doctors">            
                <StyledH2><span>Наши врачи</span></StyledH2>
            <WrapSlider>                   
                <Swiper 
                    //loop={true}
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,                
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="mySwiper"
                    //slidesPerView={'auto'}
                    //initialSlide={0}
                >                   
                    {
                        props.doctors.map((doctor, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Doctor                                
                                        doctor={doctor}
                                        fontSize={props.fontSize}
                                    />
                                </SwiperSlide>
                            );                        
                        })
                    }                     
                </Swiper>                
            </WrapSlider>
            <StyledOrangeLink to="/doctors">Все врачи</StyledOrangeLink>
                                        
        </StyledTabletDoctors>
    );
};

const StyledTabletDoctors = styled.section`
    padding: 20px 0;    
`

const WrapSlider = styled.div`
    max-width: 304px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 70px;
    
    @media ${({theme}) => theme.media.mobile} {
        max-width: 224px;
    }
`

