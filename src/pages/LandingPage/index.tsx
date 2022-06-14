import React, { useState } from 'react';
import {
  useTheme,
  Button,
  MobileStepper,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  MenuItem,
  Select
} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import FooterPage from './FooterPage';
import FirstLandingPage from './FirstLandingPage';
import ContentLifeSpan from './ContentWorkLifeSpan';
import ContentResponsibilities from './ContentResponsibilities';
import { Link } from 'react-router-dom';
// import logo from '../LandingPage/keikka-kaveri4.png';
// import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';

const LandingPage = () => {
  const changeLanguage = (code: any) => {
    // setAnchorEl(null);
    localStorage.setItem('i18nextLng', code);
    i18n.changeLanguage(code);
  };
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  //const [languageCode, setLanguageCode] = useState(localStorage.getItem('i18nextLng'))
  const { t, i18n } = useTranslation();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: any) => {
    setActiveStep(step);
  };

  const handleChange = (event: any) => {
    changeLanguage(event.target?.value)
  };

  return (
    <div>
      <AppBar position="fixed" elevation={1} className="landing-appbar">
        <Toolbar className="toolbar" variant="dense">
          <Typography>
            <Link className="landing-logo" to="/">
              KEIKKAKAVERI
            </Link>
          </Typography>
          {/*<img className="bw-logo2" src={logo} alt="keikkakaveri_Logo" />*/}
          <Grid container>
            <Typography>
              <Link className="landing-nav-link" to="/home">
                {t('tyopoyta')}
              </Link>
            </Typography>
            <Typography>
              <Link className="landing-nav-link2" to="/databank">
                {t('tietopankki')}
              </Link>
            </Typography>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="flex-end"
          >
            <Select
              className="landing-select-lang"
              onChange={handleChange}
              value={localStorage.getItem('i18nextLng')}
            >
              <MenuItem value="en">{t('english')}</MenuItem>
              <MenuItem value="fr">{t('french')}</MenuItem>
              <MenuItem value="fi">{t('finnish')}</MenuItem>
            </Select>
            <Typography>
              <Link className="landing-login" to="/login">
                {t('kirjaudu_sisaan')}
              </Link>
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
      <MobileStepper
        variant="dots"
        steps={4}
        position="static"
        activeStep={activeStep}
        // onClick={handleClick}
        className="landing-stepper"
        nextButton={
          <Button
            className="next-back-btns"
            size="large"
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
            size="large"
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

// const useStyles = makeStyles((theme) => ({
//   // necessary for content to be below app bar
//   list: {
//     '& .MuiList-root': {
//       width: '130px !important',
//     },
//     top: '39px !important',
//     left: '-40px !important',
//   },
// }));
export default LandingPage;
