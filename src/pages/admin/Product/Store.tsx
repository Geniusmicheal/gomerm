import '@css/storeProduct.css';
import ReactQuill from 'react-quill';
import React,{ useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import Alert from '@components/shared/Alert';
import { useAppContext } from '@provider/contextApi';
import { AccordionHandler, onSubmitLogin, tableRowHandler, targetRemoveHandler } from './Service';

const Store:React.FC  = () => {
   const { showAlert } = useAppContext();
   const [loader, setLoader] = useState(false);
   const [textAreaValue, textAreaSetValue] = useState('');
   const onSubmitAgument= {textAreaValue, setLoader, showAlert, textAreaSetValue }

   return <div className="card">
      <div className="card-header">card-header</div>

      <form className="card-body" method="post" encType="multipart/form-data" onSubmit={onSubmitLogin.bind(this, onSubmitAgument)}>
         <Alert/>
         <div className="form-group">
            <input type="text" className="form-control" placeholder="Message Title" name="messageTitle"  required/>
         </div>

         <div className="form-group">
            <input type="url" className="form-control" placeholder="Hard Copy Url Source" name="hardCopy" />
            <input type="file" className="form-control" name="backCover" accept="image/*" required title="message back cover"/>
         </div>

         <div className="table-responsive">
            <div className="card-header"> card-header 
               <button type="button" onClick={AccordionHandler}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"/>
                  </svg>
               </button>
            </div>

            <div className="overflow-x-auto">
               <table>
                  <tbody onClick={targetRemoveHandler}></tbody>
               </table>
               <button type="button" className="form-control form-control-sm" onClick={tableRowHandler} disabled={loader}>Add message</button> 
            </div>

         </div>

         <ReactQuill theme="snow" value={textAreaValue} onChange={textAreaSetValue}   placeholder={'Write something...'} style={{ "marginBottom": "1rem"}}/>

         <button type="submit" className="form-control" disabled={loader} >
            {!loader? 'Add to Shop': (<>
               <svg xmlns="http://www.w3.org/2000/svg" className="spinner" viewBox="0 0 512 512">
                  <path d="M478.71 364.58zm-22 6.11l-27.83-15.9a15.92 15.92 0 0 1-6.94-19.2A184 184 0 1 1 256 72c5.89 0 11.71.29 17.46.83-.74-.07-1.48-.15-2.23-.21-8.49-.69-15.23-7.31-15.23-15.83v-32a16 16 0 0 1 15.34-16C266.24 8.46 261.18 8 256 8 119 8 8 119 8 256s111 248 248 248c98 0 182.42-56.95 222.71-139.42-4.13 7.86-14.23 10.55-22 6.11z" className="opacity-60"/>
                  <path d="M271.23 72.62c-8.49-.69-15.23-7.31-15.23-15.83V24.73c0-9.11 7.67-16.78 16.77-16.17C401.92 17.18 504 124.67 504 256a246 246 0 0 1-25 108.24c-4 8.17-14.37 11-22.26 6.45l-27.84-15.9c-7.41-4.23-9.83-13.35-6.2-21.07A182.53 182.53 0 0 0 440 256c0-96.49-74.27-175.63-168.77-183.38z" className="fa-primary"/>
               </svg>
               Processing...
            </>)}
         </button>
      </form>
   </div>
}
export default Store;