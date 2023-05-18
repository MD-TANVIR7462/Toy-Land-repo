import React, { createContext } from 'react';
export const Authcontaxt = createContext(null)
const Authprovider = ({children}) => {
   const element = {

   }
   return (
      <Authcontaxt.Provider value={element}>
         {children}
      </Authcontaxt.Provider>
   );
};

export default Authprovider;