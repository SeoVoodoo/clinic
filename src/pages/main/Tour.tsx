import React from 'react';
import { Container } from '../../components/Container';
import { ScrollTop } from '../../components/ScrollTop';

const Tour: React.FC = () => {
    return (
        <>
            <ScrollTop />
            <Container>                
            <iframe
                    src="/virtual_tour/tour.html"
                    loading="lazy"
                    frameBorder="0"
                    scrolling="no"
                    style={{ display: 'block', margin: '0 auto' }}
                    width="100%"
                    height="350"
                    title="Тур"
                ></iframe>
            </Container>
        </>
        
    );
};

export default Tour;
