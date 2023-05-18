import React, { createContext } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app) 


const AuthProvider = ({children}) => {

   const googleProvider = new GoogleAuthProvider()

 const googleCreatUSer = ()=>{
   return signInWithPopup (auth,googleProvider)
 }

   const resors = {
      googleCreatUSer,
   }
   return (
      <AuthContext.Provider value={resors}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;