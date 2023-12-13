import PropTypes from 'prop-types'
import React from 'react'
import { fontSizes, inputTypes } from '../../types/types'

/**
 * @component
 * @desc A generic form input in form editor page.
 * @param {*} props check full list of props from source.
 */
const CustomFormInput: React.FC<any> = ({
  labelFontSize,
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  className,
  inputClassName,
  labelClassName,
}) => {
  return (
    <div className={`${className} customFormInputDiv`}>
      <label className={`${labelClassName} font${labelFontSize} customFormLabel`}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${inputClassName} customFormInput`}
      />
    </div>
  )
}

CustomFormInput.defaultProps = {
  labelFontSize: 'medium',
  label: 'Label',
  type: 'text',
  name: '',
  placeholder: '',
  className: '',
  inputClassName: '',
  labelClassName: '',
}

CustomFormInput.propTypes = {
  labelFontSize: PropTypes.oneOf([fontSizes.small, fontSizes.medium, fontSizes.large]),
  type: PropTypes.oneOf([inputTypes.number, inputTypes.text, inputTypes.date]),
}

export default CustomFormInput
