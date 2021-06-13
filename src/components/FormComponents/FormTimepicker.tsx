import {
  createStyles,
    //FormControl,
    //FormControlLabel,
    makeStyles,
    TextField,
    Theme,
    //Typography,
  } from "@material-ui/core"
  import React from "react"

  const FormTimepicker: React.FC<any> = ({ question }) => {
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
    );
    const classes = useStyles();

    return (
      <>
        <div style={{marginTop:16}}>
            <form className={classes.container} noValidate>
                <TextField
                    id="time"
                    label={question.time}
                    type="time"
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
          <Typography variant="h6">Time </Typography>
          <FormControl>
            <FormControlLabel
              control={<TextField type="time"></TextField>}
              label={name}
            ></FormControlLabel>
          </FormControl>
        */}
      </>
    )
  }

  export default FormTimepicker