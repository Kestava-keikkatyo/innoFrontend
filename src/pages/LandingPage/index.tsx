import React, { useState } from 'react';
import {
  useTheme,
  Button,
  MobileStepper,
  AppBar,
  Toolbar,
  Typography,
  Grid,
} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import FooterPage from './FooterPage';
import FirstLandingPage from './FirstLandingPage';
import ContentLifeSpan from './ContentWorkLifeSpan';
import ContentResponsibilities from './ContentResponsibilities';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
});

const LandingPage = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const classes = useStyles();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: any) => {
    setActiveStep(step);
  };
  return (
    <div>
      <AppBar position="fixed" elevation={0} className="landing-appbar">
        <Toolbar className="toolbar" variant="dense">
          <Button color="inherit">KEIKKAKAVERI</Button>
          <Grid container>
            <Typography>
              <Link className="landing-nav-link" to="/home">
                Työpöytä
              </Link>
            </Typography>

            <Typography>
              <Link className="landing-nav-link" to="/databank">
                Tietopankki
              </Link>
            </Typography>
          </Grid>

          <Typography style={{ width: 150 }}>
            <Link className="landing-login" to="/login">
              Kirjaudu sisään
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <MobileStepper
        variant="dots"
        steps={4}
        position="static"
        activeStep={activeStep}
        className="landing-stepper"
        nextButton={
          <Button
            className="next-back-btns"
            size="small"
            onClick={handleNext}
            disabled={activeStep === 3}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            className="next-back-btns"
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
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
        <ContentResponsibilities />
        <ContentLifeSpan />
        <FooterPage />
      </SwipeableViews>
    </div>
  );
};
export default LandingPage;
