import { Button, Container, alpha, Grid, InputBase, MenuItem, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Search } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/keikkakaveri_logo.png'
import { useTranslation } from 'react-i18next'
export interface DatabankProps {
  path: string
  children: any
}

const DatabankRoute: React.FC<DatabankProps> = ({ path, children }) => {
  
  const classes = useStyles()
  const { t } = useTranslation()
  const changeLanguage = (code: any) => {
    // setAnchorEl(null);
    localStorage.setItem('i18nextLng', code);
    window.location.reload();
  };
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <div className="databank-top-container relative">
        <div className="databank-banner" />

        <div className="databank-logo">
          <Link to="/" style={{ height: 200 }}>
            <img src={logo} alt="keikkakaveri logo" />{' '}
          </Link>
        </div>

        <div className="databank-desktop-link">
        <Button variant="contained" color="primary" key="2" onClick={ () => {handleCloseNavMenu(); changeLanguage('fi')}} style={{marginRight: "0.5em"}}>
            <Typography
              sx={{color: 'black', fontWeight:600, fontSize: 16}}>
              FI
            </Typography>
          </Button>
          <Button variant="contained" color="primary" key="3" onClick={ () => {handleCloseNavMenu(); changeLanguage('en')}} style={{marginRight: "2em"}}>
            <Typography
              sx={{color: 'black', fontWeight: 600, fontSize: 16}}>
              EN
            </Typography>
          </Button>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
             {t('homeButton')}
            </Button>
          </Link>
        </div>
      </div>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="databank-nav"
        >
          <Grid item>
            <Button color="inherit">
              <Link className="databank-nav-link" to="/databank">
                {t('articles')}
              </Link> {/*Artikkelit */} 
            </Button>
            <Button color="inherit">
              <Link className="databank-nav-link" to="/databank/lifeline">
              {t('work_lifespan')}
              </Link> {/*Työn elinkaari */}
            </Button>
            <Button color="inherit">
              <Link
                className="databank-nav-link"
                to="/databank/responsibilities"
              >
                {t('areas_of_responsibility')}
              </Link> {/*Vastuualueet */}
            </Button>
            <Button color="inherit">
              <Link className="databank-nav-link" to="/databank/best-practices">
              {t('good_practises')}
              </Link> {/*Hyvät käytännöt */}
            </Button>
            <Button color="inherit">
              <Link className="databank-nav-link" to="/databank/faq">
              {t('faq')}
              </Link> {/*Hyvät käytännöt */}
            </Button>
          </Grid>
          <Grid item>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder={t("search")}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            {/* <Button color="inherit">Rekistöröidy</Button> */}
          </Grid>
        </Grid>
        {/* <JobLifeline /> */}
        {/* <RoleResponsibilities /> */}
        {children}
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    color: 'black',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default DatabankRoute
