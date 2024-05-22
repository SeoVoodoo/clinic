import React from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../../../../components/StyledH2';
import { StyledOrangeLink } from '../../../../components/StyledBtn';
import { Doctor } from './Doctor';

type DesctopDoctorsPropsType = {
    doctors: Array<{
        fullName:string
        post:string
        workExperience:string
        foto:string
        path:string
      }>,
      fontSize:number
}

export const DesctopDoctors: React.FC<DesctopDoctorsPropsType> = (props: DesctopDoctorsPropsType) => {    
    
    return (
        <StyledDesctopDoctors>
            <Wrap>
                <StyledH2><span>Наши врачи</span></StyledH2>
                <StyledOrangeLink to="/doctors">Все врачи</StyledOrangeLink>
            </Wrap>
            <DoctorList>
                {
                    props.doctors.map((doctor, index) => {
                        return (
                            <Doctor 
                                key={index}
                                doctor={doctor}
                                fontSize={props.fontSize}
                            />
                        );                        
                    })
                }
            </DoctorList>
                                        
        </StyledDesctopDoctors>
    );
};

const StyledDesctopDoctors = styled.section`
    padding: 50px 0;    
`

const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 100%;
    height: 60px;
    margin-bottom: 40px; 
    
    ${StyledH2} {
        margin-bottom: 0;
    }
`

const DoctorList = styled.ul`
    display: flex;
    //flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;    
`