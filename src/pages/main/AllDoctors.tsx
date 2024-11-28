import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Container } from '../../components/Container';
import { ScrollTop } from '../../components/ScrollTop';
import { PageTopPart } from '../../components/PageTopPart';
import { Doctor } from '../../layout/section/homepage/doctors/Doctor';
import { StyledLoadMoreBtn } from '../../components/StyledBtn';

type AllDoctorsPropsType = {
    allDoctorsPage: {
      pageTopPart: {
        pageName:string        
        srcDesktop:string  
        srcTablet:string         
        srcMobile:string
        title:string
      },
      doctors: Array<{
        fullName: string,
        post: string,
        workExperience: string,
        foto: string,
        path: string,
        status: string[],
        branches: string[]
      }>,
      step:number
    },
    fontSize:number
}

const AllDoctors: React.FC<AllDoctorsPropsType> = (props: AllDoctorsPropsType) => {

  let filteredDoctors = [];

  // switch(selectDirection) {
  //   case "акушер-гинеколог":
  //     filteredDoctors = props.allDoctorsPage.doctors.filter(doctor => doctor.status.includes("акушер-гинеколог"));
  //     break;
  //   case "репродуктолог":
  //     filteredDoctors = props.allDoctorsPage.doctors.filter(doctor => doctor.status.includes("репродуктолог"));
  //     break;
  //   case "терапевт":
  //     filteredDoctors = props.allDoctorsPage.doctors.filter(doctor => doctor.status.includes("терапевт"));
  //     break;
  //   case "врач ультразвуковой диагностики":
  //     filteredDoctors = props.allDoctorsPage.doctors.filter(doctor => doctor.status.includes("врач ультразвуковой диагностики"));
  //     break;
  //   default: filteredDoctors = props.allDoctorsPage.doctors    
  // }

  const totalDoctors = filteredDoctors.length;

  const [count, setCount] = useState(props.allDoctorsPage.step);

  const handleLoadMore = () => {
    setCount(prev => prev += props.allDoctorsPage.step);  
  }

  return (
      <StyledAllDoctors>
        <ScrollTop />          
        <PageTopPart 
          pageTopPart={props.allDoctorsPage.pageTopPart}            
        />
        <Container>
          <DoctorList>
                {
                  props.allDoctorsPage.doctors.map((doctor, index) => {
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
          <WrapBtn>
            <StyledLoadMoreBtn onClick={handleLoadMore} disabled={totalDoctors <= count}>
                {totalDoctors <= count ? "Показали всё что было" : "Показать еще"}
            </StyledLoadMoreBtn>
        </WrapBtn>
        </Container>           
      </StyledAllDoctors>
  );
};

const StyledAllDoctors = styled.div`  
`


const DoctorList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;    
`

const WrapBtn = styled.div` 
  width: 100%;
  text-align: center;

  ${StyledLoadMoreBtn} {
    max-width: 628px;
    width: 100%;
    padding: 16px;
  }
`


export default AllDoctors;
