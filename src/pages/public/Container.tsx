import { Outlet } from 'react-router';
import React, { Suspense } from 'react';
import Header from '@components/public/Header';
import Footer from '@components/public/Footer';



const Container:React.FC  = () => {

   return <>
      <Header/>
      <Suspense>
         <Outlet/>
      </Suspense>
      <Footer/>
   </>;
}

export default Container;