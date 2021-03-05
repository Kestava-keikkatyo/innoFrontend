import React from 'react';

const CustomFormInput = ({ label, type, name, placeholder, value, onChange, className, inputClassName, labelClassName }) => {
  return (
    <div className={`${className} customFormInputDiv`}>
      <label className={`${labelClassName} customFormLabel`}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${inputClassName} customFormInput`} />
    </div>
  );
}
 
export default CustomFormInput;