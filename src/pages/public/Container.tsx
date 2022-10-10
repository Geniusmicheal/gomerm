import { Outlet } from 'react-router';
import React, { Suspense } from 'react';
import Header from '@components/public/Header'



const Container:React.FC  = () => {

   return <>
      <Header/>
      <Suspense>
         <Outlet/>
      </Suspense>
   </>;
}

export default Container;