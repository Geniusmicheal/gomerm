import data from "@resources/data.json";
import { gomermAuthState } from "@utils/Auth";
import { UserDataType } from "@utils/dataType";
import UseAuthStateReducer from "@hooks/shared/UseAuthStateReducer";
import React, { createContext,useEffect,useState, useContext, ReactNode } from "react";


type alertDataType = { msg:string, type:string };


const authStateValue = {
   loading: false,
   isAuthenticated: false,
   user:{ email: '', uid:'', photoURL:'', displayName:'', emailVerified: false },
}

type authStatetype = {
   loading: boolean,
   user: UserDataType,
   isAuthenticated: boolean,
}

type AppContextType = {
   genres:string[],
   authDispatch: any,
   categories:string[],
   authState:authStatetype,
   alert: alertDataType | undefined,
   showAlert:(msg:string, type:string) => void
}


const AppContext = createContext<AppContextType>({
   genres:[],
   categories:[],
   alert: {msg:'', type:''},
   authState: authStateValue,
   showAlert: () => undefined,
   authDispatch: ()=> undefined,
});

export const useAppContext = () => useContext(AppContext)

const AppProvider:React.FC<{ children: ReactNode }> = ({children}) => {
   const [ alert , setAlert] = useState<alertDataType>();
   const [authState, authDispatch]= UseAuthStateReducer();

   useEffect(() => {
      gomermAuthState(authDispatch)
   },[]);
   
   const showAlert = (msg:string, type:string) => { 
      setAlert({msg,type});
      setTimeout(() => setAlert(undefined), 5000);
   }

   const contextValue = {showAlert, alert, authState, authDispatch, ...data};

   return (<AppContext.Provider value={contextValue}> {children}</AppContext.Provider>);
}


export default AppProvider;