import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { Grid } from '@material-ui/core'
import responsibilities from '../../assets/tietopankki/vastuualueet.json'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { roles } from '../../types/types'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
  },
}))

export interface RoleResponsibilitiesProps {}

const RoleResponsibilities: React.SFC<RoleResponsibilitiesProps> = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const [steps, setSteps] = useState(responsibilities.worker)
  const [showDetails, setShowDetails] = useState<any>(false)
  const [header, setHeader] = useState<string>('Vuokratyöntekijä')

  const handleSwitch = (role: roles) => {
    switch (role) {
      case roles.Worker:
        setHeader('Vuokratyöntekijä')
        setSteps(responsibilities.worker)
        break
      case roles.Agency:
        setHeader('Vuokratyöfirma')
        setSteps(responsibilities.agency)
        break
      case roles.Business:
        setHeader('Käyttäjäyritys')
        setSteps(responsibilities.business)
        break
    }
    setActiveStep(0)
    setShowDetails(false)
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step: any) => {
    setActiveStep(step)
  }

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h4" color="primary">
          Vastuualueet
        </Typography>
        <Typography variant="h5" color="textSecondary">
          {header}
        </Typography>
      </Grid>
      <Grid item md={9} xs={12}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={showDetails}
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false)
            }}
            classNames="flip"
          >
            <SwipeableViews
              onClick={() => setShowDetails(!showDetails)}
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              className="swipable-card-container"
            >
              {steps.map((step, index) => (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <div className="step-card">
                      <p>{showDetails ? step.details : step.tip}</p>
                    </div>
                  ) : null}
                </div>
              ))}
            </SwipeableViews>
          </CSSTransition>
        </SwitchTransition>
        <MobileStepper
          steps={steps.length}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Grid>
      <Grid item md={3} xs={12}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="stretch"
          style={{ paddingLeft: 8 }}
        >
          <Grid item md={12} xs={4}>
            <Button
              variant="contained"
              color="primary"
              style={{ height: 100, width: '100%' }}
              onClick={() => handleSwitch(roles.Worker)}
            >
              Vuokra työntekijä
            </Button>
          </Grid>
          <Grid item md={12} xs={4}>
            <Button
              variant="contained"
              color="secondary"
              style={{ height: 100, width: '100%' }}
              onClick={() => handleSwitch(roles.Agency)}
            >
              Vuokratyö yritys
            </Button>
          </Grid>
          <Grid item md={12} xs={4}>
            <Button
              variant="contained"
              color="default"
              style={{ height: 100, width: '100%' }}
              onClick={() => handleSwitch(roles.Business)}
            >
              Käyttäjä yritys
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default RoleResponsibilities
