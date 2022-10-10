import { useReducer } from "react";

const initialAuthState = {
   user:{},
   loading: false,
   isAuthenticated: false,
};

const pendingAuthState = {...initialAuthState, loading:true}

const authReducer = (state:any,action:any) => {
   const {payload, type} = action;
   const reducerAction:any = {
      'SUCCESS': { loading:false, isAuthenticated:true, user: payload },
   }
   reducerAction[type] ??= initialAuthState;
   return reducerAction[type];
};

const UseAuthStateReducer = () => {
   const [authState, authDispatch]=  useReducer(authReducer, pendingAuthState);
   return [authState, authDispatch];
}
export default UseAuthStateReducer



