import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { PageTopPart } from '../../components/PageTopPart';
import { Container } from '../../components/Container';
import { updateLastReviewActionCreater } from '../../redux/homeReducer';

type ReviewsPropsType = {
  windowWidth:number
  reviewsPage: {
    pageTopPart: {
      pageName:string
      title:string
      srcDesktop:string           
      srcMobile:string
    }
  }  
  dispatch:Function
  hidden?:boolean
}

export const Reviews: React.FC<ReviewsPropsType> = (props: ReviewsPropsType) => {

  
  useEffect(() => {

    const script = document.createElement('script');
    script.src = 'https://prodoctorov.ru/static/js/widget_big.js?v7';
    script.defer = true;
    document.body.appendChild(script);    
    
    return () => {
      document.body.removeChild(script);
    }
  }, [])

 
  setTimeout(() => {
    const reviews__header = document.querySelector('.pd-widget-reviews__header > div') as HTMLElement;      
    const patient = reviews__header.innerHTML;

    const reviews__date = document.querySelector('.pd-widget-reviews__date') as HTMLElement; 
    const date = reviews__date.innerHTML;

    const reviews__review = document.querySelector('.pd-widget-reviews__review') as HTMLElement;
    const comments = reviews__review.querySelectorAll('.pd-widget-reviews__comment-text');
    const history = comments[0].innerHTML;
    const plus = comments[1].innerHTML;
    const minus = comments[2] ? comments[2].innerHTML : "";

    const reviews__reply_text = document.querySelector('.pd-widget-reviews__reply-text') as HTMLElement;
    const answer = reviews__reply_text.innerHTML;

    const action = updateLastReviewActionCreater(patient, date, history, plus, minus, answer);
    props.dispatch(action);   

  }, 1000);

  

  return (    
    <StyledReviews hidden={props.hidden}>
    { !props.hidden && <PageTopPart 
      pageTopPart={props.reviewsPage.pageTopPart} 
      windowWidth={props.windowWidth}
    />}
    <Container> 
      <Wrap>
      <div
        id="pd_widget_big"
        data-lpu="40755"
        dangerouslySetInnerHTML={{ __html: `
            <div class="pd_rate_header">Отзывы о «Альянс клиник» на Сурова<br>
            <a target="_blank" class="pd_rate_new" href="https://prodoctorov.ru/new/rate/lpu/40755/">Оставить отзыв</a></div>

            <div id="pd_widget_big_content"></div>
            <a target="_blank" href="https://prodoctorov.ru/ulyanovsk/lpu/40755-alyans-klinik-na-surova/#otzivi" class="pd_read_all">Читать все отзывы</a>

            <span id="pd_powered_by"><a target="_blank" href="https://prodoctorov.ru"><img class='pd_logo' src="https://prodoctorov.ru/static/_v1/pd/logos/logo-pd-widget.png"></a></span>
        `}}
      />  
      </Wrap>    
    </Container> 
    </StyledReviews>
          
  );
};

const StyledReviews = styled.div<{hidden?:boolean}>`
  width: 100%;
  display: ${props => props.hidden ? "none" : "block"};    
`
const Wrap = styled.div`
  display: flex;
  justify-content: center;   
`

