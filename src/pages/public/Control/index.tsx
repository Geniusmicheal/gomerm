import '@css/control.css';
import gomerm from '@img/gomerm.png';
import React, { useState } from 'react';
import Alert from '@components/shared/Alert';
import { useAppContext } from '@provider/contextApi';
import  { Navigate, useNavigate } from 'react-router';
import onSubmitLogin from '@pages/public/Control/Service';

const Control:React.FC  = () => {
   const [loader, setLoader] = useState(false);
   const {showAlert, authState, authDispatch } = useAppContext();
   const {loading, isAuthenticated }  = authState;
   const onSubmitAgument= { setLoader, showAlert, authDispatch, useNavigate }

   if(loading)return (<div>loading.........</div>);
   else if(isAuthenticated) return <Navigate to={'/dashboard'} replace={true} />
   
   return <div className="control">
      <div className="card">
         <img src={gomerm} loading="lazy"/>
         <form method="post" autoComplete="off" onSubmit={onSubmitLogin.bind(this, onSubmitAgument)}>
            <Alert/>

            <div className="form-group">
               <input type="email" className="form-control" placeholder="Email Address" name="email"  required/>
            </div>

            <div className="form-group">
               <input type="password" className="form-control" placeholder="Password" name="password" required/>
            </div>

            <div className="form-group">
               <button type="submit" className="form-control" disabled={loader}>
                  {!loader? 'Login': (<>
                     <svg xmlns="http://www.w3.org/2000/svg" className="spinner" viewBox="0 0 512 512">
                        <path d="M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 0 1-6.94-19.2A184 184 0 1 1 256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0 1 15.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z" className="opacity-60"/>
                        <path d="M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83V24.73c0-9.11 7.67-16.78 16.77-16.17C401.92 17.18 504 124.67 504 256a246 246 0 0 1-25 108.24c-4 8.17-14.37 11-22.26 6.45l-27.84-15.9c-7.41-4.23-9.83-13.35-6.2-21.07A182.53 182.53 0 0 0 440 256c0-96.49-74.27-175.63-168.77-183.38z" className="fa-primary"/>
                     </svg>
                     Processing...
                  </>)}
               </button>
            </div>

         </form>
      </div> 
   </div>
}
export default Control;