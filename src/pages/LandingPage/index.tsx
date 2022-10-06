import React, { useState } from 'react';
import {
  useTheme,
  Button,
  MobileStepper,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
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
import vastuualueet from '../../assets/tietopankki/vastuualueet.json';
import vastuualueet_en from '../../assets/tietopankki/vastuualueet_en.json';
// import sw1 from '../../components/NavigationComponents/sw1.png';
const LandingPage = () => {
  const changeLanguage = (code: any) => {
    // setAnchorEl(null);
    localStorage.setItem('i18nextLng', code);
    window.location.reload();
  };

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useTranslation();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: any) => {
    setActiveStep(step);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className='icd' >
      <AppBar position="fixed" elevation={1} className="landing-appbar">
        {/* Old Toolbar
        <Toolbar className="toolbar" variant="dense">
          <Typography>
            <Link className="landing-logo" to="/">
              KEIKKAKAVERI
            </Link>
          </Typography>
          {/*<img className="bw-logo2" src={logo} alt="keikkakaveri_Logo" /> */} {/* Old Toolbar continues
          <Grid style={{display: "flex"}}>
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
          <Typography>
              <Button
              style={{left: '-30%', marginTop: '20%'}}
              onClick={() => changeLanguage('fi')}
              >
              <img src={fi1} alt={"fi"} style={{ width: '30px' }} />
            </Button>
            <Button
              style={{left: '20%', marginTop: '-55%'}}
              onClick={() => changeLanguage('en')}
            >
              <img src={us1} alt={"en"} style={{ width: '30px' }} />
            </Button>
          </Typography>
          <Typography style={{ width: 100 }}>
            <Link className="landing-login" to="/login">
              {t('kirjaudu_sisaan')}
            </Link>
          </Typography>
        </Toolbar>
        */}
        <Toolbar className="toolbar">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              display: { xs: 'none', sm: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link className="landing-logo" to="/">
              KEIKKAKAVERI
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            > {/* Side menu */}
                <MenuItem key="0" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link className="landing-nav-link" to="/home">
                      {t('tyopoyta')}
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem key="1" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link className="landing-nav-link2" to="/databank">
                      {t('tietopankki')}
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem key="2" onClick={handleCloseNavMenu}>
                    <Button
                        sx={{color: 'black', fontWeight:600, fontSize: 16}}
                        onClick={() => changeLanguage('fi')}>
                        FI
                    </Button>
                </MenuItem>
                <MenuItem key="3" onClick={handleCloseNavMenu}>
                    <Button
                        sx={{color: 'black', fontWeight: 600, fontSize: 16}}
                        onClick={() => changeLanguage('en')}>
                        EN
                    </Button>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">
                    <Link className="landing-login" to="/login">
                      {t('kirjaudu_sisaan')}
                    </Link>
                  </Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', sm: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link className="landing-logo" to="/">
              KEIKKAKAVERI
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            <Typography sx={{ my: 3, display: 'block'}}>
              <Link className="landing-nav-link" to="/home">
                {t('tyopoyta')}
              </Link>
            </Typography>
            <Typography sx={{ my: 3, display: 'block'}}>
              <Link className="landing-nav-link2" to="/databank">
                {t('tietopankki')}
              </Link>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0, display: {xs: 'none', sm: 'flex' } }}>
              <Button
                  sx={{ color: 'black', fontWeight: 600, fontSize: 16}}
                  onClick={() => changeLanguage('fi')}>
                  FI
              </Button>
              <Button
                  sx={{ color: 'black', fontWeight: 600, fontSize: 16}}
                  onClick={() => changeLanguage('en')}>
                  EN
              </Button>
            <Typography sx={{ my: 3, display: 'block', marginLeft: '1rem' }} >
              <Link className="landing-login" to="/login">
                {t('kirjaudu_sisaan')}
              </Link>
            </Typography>
          </Box>
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
            aria-label="next"
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
            aria-label="back"
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
        className="swipable-card-container swipe"
      >
        {/**
         * First page
         */}
        <FirstLandingPage />
        <ContentResponsibilities />
        <ContentLifeSpan />
        <FooterPage />
      </SwipeableViews>
      {/* Change from swipeable to flex when >900px */}
      <div className='flex'>
        <FirstLandingPage />
        <ContentResponsibilities />
        <ContentLifeSpan />
        <FooterPage />
      </div>
    </div>
  );
};

export default LandingPage;
