import { Checkbox, FormControl, FormControlLabel, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateQuestion } from '../../actions/businessContractFormActions';
import { FormComponentProps } from '../../types/props';
import { IRootState } from '../../utils/store';

/**
 * @component
 * @desc Renders a single checkbox question in business contract form.
 * @param {FormComponentProps} props
 * @param {Question} props.question A question object.
 */
const BusinessContractFormCheckBox: React.FC<FormComponentProps> = ({ question }) => {
  const { title } = question
  let { checked } = question

  let index:any = question?.ordering

  const questions = useSelector((state: IRootState) => state.businessContractForm.questions)

  const dispatch = useDispatch()

  const handleChange = () => {
    checked = !checked
    dispatch(
      updateQuestion({ ...questions[index], checked: checked }, index)
    )

  }

  console.log("checked", checked)

  return (
    <>
      <Typography variant="h6" ></Typography>
        <FormControl>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChange} />}
            label={ title }
          />
        </FormControl>
    </>
   )
}

export default BusinessContractFormCheckBox