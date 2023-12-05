import React from 'react';

const FormWrapper = ({ title, children }) => {

  return ( 
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">{title}</h2>
          <div>{children}</div>
        </div>
      </div>
    </div>
   );
}
 
export default FormWrapper;