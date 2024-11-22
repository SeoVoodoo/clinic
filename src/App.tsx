import React, { lazy, Suspense } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/Theme.styled';
import { Header } from './layout/header/Header';
//import { HeaderNew } from './layout/header/Header';
import { useEffect, useState, useContext } from 'react';
//import { FontSizeContext } from './context/FontSizeContext';
import { Route, Routes } from 'react-router-dom';
//import { Prices } from './pages/main/prices/Prices';

//import { AllDoctors } from './pages/main/AllDoctors';
//import { Timetable } from './pages/main/Timetable';
import { Eco } from './pages/main/Eco';
//import { Faq } from './pages/main/Faq';
import { Contacts } from './pages/main/Contacts';
import { About } from './pages/main/About';
import { News } from './pages/main/News';
import { Questionnaire } from './pages/main/Questionnaire';
import { Documents } from './pages/main/Documents';
import { Vacancy } from './pages/main/Vacancy';
import { Reception } from './pages/main/Reception';
//import { Tour } from './pages/main/Tour';
import { PaymentTerms } from './pages/main/PaymentTerms';
import { StoreType } from './redux/redux-store';
import { Home } from './pages/main/Home';
import UsefulInformation from './pages/main/UsefulInformation';
import { Footer } from './layout/footer/Footer';
import { Sidebar } from './layout/sidebar/Sidebar';
import { Overlay } from './components/Overlay';
import { ModalWindowRecord } from './components/pop-up/ModalWindowRecord';
import { ModalWindowCallback } from './components/pop-up/ModalWindowCallback';
//import { Reviews } from './pages/main/Reviews';
import { WindowSize } from './hooks/WindowSize';
import { ModalWindowThanks } from './components/pop-up/ModalWindowThanks';
import { ModalWindow3ndfl } from './components/pop-up/ModalWindow3ndfl';
import { Preloader } from './components/Preloader';
//import Gordeeva from './pages/main/doctors/Gordeeva';

const Prices = lazy(() => import('./pages/main/prices/Prices'));
const Reviews = lazy(() => import('./pages/main/Reviews'));
const Tour = lazy(() => import('./pages/main/Tour'));
const Timetable = lazy(() => import('./pages/main/time-table/Timetable'));
const Faq = lazy(() => import('./pages/main/Faq'));
const AllDoctors = lazy(() => import('./pages/main/AllDoctors'));
const Gordeeva = lazy(() => import('./pages/main/doctors/Gordeeva'));

const initialFontSize = 14;
const initialState = {show: false, translateY: "-58px"}

function App(props: {store: StoreType}) {

  const [themeName, setThemeName] = useState<string>("default");
  const [fontSize, setFontSize] = useState<number>(initialFontSize);
  const [visuallyImpairedPanel, setVisuallyImpairedPanel] = useState(initialState); 
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Логика левого бокового меню
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const handleToggleSidebar = () => setIsOpenSidebar(prev => !prev);

  //Логика появления модальных окон
  const [isOpenModalWindow3ndfl, setIsOpenModalWindow3ndfl] = useState(false);
  const [isOpenModalWindowRecord, setIsOpenModalWindowRecord] = useState(false);
  const [isOpenModalWindowCallback, setIsOpenModalWindowCallback] = useState(false);
  const [isOpenModalWindowThanks, setIsOpenModalWindowThanks] = useState(false);
  const [isOpenMobileMenuContact, setIsOpenMobileMenuContact] = useState(false);
    
    // const handleContactBtnClick = () => {
    //     setIsOpenContact(prev => !prev);
    // }
    // const handleCloseMobileModalWindowContact = () => {
    //   setIsOpenMobileContact(prev => !prev);
    // } 
  

  const handleToggleModalWindow = (windowName?: string) => {    
    switch(windowName){
      case "3ndfl": 
        setIsOpenModalWindow3ndfl(prev => !prev);
        break;
      case "record": 
        setIsOpenModalWindowRecord(prev => !prev);
        break;
      case "callback":
        setIsOpenModalWindowCallback(prev => !prev);
        break;
      case "thanks":
        setIsOpenModalWindowThanks(prev => !prev);
        delete window.localStorage.nameBtn;
        break; 
      case "onlyMobileContact": 
        setIsOpenMobileMenuContact(prev => !prev);
        break;
      default:
        setIsOpenSidebar(prev => !prev);
    }
  }

  const handleSuccess = () => {
    setIsOpenModalWindow3ndfl(false);
    setIsOpenModalWindowRecord(false);
    setIsOpenModalWindowCallback(false);
    setIsOpenModalWindowThanks(true);
  }

  const handleError = () => {
    alert("Упс, что-то пошло не так..");  
  }
  
  useEffect(() => {
    const clientWidthStart = document.body.clientWidth;
    if(isOpenModalWindow3ndfl || isOpenModalWindowRecord || isOpenModalWindowCallback || isOpenMobileMenuContact || isOpenModalWindowThanks) {        
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
 }, [isOpenModalWindow3ndfl || isOpenModalWindowRecord || isOpenModalWindowCallback || isOpenMobileMenuContact || isOpenModalWindowThanks]);

  const windowWidth = WindowSize();
  const state = props.store.getState();

  return (
    
    <ThemeProvider      
      theme={themeName === 'light' ? myTheme.light 
        : themeName === 'dark' ? myTheme.dark
        : themeName === 'blue' ? myTheme.blue
        : myTheme.default}          
    >
      <Sidebar 
        isOpenSidebar={isOpenSidebar}
        handleToggleSidebar={handleToggleSidebar}
        //handleToggleModalWindow={handleToggleModalWindow}
        sidebar={state.sidebar}
      />
      {isOpenSidebar && <Overlay />}
      {isOpenModalWindow3ndfl && 
        <ModalWindow3ndfl 
          handleToggleModalWindow={handleToggleModalWindow} 
          values={state.header.forms.ndfl.values}          
          onSuccess={handleSuccess}
          onError={handleError}
          scroll={scroll}
        />}
      {/* {isOpenModalWindowRecord && <Overlay />}   */}
      {isOpenModalWindowRecord &&
        <>
        <Overlay />
        <ModalWindowRecord 
          handleToggleModalWindow={handleToggleModalWindow}
          onSuccess={handleSuccess}
          onError={handleError} 
          scroll={scroll}
        />
        </>
      }
      {isOpenModalWindowCallback && 
        <ModalWindowCallback 
          isOpenModalWindowCallback={isOpenModalWindowCallback}
          handleToggleModalWindow={handleToggleModalWindow} 
          onSuccess={handleSuccess}
          onError={handleError}
          scroll={scroll}
        />
      }
      <ModalWindowThanks 
        isOpenModalWindowThanks={isOpenModalWindowThanks}
        handleToggleModalWindow={handleToggleModalWindow}
        scroll={scroll}
      />
      
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
          //initialFontSize={initialFontSize}
          fontSize={fontSize}
          //setFontSize={setFontSize}
          handleVisuallyImpairedPanel={handleVisuallyImpairedPanel}
          visuallyImpairedPanel={visuallyImpairedPanel}
          handleToggleSidebar={handleToggleSidebar} 
          handleToggleModalWindow={handleToggleModalWindow} 
          sidebar={state.sidebar}
          windowWidth={windowWidth}   
          isOpenMobileMenuContact={isOpenMobileMenuContact}  
          //setIsOpenMobileMenuContact={setIsOpenMobileMenuContact}          
        />
        
        <>        
          <Routes>
            <Route path="/" element = {
              <Suspense fallback={<Preloader />} >
                <Home 
                  homePage={state.homePage} 
                  themeName={themeName} 
                  fontSize={fontSize} 
                  dispatch={props.store.dispatch}
                  windowWidth={windowWidth} 
                />
              </Suspense>} 
            />
            <Route path="/prices" element = {<Suspense fallback={<Preloader />}>
              <Prices 
                pricesPage={state.pricesPage}
                windowWidth={windowWidth}                
              />
              </Suspense>} 
            />
            <Route path="/reviews" element = {<Suspense fallback={<Preloader />}>
              <Reviews 
                reviewsPage={state.reviewsPage} 
                windowWidth={windowWidth}               
                dispatch={props.store.dispatch}
              />
              </Suspense>} 
            />

            <Route path="/timetable" element = {<Suspense fallback={<Preloader />}>
              <Timetable 
                timeTablePage={state.timeTablePage}                
                fontSize={fontSize}
              />
              </Suspense>} 
            />

            <Route path="/3d-tour" element = {<Suspense fallback={<Preloader />}>
              <Tour />
              </Suspense>} 
            />

            {/* <Route path="/faq" element = {<Suspense fallback={<Preloader />}>
              <Faq 
                faqPage={state.faqPage} 
                setIsOpenModalWindowThanks={setIsOpenModalWindowThanks} 
                dispatch={props.store.dispatch}              
              />
              </Suspense>}            
            />            

            <Route path="/doctors">

              <Route index element = {<Suspense fallback={<Preloader />}>
                <AllDoctors />
              </Suspense>} />
              
              <Route path="gordeeva" element = {<Suspense fallback={<Preloader />}> 
                <Gordeeva
                  gordeevaPage={state.gordeevaPage}
                  handleToggleModalWindow={handleToggleModalWindow}
                  windowWidth={windowWidth}    
                  fontSize={fontSize}         
                />
              </Suspense>} />

            </Route> */}

            <Route path="/doctors" element = {<AllDoctors />} />            
            <Route path="/eco" element = {<Eco />} />            
            <Route path="/contacts" element = {<Contacts />} />
            <Route path="/about" element = {<About />} />            
            <Route path="/news" element = {<News />} />
            <Route path="/usefulInfo" element = {<UsefulInformation />} />
            <Route path="/questionnaire" element = {<Questionnaire />} />
            <Route path="/documents" element = {<Documents />} />
            <Route path="/vacancy" element = {<Vacancy />} />
            <Route path="/reception-of-citizens" element = {<Reception />} />
            
            <Route path="/payment-terms" element = {<PaymentTerms />} />
          </Routes>           
        </>

        <Footer 
          contacts={state.header.contacts}
          socials={state.header.socials}
          duplicateLinks={state.footer.footerMenu.duplicateLinks}
          servicesLinks={state.footer.footerMenu.servicesLinks}
          addresses={state.footer.addresses}
          banner={state.footer.banner}
          themeName={themeName}
          fontSize={fontSize}
          handleToggleModalWindow={handleToggleModalWindow} 
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
  
  /* @media ${({theme}) => theme.media.mobile} {
    overflow-x: hidden;
  } */
`

export default App;
