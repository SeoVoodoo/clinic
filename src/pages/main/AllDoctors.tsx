import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Container } from '../../components/Container';
import { ScrollTop } from '../../components/ScrollTop';
import { PageTopPart } from '../../components/PageTopPart';
import { Doctor } from '../../layout/section/homepage/doctors/Doctor';
import { StyledLoadMoreBtn } from '../../components/StyledBtn';
//import { DoctorFilter } from '../../components/DoctorFilter';
import { Filter } from '../../components/Filter';

type AllDoctorsPropsType = {
    allDoctorsPage: {
      pageTopPart: {
        pageName:string        
        srcDesktop:string  
        srcTablet:string         
        srcMobile:string
        title:string
      },
      specializations:string[]
      branches:string[]
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

  const [count, setCount] = useState(props.allDoctorsPage.step);  
  const [selectBranch, setSelectBranch] = useState("Все филиалы");
  const [selectSpecialization, setSelectSpecialization] = useState("Все врачи");  

  const filteredDoctors = props.allDoctorsPage.doctors
    .filter(doctor => selectBranch === "Все филиалы" ? true : doctor.branches.includes(selectBranch))
    .filter(doctor => selectSpecialization === "Все врачи" ? true : doctor.status.includes(selectSpecialization));  

  const totalDoctors = filteredDoctors.length;  

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
        <Filters>
          <div style={{width: "220px"}}>
            <Filter  
              currentOptionList={props.allDoctorsPage.branches}              
              selectOption={selectBranch}
              setSelectOption={setSelectBranch}
              setCount={setCount}
              step={props.allDoctorsPage.step}
            />          
          </div>
          <div style={{width: "324px"}}>
            <Filter  
              currentOptionList={props.allDoctorsPage.specializations}              
              selectOption={selectSpecialization}
              setSelectOption={setSelectSpecialization}
              setCount={setCount}
              step={props.allDoctorsPage.step}
            />  
          </div>
        </Filters>        
          <DoctorList>
                {
                  filteredDoctors.slice(0, count).map((doctor, index) => {
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

const Filters = styled.div`
  display: flex;  
  gap: 20px;
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
