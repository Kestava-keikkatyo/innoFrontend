import React, { useState } from 'react'
import {
  Grid,
  Typography,
  useTheme,
  Button,
  MobileStepper,
} from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'
import FooterPage from './FooterPage'
import FirstLandingPage from './FirstLandingPage'
import ContentLifeSpan from './ContentWorkLifeSpan'

const LandingPage = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(1)

  const handleStepChange = (step: any) => {
    setActiveStep(step)
  }
  return (
    <div>
      <MobileStepper
        variant="dots"
        steps={4}
        position="static"
        activeStep={activeStep}
        className="landing-stepper"
        nextButton={
          <Button size="small" disabled={activeStep === 3}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className="swipable-card-container"
      >
        {/**
         * First page
         */}
        <FirstLandingPage />
        <ContentLifeSpan />
        <Grid container className="landing-part3">
          <Grid item xs={12} className="landing-title-container">
            <Typography variant="h4" color="secondary">
              Vastuualueet
            </Typography>
            <Button variant="contained" color="secondary">
              Lue lisää
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            Part3
          </Grid>
          <Grid item xs={12} md={6}>
            Part4
          </Grid>
        </Grid>
        <FooterPage />
      </SwipeableViews>
    </div>
  )
}
export default LandingPage
