import React from 'react'
import makeStyles from '@mui/styles/makeStyles';
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import LifelineCard from './LifelineCard'
import lifeline from '../../assets/tietopankki/elinkaari.json'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/footer';
import Ingressi from '../../components/Ingressi';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2rem',
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    }
}))

function getSteps() {
    return lifeline.map((e) => e.title)
}

const getStepContent = (step: any) => <LifelineCard step={lifeline[step]} />

const JobLifeline = () => {

    const { t } = useTranslation()
    const classes = useStyles()
    const [activeStep, setActiveStep] = React.useState(0)
    const steps = getSteps()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    const ingressi_header = "stages_of_work"
    const summary = "stages_of_work_summary"

    return (
      <div className={classes.root}>
        <Ingressi header={ingressi_header} summary={summary}></Ingressi>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step style={{ backgroundColor: "#DBE4FC" }} key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent style={{ width: "60%", display: "center" }}>
                {getStepContent(index)}
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                    Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>{t('steps_completed')}</Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
        <Footer></Footer>
      </div>
    )
}
export default JobLifeline
