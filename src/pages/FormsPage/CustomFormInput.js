import PropTypes from 'prop-types';
import React from 'react';

const CustomFormInput = ({ labelFontSize, label, type, name, placeholder, value, onChange, className, inputClassName, labelClassName }) => {
  return (
    <div className={`${className} customFormInputDiv`}>
      <label className={`${labelClassName} font${labelFontSize} customFormLabel`}>{label}</label>
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

CustomFormInput.defaultProps = {
  labelFontSize: 'medium',
  label: 'Label',
  type: 'text',
  name: '',
  placeholder: '',
  className: '',
  inputClassName: '',
  labelClassName: ''
}

CustomFormInput.propTypes = {
  labelFontSize: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['number', 'text', 'date'])
}
 
export default CustomFormInput;