import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { StyledH2 } from '../../../../components/StyledH2';
import { DesctopDoctors } from './DesctopDoctors';
import { LaptopDoctors } from './LaptopDoctors';
import { TabletDoctors } from './TabletDoctors';

type DoctorsPropsType = {
    doctors: Array<{
        fullName:string
        post:string
        workExperience:string
        foto:string
        path:string
      }>,
      fontSize:number
}

export const Doctors: React.FC<DoctorsPropsType> = (props: DoctorsPropsType) => {

    const [width, setWidth] = useState(window.innerWidth);
    const laptop = 1200;
    const tablet = 767;    
    //console.log("width", width);
    useEffect(() => {    
        const handleWindowResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleWindowResize );

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, []);

    return width > tablet 
        ? (width > laptop 
            ? <DesctopDoctors doctors={props.doctors} fontSize={props.fontSize} />
            : <LaptopDoctors doctors={props.doctors} fontSize={props.fontSize} />
        )         
        : <TabletDoctors doctors={props.doctors} fontSize={props.fontSize}/>;
};

const StyledDoctors = styled.section`
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