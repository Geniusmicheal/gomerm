import { SyntheticEvent } from "react";
import { gomermSignIn } from "@utils/Auth";
import { NavigateFunction } from "react-router";

type onSubmitAgument = {setLoader:(loader:string)=>void, showAlert:(a:string,b:string)=>void, authDispatch:(typePayloadObj:any)=>void,navigate:NavigateFunction }

const onSubmitLogin = async ({setLoader, showAlert, authDispatch, navigate}:any , event:SyntheticEvent) => {
   event.preventDefault();
   setLoader(true);
   const {email, password}:any = (event.target as HTMLFormElement).elements;
   await gomermSignIn(email.value, password.value).then(userCredential => {
      const {user} = userCredential;
      authDispatch({type: 'SUCCESS',payload: {
         uid: user.uid,
         email: user.email,
         photoURL: user.photoURL,
         displayName: user.displayName,
         emailVerified: user.emailVerified
      }});
      navigate('/dashboard');
   }).catch((e) => showAlert("Incorrect email or passsword","danger"));
   setLoader(false);
}

export default  onSubmitLogin;
