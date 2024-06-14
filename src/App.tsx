import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/Theme.styled';
import { Header } from './layout/header/Header';
import { useEffect, useState, useContext } from 'react';
//import { FontSizeContext } from './context/FontSizeContext';
import { Route, Routes } from 'react-router-dom';
import { Prices } from './pages/main/Prices';
import { AllDoctors } from './pages/main/AllDoctors';
import { Timetable } from './pages/main/Timetable';
import { Eco } from './pages/main/Eco';
import { Faq } from './pages/main/Faq';
import { Contacts } from './pages/main/Contacts';
import { About } from './pages/main/About';
import { News } from './pages/main/News';
import { Questionnaire } from './pages/main/Questionnaire';
import { Documents } from './pages/main/Documents';
import { Vacancy } from './pages/main/Vacancy';
import { Reception } from './pages/main/Reception';
import { Tour } from './pages/main/Tour';
import { PaymentTerms } from './pages/main/PaymentTerms';
import { StoreType } from './redux/redux-store';
import { Home } from './pages/main/Home';
import UsefulInformation from './pages/main/UsefulInformation';
import { Footer } from './layout/footer/Footer';


const initialFontSize = 14;
const initialState = {show: false, translateY: "-58px"}

function App(props: {store: StoreType}) {

  const [themeName, setThemeName] = useState<string>("default");
  const [fontSize, setFontSize] = useState<number>(initialFontSize);
  const [visuallyImpairedPanel, setVisuallyImpairedPanel] = useState(initialState); 

  //window.localStorage.clear();
  
  function handleToggleTheme(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>){    
    if(e.currentTarget.name === "light" && themeName !== 'light') {
      window.localStorage.setItem('themeName', 'light');
      setThemeName('light');
    }
    if(e.currentTarget.name === "dark" && themeName !== 'dark') {
      window.localStorage.setItem('themeName', 'dark');
      setThemeName('dark');
    }
    if(e.currentTarget.name === "blue" && themeName !== 'blue') {
      window.localStorage.setItem('themeName', 'blue');
      setThemeName('blue');
    }
    if(!e.currentTarget.name){
      window.localStorage.setItem('themeName', 'default');
      setThemeName('default');
    }    
  }

  function handleFontSize(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>){
    if(e.currentTarget.name === "decrease") {
           
      if(fontSize !== 12) {
        window.localStorage.setItem('fontSize', `${fontSize - 1}`); 
        setFontSize((prev) => prev - 1);
                
      }      
    }

    if(e.currentTarget.name === "add") {      
      if(fontSize !== 26) {
        window.localStorage.setItem('fontSize', `${fontSize + 1}`);
        setFontSize((prev) => prev + 1);
        
      }      
    }      
  }

  const handleVisuallyImpairedPanel = () => {        

    if(!visuallyImpairedPanel.show){
        window.localStorage.setItem("translateY", "0");
        window.localStorage.setItem("show", "true");
        setVisuallyImpairedPanel({
            ...visuallyImpairedPanel,
            show: true,
            translateY: "0"
        });
    }

    if(visuallyImpairedPanel.show) {

        if(themeName === "default") {
            window.localStorage.setItem("translateY", "-58px");
            window.localStorage.setItem("show", "false");
            window.localStorage.fontSize = initialFontSize;
        }
        else {
            window.localStorage.clear();
            setThemeName("default");
        }
        setFontSize(initialFontSize);
        setVisuallyImpairedPanel({
            ...visuallyImpairedPanel,
            show: false,
            translateY: "-58px"
        });
    }        
}

  useEffect(() => { 
    const offset = window.localStorage.getItem('translateY');
    const panel = window.localStorage.getItem('show') === "true" ? true : false;
    offset && setVisuallyImpairedPanel({...visuallyImpairedPanel, translateY: offset, show: panel});
  }, []);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('themeName');
    localTheme && setThemeName(localTheme);
  }, []);

  // Устанавливаем размер шрифта равным значению из локального хранилища
  useEffect(() => {
    const localFontSize = window.localStorage.getItem('fontSize');
    localFontSize && setFontSize(+localFontSize);
  }, []);

  //console.log("fontSize", fontSize);

  const state = props.store.getState();

  return (
    
    <ThemeProvider      
      theme={themeName === 'light' ? myTheme.light 
        : themeName === 'dark' ? myTheme.dark
        : themeName === 'blue' ? myTheme.blue
        : myTheme.default}          
    >
    
      <Wrap offset={visuallyImpairedPanel.translateY}>
        <Header 
          mainMenu={state.header.headerMenu.mainMenu}
          subMenu={state.header.headerMenu.subMenu}
          contacts={state.header.contacts}
          counter={state.header.counter}
          socials={state.header.socials}
          handleToggleTheme={handleToggleTheme}
          handleFontSize={handleFontSize}
          themeName={themeName}
          setThemeName={setThemeName}
          initialFontSize={initialFontSize}
          setFontSize={setFontSize}
          handleVisuallyImpairedPanel={handleVisuallyImpairedPanel}
          visuallyImpairedPanel={visuallyImpairedPanel}
        />
        
        <>        
          <Routes>
            <Route path="/clinic" element = {<Home 
              homePage={state.homePage} 
              themeName={themeName} 
              fontSize={fontSize} />} 
            />
            <Route path="/prices" element = {<Prices />} />
            <Route path="/doctors" element = {<AllDoctors />} />
            <Route path="/timetable" element = {<Timetable />} />
            <Route path="/eco" element = {<Eco />} />
            <Route path="/faq" element = {<Faq />} />
            <Route path="/contacts" element = {<Contacts />} />
            <Route path="/about" element = {<About />} />
            <Route path="/news" element = {<News />} />
            <Route path="/usefulInfo" element = {<UsefulInformation />} />
            <Route path="/questionnaire" element = {<Questionnaire />} />
            <Route path="/documents" element = {<Documents />} />
            <Route path="/vacancy" element = {<Vacancy />} />
            <Route path="/reception-of-citizens" element = {<Reception />} />
            <Route path="/3d-tour" element = {<Tour />} />
            <Route path="/payment-terms" element = {<PaymentTerms />} />
          </Routes>           
        </>

        <Footer 
          contacts={state.header.contacts}
          socials={state.header.socials}
          duplicateLinks={state.footer.footerMenu.duplicateLinks}
          addresses={state.footer.addresses}
          banner={state.footer.banner}
          themeName={themeName}
          fontSize={fontSize}
        />

        <GlobalStyles fontSize={fontSize}/>
      </Wrap>
    </ThemeProvider>
   
  );
}

type WrapPropsType = {    
  offset:string
}

const Wrap = styled.div<WrapPropsType>`
  transform: translateY(${props => props.offset}); 
  transition: transform 0.5s ease-in-out;  
`

export default App;
