import React from 'react';
import { JSX } from 'react/jsx-runtime';
import { styled } from 'styled-components';

export const Reviews = () => {

  // const markup = renderToStaticMarkup(
  //   <html>
  //       <head />
  //       <body>{}</body>
  //   </html>
  // );

    return (
      <>Отзывы</>
        // <div>
        //   Страница отзывы с сайта Продокторов <br />
        //   <div id="pd_widget_big"  data-lpu="40755">
        //     <Title>Отзывы о «Альянс клиник» на Сурова<br />
        //     <Link1 target="_blank" href="https://prodoctorov.ru/new/rate/lpu/40755/"
        //     >Оставить отзыв</Link1></Title>

        //     <div id="pd_widget_big_content"></div>

        //     <Link2 target="_blank" href="https://prodoctorov.ru/ulyanovsk/lpu/40755-alyans-klinik-na-surova/#otzivi">Читать все отзывы</Link2>

        //     <span id="pd_powered_by"><a target="_blank" href="https://prodoctorov.ru"><img  src="https://prodoctorov.ru/static/_v1/pd/logos/logo-pd-widget.png" /></a></span>
        //     </div>
        //     <script async defer src="https://prodoctorov.ru/static/js/widget_big.js?v7"></script> 
        // </div>
      
    );
};


//renderToStaticMarkup

const Title = styled.div`
  font-size: 18px !important;
  font-weight: 600 !important;  
`
const Link1 = styled.a`
  box-sizing: content-box !important;
  -webkit-user-select: none !important;
  user-select: none !important;
  cursor: pointer !important;
  text-align: center !important;
  color: #fff !important;
  background: #1a5dd0 !important;
  border-radius: 4px !important;
  padding: 8px !important;
  font-size: 13px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 130% !important;
  text-decoration: none !important;
  transition: background-color .2s ease-in-out !important;
  display: inline-block !important;
  width: 122px !important;
  margin-top: 8px !important;
`
const Link2 = styled.a`
  box-sizing: content-box !important;
  -webkit-user-select: none !important;
  user-select: none !important;
  cursor: pointer !important;
  text-align: center !important;
  color: #fff !important;
  background: #1a5dd0 !important;
  border-radius: 4px !important;
  padding: 8px !important;
  font-size: 13px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 130% !important;
  text-decoration: none !important;
  transition: background-color .2s ease-in-out !important;
  float: left !important;
  width: 137px !important;
  margin-top: 12px !important;
`
// function renderToStaticMarkup(arg0: JSX.Element) {
//   throw new Error('Function not implemented.');
// }

