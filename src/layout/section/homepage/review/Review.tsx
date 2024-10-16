
import { styled } from 'styled-components';
import { StyledH2 } from '../../../../components/StyledH2';
import { StyledOrangeLink } from '../../../../components/StyledBtn';
import { useState } from 'react';

type ReviewPropsType = {
    lastReview: {
        date:string
        patient:string
        history:string
        liked?:string
        notLiked?:string
        сlinicAdministrator:string
    }
    windowWidth:number
}

export const Review: React.FC<ReviewPropsType> = (props: ReviewPropsType) => {
    const [state, setState] = useState(null);

    setTimeout(() => {
        setState((window as any).store.getState().homePage.lastReview)
    }, 3000)

    const lastReview: any = state ?? props.lastReview;
    

    const breakpoint = 767;
    return (
        <StyledReview>
            <Wrap>
                <StyledH2>Последний отзыв</StyledH2>
                { props.windowWidth > breakpoint && <StyledOrangeLink to="/reviews">Все отзывы</StyledOrangeLink> }                
            </Wrap>
            <Content>
                <span>Пациент:</span>
                <span><div>{lastReview.patient}</div><div>{lastReview.date}</div></span>
                <span>История пациента:</span>
                <span>{lastReview.history}</span>                
                <span>{lastReview.liked ? "Понравилось:" : ""}</span>
                <span>{lastReview.liked}</span>
                <span>{lastReview.notLiked ? "Не понравилось:" : ""}</span>
                <span>{lastReview.notLiked}</span>
                <span>Представитель<br />клиники:</span>
                <span>{lastReview.сlinicAdministrator}</span>
            </Content>
            { props.windowWidth <= breakpoint && <StyledOrangeLink to="/reviews">Все отзывы</StyledOrangeLink> }
            
        </StyledReview>
    );
};

const StyledReview = styled.section`
    
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

    @media ${({theme}) => theme.media.tablet} {
        margin-bottom: 24px;
        height: auto;

        ${StyledH2} {
            margin: 0 auto;
        }        
    }

    @media ${({theme}) => theme.media.mobile} {
        margin-bottom: 10px;
    }
`
const Content = styled.div`
    padding: 20px 40px;
    background-color: ${({theme}) => theme.bgCol.homePage.review};
    border-radius: 24px;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 60px;
    row-gap: 20px;

    span:nth-child(odd) {
        font-size: calc((100vw - 26rem)/(137 - 26) * (1.43 - 0.86) + 0.86rem);
        font-weight: 700;
    }
    span:nth-child(even) {
        font-size: calc((100vw - 26rem)/(137 - 26) * (1.14 - 1) + 1rem);
        font-weight: 500;
    }
    span:nth-child(2) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    @media ${({theme}) => theme.media.tablet} {
        padding: 20px;
        margin-bottom: 20px;
    }

    @media ${({theme}) => theme.media.mobile} {
        padding: 15px;
        grid-template-columns: 1fr;
        row-gap: 8px;

        span:nth-child(even) {
            margin-bottom: 12px;
        }

    }
`