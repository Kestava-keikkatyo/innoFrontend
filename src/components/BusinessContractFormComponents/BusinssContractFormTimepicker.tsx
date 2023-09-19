import {
  TextField, //Typography,
  Theme,
} from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateQuestion } from '../../actions/businessContractFormActions'
import { IRootState } from '../../utils/store'

const BusinssContractFormTimepicker: React.FC<any> = ({ question }) => {
  //const { name } = question

  let { answer } = question

  const questions = useSelector((state: IRootState) => state.businessContractForm.questions)

  const dispatch = useDispatch()

  let index: any = question?.ordering

  const handleChange = (e: any) => {
    dispatch(updateQuestion({ ...questions[index], answer: e.target.value }, index))
  }
  console.log('time answer', answer)

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    }),
  )
  const classes = useStyles()

  return (
    <>
      <div style={{ marginTop: 16 }}>
        <form className={classes.container} noValidate>
          <TextField
            id='time'
            label='Time'
            type='time'
            value={answer || ''}
            onChange={handleChange}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
        </form>
      </div>
      {/*
          <Typography variant="h6">Time</Typography>
          <FormControl>
          <FormControlLabel
              control={<TextField value={answer || ''} onChange={handleChange} type="time"></TextField>}
              label='Time'
          ></FormControlLabel>
          </FormControl>
      */}
    </>
  )
}

export default BusinssContractFormTimepicker
