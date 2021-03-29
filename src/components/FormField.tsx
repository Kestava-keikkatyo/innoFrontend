import React from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel
} from '@material-ui/core'

/**
 * @component
 * @desc Formik text input field. Uses material ui TextField component.
 * Used inside Formik and Form that are imported form 'formik'.
 * @param {Object} props
 * @param {string} props.label - Field label
 * @param {string} props.name - Field name
 * @param {("text"|"password")} props.type - Text field types that should be used
 * @param {string} [props.placeholder] - Field placeholder value
 * @param {boolean} [props.disabled] - If true text field is disabled
 * @param {("filled"|"outlined"|"standard")} [props.variant=standard] - All available text field styles
 * @example
 * <Formik>
 *  <Form>
 *    <FormikTextField label="Email" name="email" type="text" />
 *  </Form>
 * </Formik>
 */
export const FormikTextField: React.FC<any> = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const errorText = (meta.touched && meta.error && !props.disabled) ? meta.error : ''

  return (
    <TextField
      {...field}
      {...props}
      label={label}
      error={!!errorText}
      helperText={errorText}
      style={{ minHeight: '5rem' }}
    />
  )
}

FormikTextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']).isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
}

/**
 * @component
 * @desc Formik select input field. Uses material ui.
 * Used inside Formik and Form that are imported from 'formik'.
 * @param {Object} props
 * @param {string} props.label - Field label
 * @param {string} props.name - Field name
 * @param {Object[]} props.options - All available fields shown in dropdown menu
 * @param {(string|number)} props.options.value - Option value (value that is sent to API)
 * @param {string} [props.options.label] - Option label (shown to user)
 * @example
 * <Formik>
 *  <Form>
 *    <FormikSelectField
 *      label="Role"
 *      name="role"
 *      options={[{ value: 'worker', label: 'Worker' }, ... ]}
 *    />
 *  </Form>
 * </Formik>
 */
export const FormikSelectField: React.FC<any> = ({ options, label, ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.touched && meta.error ? meta.error : ''

  return (
    <FormControl
      style={{ minHeight: '5rem', minWidth: 120 }}
      error={!!errorText}>
      <InputLabel id={props._id || props.name}>{label}</InputLabel>
      <Select {...field} >
        {options.map((option: any) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label || option.value}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  )
}

FormikSelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    label: PropTypes.string
  })).isRequired
}

/**
 * @component
 * @desc Formik radio input field. Uses material ui.
 * Used inside Formik and Form that are imported from 'formik'.
 * @param {Object} props
 * @param {string} props.label - Field label
 * @param {string} props.name - Field name
 * @param {Object[]} props.options - All available fields shown in dropdown menu
 * @param {(string|number)} props.options.value - Option value (value that is sent to API)
 * @param {string} [props.options.label] - Option label (shown to user)
 * @example
 * <Formik>
 *  <Form>
 *    <FormikRadioField
        label="Role"
        name="role"
        options={[{ value: 'worker', label: 'Worker' }, ... ]}
      />
 *  </Form>
 * </Formik>
 */

export const FormikRadioField: React.FC<any> = ({ options, label, ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.touched && meta.error ? meta.error : ''

  return (
    <FormControl
      style={{ minHeight: '6.5rem' }}
      error={!!errorText}>
      <FormLabel id={props._id || props.name}>{label}</FormLabel>
      <RadioGroup
        style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around' }}
        {...field}>
        {options.map((option: any) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio color="primary" />}
            label={option.label}
            labelPlacement="bottom"
          />
        ))}
      </RadioGroup>
      <FormHelperText style={{ minHeight: '19px' }}>{errorText}</FormHelperText>
    </FormControl>
  )
}

FormikRadioField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    label: PropTypes.string
  })).isRequired
}