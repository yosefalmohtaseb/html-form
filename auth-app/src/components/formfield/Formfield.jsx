import React from 'react';
import './style.css'
import * as T from '../typograhy/Typography'
const FormField = ({ label, type, id, value, onChange, placeholder }) => {
  return (
    <div className='main-f-f'>
      <T.Labaliscreption className='lable' htmlFor={id}>{label}:</T.Labaliscreption>
      <input className='f-i' placeholder={placeholder} type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
}

export default FormField;
