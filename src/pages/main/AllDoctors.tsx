import React from 'react';
import { styled } from 'styled-components';
import { Container } from '../../components/Container';

const AllDoctors = () => {
    return (
        <StyledAllDoctors>
          <Container>
            Страница всех врачей
          </Container>           
        </StyledAllDoctors>
    );
};

const StyledAllDoctors = styled.div`
  
`
export default AllDoctors;
