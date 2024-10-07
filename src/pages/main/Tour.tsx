import React from 'react';
import { Container } from '../../components/Container';

const Tour: React.FC = () => {
    return (
        <>
        <Container> 
                
          <iframe
                src="/virtual_tour/tour.html"
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
