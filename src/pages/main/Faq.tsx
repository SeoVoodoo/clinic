import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { ScrollTop } from '../../components/ScrollTop';
import { PageTopPart } from '../../components/PageTopPart';
import { Container } from '../../components/Container';
import { StyledH2 } from '../../components/StyledH2';
import { StyledBtn, StyledCallbackBtn, StyledDelQuestionBtn, StyledLoadMoreBtn } from '../../components/StyledBtn';
import { ModalWindowAskQuestion } from '../../components/pop-up/ModalWindowAskQuestion';
import { Filter } from '../../components/Filter';
import { ModalWindowAnswerQuestion } from '../../components/pop-up/ModalWindowAnswerQuestion';

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
    doctors: string[]
    questions: Array<{
      direction:string
      userName:string
      question:string
      doctorName:string
      answer:string
      date:string
    }>
    step:number
    newQuestions: Array<{      
      userName:string
      question:string      
    }>
  }
  setIsOpenModalWindowThanks: Function
}


const Faq: React.FC<FaqPropsType> = (props: FaqPropsType) => {
  const [isOpenModalWindowAskQuestion, setIsOpenModalWindowAskQuestion] = useState(false);
  const [isOpenModalWindowAnswerQuestion, setIsOpenModalWindowAnswerQuestion] = useState(false);
  const [selectDirection, setSelectDirection] = useState("Все направления");
  const [scroll, setScroll] = useState(0);
  

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
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

  const totalQuestions = filteredQuestions.length;

  const handleOpenModalWindowAskQuestion = (e: {target:any}) => {
    const name = e.target.innerText;
    window.localStorage.setItem('nameBtn', `${name}`)
    setIsOpenModalWindowAskQuestion(true);    
  }
  const handleOpenModalWindowAnswerQuestion = (username:string, question:string) => {
    window.localStorage.setItem('username', `${username}`);
    window.localStorage.setItem('question', `${question}`);
    setIsOpenModalWindowAnswerQuestion(true);
  }

  const handleSuccess = () => {
    setIsOpenModalWindowAskQuestion(false);        
    props.setIsOpenModalWindowThanks(true);
  }

  const handleError = () => {
    alert("Упс, что-то пошло не так..");  
  }
  const [count, setCount] = useState(props.faqPage.step);
  
  const handleLoadMore = () => {
    setCount(prev => prev += props.faqPage.step);  
  }
  
  
  useEffect(() => {

    const clientWidthStart = document.body.clientWidth;       
      
    if(isOpenModalWindowAskQuestion || isOpenModalWindowAnswerQuestion) {
        document.body.style.width= "100%";
        document.body.style.overflowY = "hidden";
        const delta = document.body.clientWidth - clientWidthStart;        
        document.body.style.paddingRight = `${delta}px`;
      }
    return () => {
        document.body.style.width= "";
        document.body.style.overflowY = "";
        document.body.style.paddingRight = "";       
    }        
  }, [isOpenModalWindowAskQuestion || isOpenModalWindowAnswerQuestion]);

  
  return (    
    <>
      {isOpenModalWindowAskQuestion && 
        <ModalWindowAskQuestion          
          setIsOpenModalWindowAskQuestion={setIsOpenModalWindowAskQuestion}
          onError={handleError}
          onSuccess={handleSuccess}           
          scroll={scroll}       
        />
      }
      {isOpenModalWindowAnswerQuestion && 
        <ModalWindowAnswerQuestion 
          setIsOpenModalWindowAnswerQuestion={setIsOpenModalWindowAnswerQuestion}
          onError={handleError}
          onSuccess={handleSuccess}
          directions={props.faqPage.directions}
          doctors={props.faqPage.doctors}
          scroll={scroll}
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
            <WrapBtn>
              <StyledCallbackBtn onClick={(e) => handleOpenModalWindowAskQuestion(e)}>
                Задать вопрос
              </StyledCallbackBtn>
            </WrapBtn>
          </AskQuestion>

          <StyledH2 style={{textAlign: "left"}}><span>Новые вопросы</span></StyledH2>
          <List>
            {props.faqPage.newQuestions.map((q, index) => {
              return (
                <Question key={index}>
                    <QuestionText>
                      <UzerName>{q.userName}:</UzerName> {q.question}
                    </QuestionText>                    
                    <StyledBtn onClick={() => handleOpenModalWindowAnswerQuestion(q.userName, q.question)}>
                      Ответить
                    </StyledBtn>
                    <StyledDelQuestionBtn>
                      Удалить вопрос
                    </StyledDelQuestionBtn>                                                             
                </Question>
              );
            })}
          </List>
          <StyledH2 style={{textAlign: "left"}}>Вопросы пользователей</StyledH2>
          <Filter  
            directions={props.faqPage.directions}
            selectDirection={selectDirection}
            setSelectDirection={setSelectDirection}
            setCount={setCount}
            step={props.faqPage.step}
          />
          <List>
            {
              filteredQuestions.slice(0, count).map((qa, index) => {
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
          <WrapBtn>
            <StyledLoadMoreBtn onClick={handleLoadMore} disabled={totalQuestions <= count}>
                {totalQuestions <= count ? "Показали всё что было" : "Показать еще"}
            </StyledLoadMoreBtn>
          </WrapBtn>
        </Container>
      </StyledFaq>
    </>
  );
};

export default Faq;

const StyledFaq = styled.div`  
  padding-bottom: 50px;
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
`
const WrapBtn = styled.div` 
  width: 100%;
  text-align: center;

  ${StyledCallbackBtn}, ${StyledLoadMoreBtn} {
    max-width: 628px;
    width: 100%;
    padding: 16px;
  }
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`
const Question = styled.li`
  padding: 20px;
  border-radius: 24px;
  background-color: ${({theme}) => theme.bgCol.btn.newQuestion};
  outline: 1px solid ${({theme}) => theme.color.outline};
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  grid-template-areas: 
  "question question"  
  "btn1 btn2"; 

  & > span span:first-child {
    color: ${({theme}) => theme.color.multiСhannel};
  }

  ${StyledBtn} {
    max-width: 300px;
    width: 100%;
    padding: 16px;
  }
  @media ${({theme}) => theme.media.mobile}{
    grid-template-columns: 1fr;    
    grid-template-areas: 
    "question"
    "btn1"  
    "btn2";
  }
`
const ListItem = styled.li<{index:number}>`  
  padding: 20px;
  border-radius: 24px;
  outline: 1px solid ${({theme}) => theme.color.outline};
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