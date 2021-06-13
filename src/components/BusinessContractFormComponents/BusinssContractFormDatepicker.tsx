import {
    createStyles,
    //Grid,
    //FormControl,
    //FormControlLabel,
    makeStyles,
    TextField,
    Theme,
    //Typography,
  } from "@material-ui/core"
  import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateQuestion } from "../../actions/businessContractFormActions"
import { IRootState } from "../../utils/store"

  const BusinssContractFormDatepicker: React.FC<any> = ({ question }) => {
    //const { name } = question

    let { answer } = question

    const questions = useSelector((state: IRootState) => state.businessContractForm.questions)

    const dispatch = useDispatch()

    let index:any = question?.ordering

    const handleChange = (e:any) => {
        dispatch(
            updateQuestion({ ...questions[index], answer: e.target.value }, index)
          )
    }

    console.log("date answer", answer)

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
                    id="date"
                    label="Date"
                    type="date"
                    value={answer || ''}
                    onChange={handleChange}
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </form>
        </div>

        {/*
            <Typography variant="h6">Date</Typography>
            <FormControl>
            <FormControlLabel
                control={<TextField value={answer || '' } onChange={handleChange} type="date"></TextField>}
                label='Date'
            ></FormControlLabel>
            </FormControl>
        */}

      </>
    )
  }

  export default BusinssContractFormDatepicker