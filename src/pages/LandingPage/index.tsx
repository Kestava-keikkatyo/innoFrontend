import React, { useState } from 'react';
import {
  useTheme,
  Button,
  MobileStepper,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Menu,
  MenuItem,
  Fade,
  makeStyles
} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import FooterPage from './FooterPage';
import FirstLandingPage from './FirstLandingPage';
import ContentLifeSpan from './ContentWorkLifeSpan';
import ContentResponsibilities from './ContentResponsibilities';
import { Link } from 'react-router-dom';
import logo from "../LandingPage/keikka-kaveri4.png";
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import fi1 from "../../components/NavigationComponents/fi1.png";
import us1 from "../../components/NavigationComponents/us1.png";
import sw1 from "../../components/NavigationComponents/sw1.png";

const LangMenuDropDown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const { t } = useTranslation();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const changeLanguage = (code: any) => {
    setAnchorEl(null);
    localStorage.setItem('i18nextLng', code);
    window.location.reload();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="drawer-top" style={{position:"absolute", right:"5rem", top:-5}}>
        <Typography onClick={handleClick}>
          <TranslateIcon
            style={{position:"absolute",left:30, fontSize: '36px' }}
            className="translate-icon"
          />
        </Typography>
      </div>
      <Menu className={classes.list}
        id="forms-settings"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => changeLanguage('fi')}>
          {t("finland")}
          <img src={fi1} style={{position:"absolute",width:"30px", left:"6rem"}}/>
        </MenuItem>
        <MenuItem onClick={() => changeLanguage('en')}>
          {t("english")}
          <img src={us1} style={{position:"absolute",width:"30px", left:"6rem"}}/>
        </MenuItem>
        {/* <MenuItem onClick={() => changeLanguage('sv')}>
          Svenska
          <img src={sw1} style={{position:"absolute",width:"30px", left:"6rem"}}/>
        </MenuItem> */}
      </Menu>
    </>
  );
};

const LandingPage = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
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
  // const handleClick = () => {
  //   if (activeStep === 0){
  //     console.log("nappi numero: ",activeStep," on painettu");
  //     setActiveStep(1);
  //   }else if((activeStep === 1)){
  //     console.log("nappi numero: ",activeStep," on painettu");
  //     setActiveStep(2);
  //   }else if((activeStep === 2)){
  //     console.log("nappi numero: ",activeStep," on painettu");
  //     setActiveStep(3);
  //   }
  }
  return (
    <div>
      <AppBar position="fixed" elevation={1} className="landing-appbar">
        <Toolbar className="toolbar" variant="dense">
          <img className="bw-logo2" src={logo} alt="keikkakaveri_Logo"/>
          <Grid container>
            <Typography>
              <Link className="landing-nav-link" to="/home">
              {t("tyopoyta")}
              </Link>
            </Typography>
            <Typography>
              <Link className="landing-nav-link2" to="/databank">
              {t("tietopankki")}
              </Link>
            </Typography>
          </Grid>

          <Typography style={{ width: 100 }}>
            <Typography>
              <LangMenuDropDown />
            </Typography>
            <Link className="landing-login" to="/login">
            {t("kirjaudu_sisaan")}
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

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  list: {
    "& .MuiList-root":{
      width: "130px !important",
    },
    top: "39px !important" , 
    left: "-40px !important", 
  },
}));
export default LandingPage;
