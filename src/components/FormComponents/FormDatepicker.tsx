import {
  TextField, //Typography,
  Theme,
} from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'
import React from 'react'

const FormDatepicker: React.FC<any> = ({ question }) => {
  //const { name } = question

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
            id='date'
            label={question.title}
            type='date'
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
      {/*
          <Typography variant="h6">Date: </Typography>
          <FormControl>
            <FormControlLabel
              control={<TextField type="date"></TextField>}
              label={name}
            ></FormControlLabel>
          </FormControl>
      */}
    </>
  )
}

export default FormDatepicker
