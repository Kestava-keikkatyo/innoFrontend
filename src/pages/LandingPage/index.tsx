import React, { useState, useEffect } from 'react';
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FirstLandingPage from './FirstLandingPage';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo_kk from '../../assets/logo_keikkakaveri_navbar.svg'
import Footer from './Footer';

const LandingPage = () => {

  useEffect(() => {
    setLanguage();
    checkLoggedInStatus();
  }, []);

  const changeLanguage = (code: any) => {
    localStorage.setItem('i18nextLng', code);
    window.location.reload();
  };

  const [fiSelected, setFiSelected] = useState(false);
  const [enSelected, setEnSelected] = useState(false);
  const [user, setUser] = useState();

  const { t } = useTranslation();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const setLanguage = () => {
    const storedValue = localStorage.getItem('i18nextLng');
    if (storedValue === 'fi') {
      setFiSelected(true)
      setEnSelected(false)
    } else if (storedValue === 'en') {
      setEnSelected(true)
      setFiSelected(false)
    }
  }

  const checkLoggedInStatus = () => {
    const loggedInUser = localStorage.getItem('loggedInnoAppUser');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }

  return (
    <div className='icd' >
      <AppBar position="fixed" elevation={1} className="landing-appbar">
        <Toolbar className="toolbar">
          {/* Keikkakaveri logo when screen width >599px */}
          <Typography sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo_kk} style={{ width: '200px' }} />
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
              {/* <MenuItem key="0" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link className="landing-nav-link" to="/home">
                    {t('tyopoyta')}
                  </Link>
                </Typography>
              </MenuItem> */}


              <MenuItem key="0" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link className="landing-nav-link2-dropdown" to="/databank/lifeline">
                    {t('tietopankki')}
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem key="1" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  {user ?
                  <Link className="landing-login-dropdown" to="/home">
                    <Typography sx={{ fontWeight: 'bold' }}>
                      {user?.['firstName']}
                    </Typography>
                  </Link>
                  :
                  <Link className="landing-login-dropdown" to="/login">
                    <Typography sx={{ fontWeight: 'bold' }}>
                      {t('kirjaudu_sisaan')}
                    </Typography>
                  </Link>
                }
                </Typography>
              </MenuItem>
              <MenuItem key="2" onClick={() => { handleCloseNavMenu(); changeLanguage('fi') }}>
                <Typography
                  sx={{ color: 'black', fontWeight: 600, fontSize: 16 }}>
                  FI
                </Typography>
              </MenuItem>
              <MenuItem key="3" onClick={() => { handleCloseNavMenu(); changeLanguage('en') }}>
                <Typography
                  sx={{ color: 'black', fontWeight: 600, fontSize: 16 }}>
                  EN
                </Typography>
              </MenuItem>
              
            </Menu>
          </Box>

          {/* Keikkakaveri logo when screen width <600px */}
          <Typography
            sx={{ mr: 2, display: { xs: 'flex', sm: 'none' }, flexGrow: 1 }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logo_kk} style={{ width: '200px', marginRight: '33px' }} />
            </Link>
          </Typography>

          {/* Navbar */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'flex' } }}>
            <Link className="landing-nav-link2" to="/databank/lifeline" style={{height: '40px'}}>
              <Typography sx={{ px: 2.5, fontWeight: 'bold' }}>
                {t('tietopankki')}
              </Typography>
            </Link>
            {/* Check if user is logged in */}
            {user ?
              <Link className="landing-login" to="/home" style={{ backgroundColor: '#FDFDFD', height: '40px' }}>
                <Typography sx={{ px: 2.5, fontWeight: 'bold' }}>
                  {user?.['firstName']}
                </Typography>
              </Link>
              :
              <Link className="landing-login" to="/login">
                <Typography sx={{ px: 2.5, fontWeight: 'bold' }}>
                  {t('kirjaudu_sisaan')}
                </Typography>
              </Link>
            }
            <Button
              sx={{ color: 'black', fontWeight: 600, fontSize: 16, height: '40px', borderRadius: '50%', ml: '1rem', minWidth: 0, width: '40px' }}
              style={fiSelected ? { backgroundColor: '#F47D20' } : {}}
              onClick={() => { changeLanguage('fi'); setFiSelected(!fiSelected) }}>
              FI
            </Button>
            <Button
              sx={{ color: 'black', fontWeight: 600, fontSize: 16, height: '40px', borderRadius: '50%', ml: '1rem', minWidth: 0, width: '40px' }}
              style={enSelected ? { backgroundColor: '#F47D20' } : {}}
              onClick={() => { changeLanguage('en'); setEnSelected(!enSelected) }}>
              EN
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <FirstLandingPage />
      <Footer />
    </div>
  );
};

export default LandingPage;
