import '@css/alert.css'
import React from 'react';
import { useAppContext } from '@provider/contextApi';

const Alert: React.FC  = () => {
   const { alert } = useAppContext();
   return (
      alert && (
         <div className={`alert alert-${alert.type}`}>
            <button type="button" className="close"></button>
            {alert.msg}
         </div>
      )
    )
}
export default Alert;