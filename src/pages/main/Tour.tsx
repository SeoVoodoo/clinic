import React from 'react';
import { Container } from '../../components/Container';

export const Tour = () => {
    return (
        <>
        <Container>          
          <iframe
                src="/virtual_tour/tour.html"
                frameBorder="0"
                scrolling="no"
                style={{ display: 'block', margin: '0 auto' }}
                width="100%"
                height="650"
                title="Тур"
            ></iframe>
        </Container>
        </>
        
    );
};
