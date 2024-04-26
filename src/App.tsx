import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/Theme.styled';
import { Header } from './layout/header/Header';
import { useEffect, useState, useContext } from 'react';
//import { FontSizeContext } from './context/FontSizeContext';
import { Route, Routes } from 'react-router-dom';
import { Prices } from './pages/main/Prices';
import { Doctors } from './pages/main/Doctors';
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
import { InitialStoreType } from './redux/store';

const initialFontSize = 14;
function App(props: {store: InitialStoreType}) {

  const [themeName, setThemeName] = useState<string>("default");
  const [fontSize, setFontSize] = useState<number>(initialFontSize);

  
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

 
  return (
    
    <ThemeProvider 
      //fontSize={fontSize}
      theme={themeName === 'light' ? myTheme.light 
        : themeName === 'dark' ? myTheme.dark
        : themeName === 'blue' ? myTheme.blue
        : myTheme.default}          
    >
    
      <>
        <Header 
          mainMenu={props.store.headerMenu.mainMenu}
          subMenu={props.store.headerMenu.subMenu}
          contacts={props.store.contacts}
          counter={props.store.counter}
          socials={props.store.socials}
          handleToggleTheme={handleToggleTheme}
          handleFontSize={handleFontSize}
          themeName={themeName}
          setThemeName={setThemeName}
          initialFontSize={initialFontSize}
          setFontSize={setFontSize}
        />
        <div>
          <Routes>
            {/* <Route path="/" element = {<Home  />} /> */}
            <Route path="/prices" element = {<Prices />} />
            <Route path="/doctors" element = {<Doctors />} />
            <Route path="/timetable" element = {<Timetable />} />
            <Route path="/eco" element = {<Eco />} />
            <Route path="/faq" element = {<Faq />} />
            <Route path="/contacts" element = {<Contacts />} />
            <Route path="/about" element = {<About />} />
            <Route path="/news" element = {<News />} />
            <Route path="/questionnaire" element = {<Questionnaire />} />
            <Route path="/documents" element = {<Documents />} />
            <Route path="/vacancy" element = {<Vacancy />} />
            <Route path="/reception-of-citizens" element = {<Reception />} />
            <Route path="/3d-tour" element = {<Tour />} />
            <Route path="/payment-terms" element = {<PaymentTerms />} />
          </Routes>  
        </div>
        <GlobalStyles fontSize={fontSize}/>
      </>
    </ThemeProvider>
  );
}

export default App;
