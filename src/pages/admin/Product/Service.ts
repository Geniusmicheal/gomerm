import { getDownloadURL } from "@firebase/storage";
import { insertQuery } from "@utils/curdHandler";
import { gomermMultiStorage, gomermSingleStorage } from "@utils/StorageHandler";
import { SyntheticEvent } from "react";

let counter =0;
export const AccordionHandler = (event:any)=>{
   const accordionButton = event.target.closest('button').lastElementChild;
   const grandParentSibling =  event.target.closest('button').parentElement.nextElementSibling;

   if(accordionButton.hasAttribute('style')){
      accordionButton.removeAttribute('style');
      return grandParentSibling.style.height = `${grandParentSibling.scrollHeight}px`;
   }

   grandParentSibling.style.height= '0px';
   accordionButton.style.transform = "rotate(180deg)";
}

export const tableRowHandler = (event:any)=>{
   const parent = event.target.parentElement;
   parent.style.height= `${parent.scrollHeight + 41}px`;
   const tableBody = event.target.previousElementSibling.lastElementChild;

   const tableRow = `<tr>
      <td> <input type="file" class="form-control form-control-sm" name="message_${counter}" required/> </td>
      <td> <input type="number" class="form-control form-control-sm" placeholder="Amount" name="amount_${counter}"  required/> </td>
      <td> <button type="button" class="close"> </button></td>
   </tr>`;
   tableBody.insertAdjacentHTML('beforeend',tableRow);
   counter++;
}

export const targetRemoveHandler = (event:any)=>{
   const targetElement = event.target.closest('button');
   if(!targetElement) return;

   const elementItemToRemove = targetElement.parentNode.parentNode;
   const parentElementItemToRemove = elementItemToRemove.parentNode;
   const greatGrandParentElement = parentElementItemToRemove.parentNode.parentNode;
   greatGrandParentElement.style.height= `${greatGrandParentElement.scrollHeight - 41}px`;
   parentElementItemToRemove.removeChild(elementItemToRemove);
}

export const onSubmitLogin =  async ({textAreaValue, setLoader, showAlert, textAreaSetValue }:any , event:SyntheticEvent)=>{
   event.preventDefault();
   setLoader(true);
   const formData = event.target as HTMLFormElement;
   const { hardCopy, messageTitle }:any = formData.elements;
   const tableBody= formData.querySelector("tbody")  as HTMLElement;
   const allFileInput= formData.querySelectorAll("input[type=file]");
   const allTableButton= formData.querySelectorAll("td button[type=button]");
   [...allTableButton].forEach(tableButton => (tableButton as HTMLButtonElement).disabled= true);

   const formDetails:any = { 
      synopsis: textAreaValue,
      hardCopy:hardCopy.value,
      title: messageTitle.value, 
   };


   await gomermMultiStorage(allFileInput).then((fileSnapshots:any) => {
      Promise.all(fileSnapshots.map((fileSnapshot:any) => getDownloadURL(fileSnapshot.ref))).then((downloadURL:any) =>{
         formDetails['message'] = [];
         formDetails['banner'] = downloadURL[0];
         
         for (let i = 1; i < downloadURL.length; i++) {
            const {type, name } = (allFileInput[i] as any).files[0];
            const value = (allFileInput[i] as HTMLInputElement).name.replaceAll('message','amount');
            console.log(value);

            formDetails['message'].push({ name,
               url: downloadURL[i],
               type: type.split('/')[0],
               amount: (formData.querySelector(`input[name=${value}]`) as HTMLInputElement).value
            });
         }

         insertQuery('product', formDetails).then((rep)=>{
            formData.reset();
            textAreaSetValue('');
            tableBody.innerHTML = '';
            showAlert(`'${formDetails}' inserted successfully`,"success");
            (tableBody.parentElement?.parentElement  as HTMLElement).style.height='35px';
         }).catch((e) => showAlert("Something went wrong,Please try again","danger"));

      }).catch((e) => showAlert("Something went wrong,Please try again","danger"));
   }).catch((e) => showAlert("Something went wrong,Please try again","danger"));
  
   setLoader(false);
   [...allTableButton].forEach(tableButton => (tableButton as HTMLButtonElement).disabled= false);
}