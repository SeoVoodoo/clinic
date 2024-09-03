import React, { useState } from 'react';
import { css, styled } from 'styled-components';
import { Container } from '../../components/Container';
import { Logo } from '../../components/logo/Logo';
import { ContactBox } from '../../components/contact_box/ContactBox';
import { SocialList } from '../../components/social/SocialList';
import { Addresses } from './addresses/Addresses';
import { DuplicateLinks } from './top-links/DuplicateLinks';
import { Link } from 'react-router-dom';
import { WindowSize } from '../../hooks/WindowSize';
import { FooterMenuDesktop } from './footerMenu/footerMenuDesktop/FooterMenuDesktop';
import { FooterMenuMobile } from './footerMenu/footerMenuMobile/FooterMenuMobile';

type FooterPropsType = {
    contacts: {
        phone1:string,
        phone2:string,
        email:string,
        callback:boolean
    }
    socials: Array<{id:string, link:string}>
    duplicateLinks: Array<{id:number, ancor:string, path:string}> 
    servicesLinks: Array<Array<{id:string, title:string, path:string, level:number}>> 
    addresses: string[]
    banner:{src:string, path:string}
    themeName:string
    fontSize:number
    handleToggleModalWindow: (windowName:string) => void 
}

export const Footer: React.FC<FooterPropsType> = (props: FooterPropsType) => {

    const windowWidth = WindowSize();
    const breakpoint = 576;
    const [isShow, setIsShow] = useState(false);
    const handleToggleFooterMenu = () => setIsShow(prev => !prev);
    

    return (
        <StyledFooter>
            <FooterTop>
                <Container>
                    <Top fontSize={props.fontSize}>
                        <Logo /> 
                        <DuplicateLinks duplicateLinks={props.duplicateLinks} fontSize={props.fontSize}/>
                        <ContactBox 
                            themeName={props.themeName} 
                            contacts={{...props.contacts, callback: true}} 
                            windowWidth={windowWidth}
                            handleToggleModalWindow={props.handleToggleModalWindow}
                        />
                        <SocialList themeName={props.themeName} socials={props.socials} width='40' height='40'/>
                        <License fontSize={props.fontSize}>
                            Лицензия ЛО-73-01-002159 от 03.12.2019 г. выдана Министерством здравоохранения Ульяновской области.                        
                        </License>
                        <Addresses addresses={props.addresses}/>
                        <ExternalLink href={props.banner.path} fontSize={props.fontSize}>
                            <img src={props.banner.src}/>
                        </ExternalLink>                    
                    </Top>
                    <Middle isShow={isShow}>
                        {!isShow && <Gradient />}
                        <Title>Услуги:</Title>
                        {windowWidth > breakpoint 
                            ? <FooterMenuDesktop servicesLinks={props.servicesLinks} /> 
                            : <FooterMenuMobile servicesLinks={props.servicesLinks} />}                                       
                    </Middle>
                </Container>                
            </FooterTop> 
            <FooterBottom>
                <Button onClick={handleToggleFooterMenu}>
                    <Line isShow={isShow}>
                    </Line>
                </Button>               
                <Container>  
                    <Bottom>
                        <span>© 2011-2025. Многопрофильный медицинский центр «Альянс Клиник».</span>
                        <Link to={'/privacy-policy'}>Политика конфиденциальности</Link>
                        <span>При использование материлаов сайта, ссылка на сайт обязательна.</span>                    
                    </Bottom>             
                </Container>
                <AdditionalBottomFooter>                    
                </AdditionalBottomFooter>
            </FooterBottom>            
        </StyledFooter>
    );
};

const StyledFooter = styled.section`    
    background-color: ${({theme}) => theme.bgCol.footer};
    margin-bottom: 0;
`
const FooterTop = styled.div`
    padding: 20px 0 40px;
    border-top: 1px solid  ${({theme}) => theme.color.primary};
    border-bottom: 1px solid  ${({theme}) => theme.color.primary};
`

const FooterBottom = styled.div`    
    position: relative;    
`

const AdditionalBottomFooter = styled.div`
    position: absolute;
    z-index: -10;
    //background-color: #f53245;
    background-color: ${({theme}) => theme.bgCol.footer};    
    left: 0;
    right: 0;
    bottom: -58px;
    width: 100%;
    height: 58px;
`

const Button = styled.button`
    position: absolute;
    z-index: 10;
    width: 60px;
    height: 60px;
    border: 1px solid  ${({theme}) => theme.color.primary};
    background-color: ${({theme}) => theme.bgCol.btn.footerSpoiler};

    border-radius: 50%;
    left: 50%;
    top: -30px;
    transform: translateX(-50%); 
`
const Line = styled.div<{isShow:boolean}>`
    width: 24px;
    height: 4px;
    margin: 0 auto;
    background-color: ${({theme}) => theme.color.primary};

    &::before {
        content: "";
        display: block;
        width: 24px;
        height: 4px;
        background-color: ${({theme}) => theme.color.primary};
        transform: ${props => props.isShow ? 'rotate(0)' : 'rotate(-90deg)'};
        transition: transform 0.6s ease-in-out; 
    }

    @media ${({theme}) => theme.media.tablet} {
        &::before {
            transition: transform 0.8s ease-in-out;    
        }

    }
`

const Top = styled.div<{fontSize:number}>`
    display: grid;
    grid-template-columns: 270px auto 1fr auto;
        
    grid-template-areas:
        "logo links contact addresses"
        "license links contact social"
        "banner banner banner banner"; 
    
    column-gap: 20px;     
    align-content: flex-start;
        
    div:nth-of-type(3) {
        justify-self: center;        
    }

    div:nth-of-type(4) {
        justify-self: end; 
        align-self: start; 
        padding-top: 0;
        margin-top: -20px;      
    }  


    @media ${({theme}) => theme.media.laptop} {
        ${props => props.fontSize <= 16 && css<{fontSize:number}>`

            grid-template-columns: auto 1fr auto;        
            grid-template-areas:
                "logo links contact"
                "license links addresses"
                ". . social"
                ". banner .";
                    
            div:nth-of-type(3) {
                justify-self: end; 
                margin-bottom: 12px;       
            }

            div:nth-of-type(4){
                margin-top: 0;  
            }
        `}

        ${props => props.fontSize > 16 && css<{fontSize:number}>`
            grid-template-columns: 320px;
                grid-template-areas:
                    "logo"
                    "license"
                    "links"
                    "contact"
                    "addresses"
                    "social"
                    "banner";
                justify-content: center;
                justify-items: center;  
                
                div:nth-of-type(3),  div:nth-of-type(4), ul{
                    justify-self: center;                               
                }

                div:nth-of-type(3) {
                    margin-bottom: 20px;
                }
        `}
    }

    @media ${({theme}) => theme.media.tablet} {
        ${props => props.fontSize <= 16 && css<{fontSize:number}>`
            grid-template-columns: 320px;
            grid-template-areas:
                "logo"
                "license"
                "links"
                "contact"
                "addresses"
                "social"
                "banner";
            justify-content: center;
            justify-items: center;  
            
            div:nth-of-type(3),  div:nth-of-type(4), ul{
                justify-self: center;                               
            }

            div:nth-of-type(3) {
                margin-bottom: 20px;
            }
        `}        
    }

    ${props => props.fontSize > 16 && css<{fontSize:number}>`

        grid-template-columns: auto auto;
        grid-template-areas:
            "logo addresses"
            "links contact"
            "links social"
            "license banner";
        justify-content: space-between;
        align-items: center; 
        
        div:nth-of-type(3) {
            justify-self: end;
            margin-bottom: 20px;        
        }
    `}
`

const License = styled.span<{fontSize:number}>`
    grid-area: license;
    margin-top: 18px;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem);
    max-width: 270px;
    width: 100%;
    height: auto;

    @media ${({theme}) => theme.media.tablet} {
        min-width: 255px;
        margin-bottom: 20px;
    }

    ${props => props.fontSize > 16 && css<{fontSize:number}>`
        max-width: 100%;
        align-self: center;
    `}
`


const ExternalLink = styled.a<{fontSize:number}>`
    grid-area: banner;
    justify-self: end;
    align-self: start;
    margin-top: -50px;
    
    img {       
        max-width: 100%;
        height: auto;        
    }

    &:hover {
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);        
    }

    @media ${({theme}) => theme.media.laptop}{
        justify-self: center;  
        margin-top: -10px; 
    }

    @media ${({theme}) => theme.media.tablet} {
        margin-top: 40px;     
    }

    ${props => props.fontSize > 16 && css<{fontSize:number}>`
        margin-top: 0;
    `}
`
const Middle = styled.div<{isShow:boolean}>`
    width: 100%;
    overflow: hidden;

    max-height: ${props => props.isShow ? "2000px" : "500px"};
    transition: max-height 0.45s ease-out;
    position: relative;

    @media ${({theme}) => theme.media.tablet} {
        transition: max-height 0.6s ease-in;
    }

    @media ${({theme}) => theme.media.mobile} {
        max-height: ${props => props.isShow ? "800px" : "250px"};
        transition: max-height 0.4s linear;
    }
`
const Gradient = styled.div`
    position: absolute;
    top: 55%;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: ${({theme}) => theme.bgCol.gradientFooter}     
`

const Title = styled.h3`
    margin: 15px 0 20px;
    font-size: calc((100vw - 26rem)/(137 - 26) * (1.86 - 1.43) + 1.43rem);

    @media ${({theme}) => theme.media.mobile} {
        margin: 40px 0 20px;
        text-align: center;     
    }
`

const Bottom = styled.div`
    padding-top: 40px;
    height: 50px;  
    display: grid;
    grid-template-columns: 50% 50%;    
    gap: 15px;

    span {
        font-size: calc((100vw - 26rem)/(137 - 26) * (1 - 0.86) + 0.86rem);        
    }
    
    span:first-of-type {
        grid-column: 1/2;
        grid-row: 1/2;        
    }   

    span:last-of-type {
        grid-column: 1/2;
        grid-row: 2/3;        
    }

    a {
        grid-column: 2/3;
        grid-row: 2/3;
        justify-self: end;
        font-weight: 700;
        text-decoration: underline; 
        padding: 3px 0;       
    }

    a:hover {
        text-decoration: none; 
    }

    @media ${({theme}) => theme.media.laptop} {
        height: 62px;
    }

    @media ${({theme}) => theme.media.mobile}{
        grid-template-columns: 100%;

        a {
            grid-column: 1/2;
            grid-row: 3/4;
            justify-self: start;
        }        
    }
`



