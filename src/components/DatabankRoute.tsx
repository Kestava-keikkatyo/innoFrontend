import {
  Button,
  Container,
  fade,
  Grid,
  InputBase,
  makeStyles,
} from '@material-ui/core'
import { SearchIcon } from '@material-ui/data-grid'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/keikka-kaveri4.png'
import { useTranslation } from 'react-i18next'
export interface DatabankProps {
  path: string
  children: any
}

const DatabankRoute: React.FC<DatabankProps> = ({ path, children }) => {
  
  const classes = useStyles()
  const { t } = useTranslation()

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
          justify="space-between"
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
              {t('job_lifespan')}
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
          </Grid>
          <Grid item>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
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
  )
}

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
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
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
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
