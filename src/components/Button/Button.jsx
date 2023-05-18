import React from 'react';

const Button = ({children}) => {
   return (
      <button className="btn btn-outline btn-primary">{children}</button>
   );
};

export default Button;