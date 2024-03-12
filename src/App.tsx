import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/Theme.styled';
import { Header } from './layout/header/Header';
import { useEffect, useState } from 'react';



function App() {

  const [themeName, setThemeName] = useState("light");

  function handleToggleTheme(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>){
    e.preventDefault();
    if(themeName === 'light'){
      window.localStorage.setItem('themeName', 'dark');
      setThemeName('dark');
    }
    else {
      window.localStorage.setItem('themeName', 'light');
      setThemeName('light');
    }            
  }

  // useEffect(() => { // ВРЕМЕННО отключено
  //   const localTheme = window.localStorage.getItem('themeName');
  //   localTheme && setThemeName(localTheme);
  // }, []);

  return (
    
    <ThemeProvider theme={themeName === 'light' ? myTheme.light : myTheme.dark}>
    
      <>
        <Header />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default App;
