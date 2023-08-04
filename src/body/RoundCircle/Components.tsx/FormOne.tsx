import React from 'react';


type FormOneType = {
  children: React.ReactNode | React.ReactNode[]
}

const FormOne: React.FC<FormOneType> = ({ children}) => {

  if (Array.isArray(children)) {
    return (
      <div className='tableManagment__buttons'>
        {children}
      </div>
    )
  } else {
    return (
      <div className='tableManagment__buttons tableManagment__buttons_one'>
        {children}
      </div>
    );
  }
  
}
export default FormOne;