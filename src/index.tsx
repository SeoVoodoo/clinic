import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { store } from './redux/redux-store';
import { ScrollTop } from './components/ScrollTop';

// const ScrollTop = () => {
//   const pathname = useLocation();
//   // useEffect(() => {
//   //   window.scrollTo({
//   //     top: 0,
//   //     left: 0,
//   //     behavior: 'instant'
//   //   })
//   // }, [pathname])
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null
// }


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ScrollTop /> */}
      <App store={store} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
