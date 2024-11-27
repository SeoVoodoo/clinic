import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
//import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Container } from '../../../components/Container';
import "../../../styles/slider/certificate.css";
import '../../../lib/baguetteBox.min.css';
import baguetteBox from '../../../lib/baguetteBox';
import { StyledH2 } from '../../../components/StyledH2';



type CertificatesPropsType = {
    certificates:string[]
}

export const Certificates: React.FC<CertificatesPropsType> = (props:CertificatesPropsType) => {

    useEffect(() => {
        
        const script = document.createElement('script');
        script.src = "https://localhost:3000/src/lib/baguetteBox.js";        
        //script.defer = true;
        script.async = true;
        document.body.appendChild(script);  
        
        baguetteBox.run('.gallery');

        return () => {
            document.body.removeChild(script);
        }

    }, [])

    return (
        <StyledCertificates>
            <Container>
                <StyledH2><span>Сертификаты и дипломы</span></StyledH2>
                <div className="gallery">
                    <Swiper                    
                        initialSlide={1}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                        rotate: 50,
                        stretch: 1,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"
                    >
                        
                        {props.certificates.map((path, index) => {
                            return (
                                <SwiperSlide>
                                    <a href={path} key={index}>
                                        <img src={path} alt="" />
                                    </a>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>  
                </div>            
            </Container>          
        </StyledCertificates>
    );
};

const StyledCertificates = styled.div`
    ${StyledH2} {
        text-align: center !important;
    }
`