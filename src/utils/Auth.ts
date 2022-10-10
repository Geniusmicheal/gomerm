import initializeFirebaseApp from "@utils/Firebase";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


const auth = getAuth(initializeFirebaseApp);

const gomermSignIn = (email: string, password: string) => {
   return signInWithEmailAndPassword(auth, email, password);
}


const gomermAuthState = async (authDispatch:(id:any)=>void) =>{
   return await onAuthStateChanged(auth, (userDetail) => {
      if(userDetail)authDispatch({type: 'SUCCESS',payload: {
         uid: userDetail.uid,
         email: userDetail.email,
         photoURL: userDetail.photoURL,
         displayName: userDetail.displayName,
         emailVerified: userDetail.emailVerified
      }});else authDispatch({type: 'LOGOUT'});
   });
}


const gomermLogOut = (authDispatch:(id:any)=>void) => {
   return signOut(auth).then(() =>{
      authDispatch({ type: 'LOGOUT' })
   }).catch((error)=> console.log(error));
}


const gomermSignUp = (email: string, password: string) => {
   return createUserWithEmailAndPassword(auth, email, password)
}
export { gomermSignIn, gomermSignUp, gomermAuthState, gomermLogOut };


// https://firebase.google.com/docs/auth/web/manage-users