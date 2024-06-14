import React from 'react';
import { css, styled } from 'styled-components';
import { Container } from '../../components/Container';
import { Logo } from '../../components/logo/Logo';
import { ContactBox } from '../../components/contact_box/ContactBox';
import { SocialList } from '../../components/social/SocialList';
import { Addresses } from './addresses/Addresses';
import { DuplicateLinks } from './top-links/DuplicateLinks';
import { Link } from 'react-router-dom';

type FooterPropsType = {
    contacts: {
        phone1:string,
        phone2:string,
        email:string,
        callback:boolean
    }
    socials: Array<{id:string, link:string}>
    duplicateLinks: Array<{id:number, ancor:string, path:string}> 
    addresses: string[]
    banner:{src:string, path:string}
    themeName:string
    fontSize:number
}

export const Footer: React.FC<FooterPropsType> = (props: FooterPropsType) => {
    return (
        <StyledFooter>
            <Container>
                <Top fontSize={props.fontSize}>
                    <Logo /> 
                    <DuplicateLinks duplicateLinks={props.duplicateLinks} fontSize={props.fontSize}/>
                    <ContactBox themeName={props.themeName} contacts={{...props.contacts, callback: true}} />
                    <SocialList themeName={props.themeName} socials={props.socials}/>
                    <License fontSize={props.fontSize}>
                        Лицензия ЛО-73-01-002159 от 03.12.2019 г. выдана Министерством здравоохранения Ульяновской области.                        
                    </License>
                    <Addresses addresses={props.addresses}/>
                    
                    
                        <ExternalLink href={props.banner.path} fontSize={props.fontSize}>
                            <img src={props.banner.src}/>
                        </ExternalLink>
                    
                </Top>                
            </Container>            
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
    padding: 20px 0;
    background-color: ${({theme}) => theme.bgCol.footer};
    margin-bottom: 0;  
`

const Top = styled.div<{fontSize:number}>`
    display: grid;
    grid-template-columns: 270px auto 1fr auto;
    //grid-template-rows: repeat(3, minmax(55px, auto));
    
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
        /* width: 266px;
        height: 94px; */
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



