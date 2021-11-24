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
// import logo from '../LandingPage/keikka-kaveri4.png';
// import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import fi1 from '../../components/NavigationComponents/fi1.png';
import us1 from '../../components/NavigationComponents/us1.png';
// import sw1 from '../../components/NavigationComponents/sw1.png';

const LangMenuDropDown = () => {
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const classes = useStyles();
  // const { t } = useTranslation();

  // const handleClick = (event: any) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const changeLanguage = (code: any) => {
    // setAnchorEl(null);
    localStorage.setItem('i18nextLng', code);
    window.location.reload();
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <>
      <div className="drawer-top">
        <Button
          style={{
            position: 'absolute',
            padding: 'fixed',
            left: '89.5%',
            top: '25%',
          }}
          onClick={() => changeLanguage('fi')}
        >
          <img src={fi1} style={{ width: '30px' }} />
        </Button>
        <Button
          style={{ position: 'absolute', left: '87%', top: '25%' }}
          onClick={() => changeLanguage('en')}
        >
          <img src={us1} style={{ width: '30px' }} />
        </Button>
      </div>
    </>
  );
};

const LandingPage = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslation();

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
          <LangMenuDropDown />
          <Typography style={{ width: 100 }}>
            <Link className="landing-login" to="/login">
              {t('kirjaudu_sisaan')}
            </Link>
          </Typography>
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
