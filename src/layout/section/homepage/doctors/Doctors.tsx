import React from 'react';
import { DesctopDoctors } from './DesctopDoctors';
import { LaptopDoctors } from './LaptopDoctors';
import { TabletDoctors } from './TabletDoctors';
import { WindowSize } from '../../../../hooks/WindowSize';

type DoctorsPropsType = {
    doctors: Array<{
        fullName:string
        post:string
        workExperience:string
        foto:string
        path:string
        }>
    fontSize:number
}

export const Doctors: React.FC<DoctorsPropsType> = (props: DoctorsPropsType) => {
    const width = WindowSize();    
    const laptop = 1200;
    const tablet = 767;

    return (
        <>
            {width > tablet 
            ? (width > laptop 
                ? <DesctopDoctors doctors={props.doctors} fontSize={props.fontSize} />
                : <LaptopDoctors doctors={props.doctors} fontSize={props.fontSize} />
            )         
            : <TabletDoctors doctors={props.doctors} fontSize={props.fontSize}/>        
            }
        </>
    );
};



//const [width, setWidth] = useState(window.innerWidth);
// useEffect(() => {    
    //     const handleWindowResize = () => setWidth(window.innerWidth);

    //     window.addEventListener('resize', handleWindowResize);

    //     return () => {
    //         window.removeEventListener('resize', handleWindowResize);
    //     }
    // }, []);