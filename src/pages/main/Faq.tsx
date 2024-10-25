import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { ScrollTop } from '../../components/ScrollTop';
import { PageTopPart } from '../../components/PageTopPart';
import { Container } from '../../components/Container';
import { StyledH2 } from '../../components/StyledH2';
import { StyledCallbackBtn } from '../../components/StyledBtn';
import { ModalWindowAskQuestion } from '../../components/pop-up/ModalWindowAskQuestion';
import { Filter } from '../../components/Filter';

type FaqPropsType = {  
  faqPage: {
    pageTopPart: {
      pageName:string
      title:string
      srcDesktop:string  
      srcTablet:string         
      srcMobile:string
    }
    directions: string[]
    questions: Array<{
      direction:string
      userName:string
      question:string
      doctorName:string
      answer:string
      date:string
    }>
  }
}

const Faq: React.FC<FaqPropsType> = (props: FaqPropsType) => {
  const [isOpenModalWindowAskQuestion, setIsOpenModalWindowAskQuestion] = useState(false);
  const [selectDirection, setSelectDirection] = useState("Все направления");
  
  let filteredQuestions = [];

  switch(selectDirection) {
    case "Лечение бесплодия":
      filteredQuestions = props.faqPage.questions.filter(question => question.direction === "Лечение бесплодия");
      break;
    case "Гинекология":
      filteredQuestions = props.faqPage.questions.filter(question => question.direction === "Гинекология");
      break;
    case "Услуги для беременных":
      filteredQuestions = props.faqPage.questions.filter(question => question.direction === "Услуги для беременных");
      break;
    case "Урологические операции":
      filteredQuestions = props.faqPage.questions.filter(question => question.direction === "Урологические операции");
      break;
    default: filteredQuestions = props.faqPage.questions    
  }

  const handleToggleModalWindowAskQuestion = () => {
    setIsOpenModalWindowAskQuestion(prev => !prev);
  }

  const handleSuccess = () => {
    setIsOpenModalWindowAskQuestion(false);    
    //setIsOpenModalWindowThanks(true);
  }

  const handleError = () => {
    alert("Упс, что-то пошло не так..");  
  }
  
  useEffect(() => {
    if(isOpenModalWindowAskQuestion) {
        document.body.style.overflowY = "scroll";
        document.body.style.position = "fixed";
        document.body.style.width= "100%";
        //document.body.style.height= "auto";
    }
    return () => {
        document.body.style.overflowY = "unset";
        document.body.style.position = "unset";
        document.body.style.width= "unset";
        //document.body.style.height= "unset";
    }        
  }, [isOpenModalWindowAskQuestion]);

  return (    
    <>
      {isOpenModalWindowAskQuestion && 
        <ModalWindowAskQuestion 
          handleToggleModalWindowAskQuestion={handleToggleModalWindowAskQuestion}
          onError={handleError}
          onSuccess={handleSuccess}
        />
      }
      <StyledFaq>
        <ScrollTop />          
        <PageTopPart 
          pageTopPart={props.faqPage.pageTopPart}            
        />
        <Container>
          <AskQuestion>
            <StyledH2>
              Есть вопрос?<br />Задайте его нашему врачу
            </StyledH2>
            <StyledCallbackBtn onClick={handleToggleModalWindowAskQuestion}>
              Задать вопрос
            </StyledCallbackBtn>
          </AskQuestion>
          <StyledH2 style={{textAlign: "left"}}>Вопросы пользователей</StyledH2>
          <Filter  
            directions={props.faqPage.directions}
            selectDirection={selectDirection}
            setSelectDirection={setSelectDirection}
          />
          <List>
            {
              filteredQuestions.map((qa, index) => {
                return (
                  <ListItem key={index} index={index}>
                    <ImmutableText1>Направление:</ImmutableText1>
                    <ImmutableText2>Вопрос:</ImmutableText2>
                    <ImmutableText3>Ответ:</ImmutableText3>
                    <Direction>{qa.direction}</Direction>                        
                    <Data>{qa.date}</Data>                   
                    <QuestionText>
                      <UzerName>{qa.userName}:</UzerName> {qa.question}
                    </QuestionText>
                    <DoctorName>{qa.doctorName}</DoctorName>
                    <AnswerText>{qa.answer}</AnswerText>                                          
                  </ListItem>
                );
            })}
          </List>
        </Container>
      </StyledFaq>
    </>
  );
};

export default Faq;

const StyledFaq = styled.div`  
`

const AskQuestion = styled.div`  
  width: 100%;
  padding: 28px 0 40px;
  background-color: ${({theme}) => theme.color.primary};
  border-radius: 24px;
  margin: 40px 0 80px;
  text-align: center;

  ${StyledH2} {
    color: ${({theme}) => theme.color.defaultTextHover}
  }

  ${StyledCallbackBtn} {
    max-width: 628px;
    width: 100%;
    padding: 16px;
  }
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 60px;
`
const ListItem = styled.li<{index:number}>`  
  padding: 20px;
  border-radius: 24px;

  background-color: ${props => props.index % 2 === 0 
  ? ({theme}) => theme.bgCol.footer 
  : ({theme}) => theme.bgCol.homePage.doctors};  

  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  grid-template-areas: 
  "immutableText1 direction data"
  "immutableText2 question question"
  "immutableText3 doctor doctor"
  ". answer answer";  
  
  span:nth-child(6) {
    margin-bottom: 30px;
  }    
       
  @media ${({theme}) => theme.media.mobile}{
    padding: 15px;
    grid-template-columns: auto 1fr;
    grid-template-areas: 
    "data data"
    "immutableText1 direction"
    "immutableText2 immutableText2"
    "question question"
    "immutableText3 doctor"
    "answer answer"; 
    
    span:nth-child(6) {
      margin-bottom: 10px;
    }
  }
`
const ImmutableText1 = styled.span`
  grid-area: immutableText1;
  font-weight: 500;
  font-size: 1rem;  
  color: ${({theme}) => theme.color.multiСhannel};

  @media ${({theme}) => theme.media.mobile}{
    margin-bottom: 10px;
  }
`
const ImmutableText2 = styled.span`
  grid-area: immutableText2;
  font-weight: 500;
  font-size: 1rem;  
  color: ${({theme}) => theme.color.multiСhannel};
`
const ImmutableText3 = styled.span`
  grid-area: immutableText3;
  font-weight: 500;
  font-size: 1rem;  
  color: ${({theme}) => theme.color.multiСhannel}; 
`
const Direction = styled.span`
  grid-area: direction;
  font-weight: 700;
  font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
  text-decoration: underline;
`
const Data = styled.span`
  grid-area: data;
  font-weight: 500;
  font-size: 1rem;  
  color: ${({theme}) => theme.color.multiСhannel};
`
const QuestionText = styled.span`
  grid-area: question;
  padding-right: 50px;    
  font-weight: 700;
  font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
  color: ${({theme}) => theme.color.primary};

  @media ${({theme}) => theme.media.tablet}{
    padding-right: 0;
  }
`
const UzerName = styled.span`
  display: inline-block;  
  margin-right: 8px;
  font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
  font-weight: 500;
  color: ${({theme}) => theme.color.defaultText};
`
const DoctorName = styled.span`
  grid-area: doctor;  
  font-weight: 700;
  font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
  text-decoration: underline;

  @media ${({theme}) => theme.media.mobile}{
    margin-left: -60px;
  }
`
const AnswerText = styled.span`
  grid-area: answer;
  padding-right: 50px;
  font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
  font-weight: 500;

  @media ${({theme}) => theme.media.tablet}{
    padding-right: 0;
  }
`