import React from 'react';
import { Alert } from 'react-bootstrap';


export const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (

          <Alert variant='danger' dismissible>
            <Alert.Heading key={i}>
              {formErrors[fieldName]}
            </Alert.Heading>
          </Alert>
        )        
      } else {
        return (''
        );
      }
    })}
  </div>

export default FormErrors;
