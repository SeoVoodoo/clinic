import React from 'react';
import { styled } from 'styled-components';
import { Container } from '../../components/Container';
import { StyledBtn, StyledCallbackBtn, StyledVisuallyImpairedBtn } from '../../components/StyledBtn';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Icon } from '../../components/icon/Icon';
import { Logo } from '../../components/logo/Logo';
import { Counter } from '../../components/counter/Counter';
import { Search } from '../../components/search/Search';
import { ContactBox } from '../../components/contact_box/ContactBox';
import { SocialLink } from '../../components/social/SocialLink';

export const Header = () => {

    return (
        <StyledHeader>
            <Top>
                <Container>                   
                        <StyledVisuallyImpairedBtn>
                            <Icon 
                                id="eye"
                                width="24"
                                height="16"
                                viewBox="0 0 24 16" 
                            />
                            Версия для слабовидящих
                        </StyledVisuallyImpairedBtn>
                        <WrapBtn>
                            <StyledBtn>Возврат 13%</StyledBtn>
                            <StyledBtn>Запись на прием</StyledBtn>
                            <StyledCallbackBtn>Заказать обратный звонок</StyledCallbackBtn>
                        </WrapBtn>
                </Container>
            </Top>
            <Middle>
                <Container>
                    <Logo /> 
                    <Counter />
                    <Search />
                    <SocialLink />
                    <ContactBox />
                </Container>
            </Middle>
            <Bottom>
                <Container>

                </Container>
            </Bottom>
        </StyledHeader> 
    );
};

const StyledHeader = styled.div`
    
`
const Top = styled.div`
    background-color: ${({theme}) => theme.bgCol.header.top};
    height: 70px; 
    
    ${Container} {
        display: flex;        
        align-items: center;        
    }

    ${Container} ${StyledVisuallyImpairedBtn} {        
        max-width: 280px;
        width: 100%;
        padding: 17px 20px;
        
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
`

const WrapBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;    
    gap: 10px;
    

    ${StyledBtn} {
        padding: 16px 20px;        
    } 

    ${StyledCallbackBtn} {
        max-width: 312px;
        width: 100%;
        padding: 16px 20px;        
    }    
`
const Middle = styled.div`
    background-color: ${({theme}) => theme.bgCol.header.default};
    height: 182px;
    
    ${Container} {
        display: grid; 
        grid-template-columns: 198px 1fr auto;
        grid-template-rows: repeat(4, minmax(20px, auto));
        grid-template-areas:    
            "logo counter_children social" 
            "logo counter_children contact"  
            "logo search contact"
            "logo search contact";
    }
    
    
`
const Bottom = styled.div`
    background-color: ${({theme}) => theme.bgCol.header.bottom};
    height: 64px;    
`