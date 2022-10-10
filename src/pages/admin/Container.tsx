import avatar from '@img/avatar.png';
import Navbar from '@components/shared/Navbar';
import Sidebar from '@components/admin/Sidebar';
import React, { Suspense, useState } from 'react';
import { useAppContext } from '@provider/contextApi';
import { Outlet, Navigate }  from 'react-router-dom';



const Container:React.FC  = () => {
   const [openSideMenu, setOpenSideMenu] = useState(false);
   const {loading, isAuthenticated }  = useAppContext().authState;
   if(loading)return (<div>loading.........</div>)
   else if(!isAuthenticated && !loading) return <Navigate to={'/control'} replace={true} />

   return <>
      <Navbar style={{boxShadow:'0 1px 6px 0 rgba(32,33,36,0.28)'}}>
         <div className={`${openSideMenu? "change":''} menuIcon`}  onClick={()=>setOpenSideMenu(!openSideMenu)}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
         </div>
         <img src={avatar} className="avatar" loading="lazy"/>
      </Navbar>

      <div className="flex">
         <Sidebar openSideMenu={openSideMenu}/>
         <main className="p-5 lg:p-[20px_35px] w-full">
            <Suspense>
               <Outlet/>
            </Suspense>
         </main>
      </div>
  
      {/* <Footer /> */}
   </>;
}

export default Container;