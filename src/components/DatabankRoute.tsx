import { Button, Container, alpha, Grid, InputBase, Typography, CardMedia } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/pictures/Tietopankki_yläpalkki_kuvitus.svg'
import { useTranslation } from 'react-i18next'
export interface DatabankProps {
    path: string
    children: any
}

const DatabankRoute: React.FC<DatabankProps> = ({ path, children }) => {

    const language = localStorage.getItem("i18nextLng");
    const [color, setColor] = useState("");
    const [color2, setColor2] = useState("");
    const classes = useStyles()
    const { t } = useTranslation()
    const [colors, setColors] = useState({ stages_of_work: "databank-nav-link", work_responsibilities: "databank-nav-link", instructions: "databank-nav-link", good_practises: "databank-nav-link", forms: "databank-nav-link" })

    const handleSwitch = (page: string) => {
      switch (page) {
        case "stages_of_work":
          setColors({ ...colors, stages_of_work: "databank-nav-link-active", work_responsibilities: "databank-nav-link", instructions: "databank-nav-link", good_practises: "databank-nav-link", forms: "databank-nav-link" });
          break
        case "work_responsibilities":
          setColors({ ...colors, stages_of_work: "databank-nav-link", work_responsibilities: "databank-nav-link-active", instructions: "databank-nav-link", good_practises: "databank-nav-link", forms: "databank-nav-link" });
          break
        case "instructions":
          setColors({ ...colors, stages_of_work: "databank-nav-link", work_responsibilities: "databank-nav-link", instructions: "databank-nav-link-active", good_practises: "databank-nav-link", forms: "databank-nav-link" });
          break
        case "good_practises":
          setColors({ ...colors, stages_of_work: "databank-nav-link", work_responsibilities: "databank-nav-link", instructions: "databank-nav-link", good_practises: "databank-nav-link-active", forms: "databank-nav-link" });
          break
        case "forms":
          setColors({ ...colors, stages_of_work: "databank-nav-link", work_responsibilities: "databank-nav-link", instructions: "databank-nav-link", good_practises: "databank-nav-link", forms: "databank-nav-link-active" });
          break
        }
    }

    useEffect(() => {
        setColors({ ...colors, stages_of_work: "databank-nav-link-active", work_responsibilities: "databank-nav-link", instructions: "databank-nav-link", good_practises: "databank-nav-link", forms: "databank-nav-link" });
        if (language === "en") {
          setColor("#FDFDFD")
        } else {
          setColor2("#FDFDFD");
        }
    }, [])

    const changeLanguage = (code: any) => {
        localStorage.setItem('i18nextLng', code);
        window.location.reload();
    };

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
      <div style={{ width: '100%' }}>
        <Grid container spacing={0} style={{backgroundColor: '#F47D20'}}>
          <Grid item>
            <h1 style={{ margin: '0px', paddingTop: '15px', paddingLeft: '15px'}}>KEIKKAKAVERI</h1>
          </Grid>
            <Grid item style={{ marginRight: '0px', paddingTop: '15px', paddingRight: '15px', paddingLeft: '15px' } }>
            <Link to="/home" style={{ textDecoration: 'none' }}>
              <Button className="databank-button">
                {t('homeButton')}
              </Button>
            </Link>
            <Link to="/databank" style={{ textDecoration: 'none' }}>
                        <Button className="databank-button" style={{ backgroundColor: '#FDFDFD'}}>
                {t('tietopankki')}
              </Button>
            </Link>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button className="databank-button">
                {t('login_title')}
              </Button>
            </Link>
              <Button key="2" onClick={() => { handleCloseNavMenu(); changeLanguage('fi') }} style={{ marginRight: "0.5em", borderRadius: '5rem', backgroundColor: color2 }}>
                <Typography
                  sx={{ color: 'black', fontWeight: 600, fontSize: 16 }}>
                  FI
                </Typography>
              </Button>
              <Button key="3" onClick={() => { handleCloseNavMenu(); changeLanguage('en') }} style={{borderRadius: '5rem', backgroundColor: color }}>
                <Typography
                  sx={{ color: 'black', fontWeight: 600, fontSize: 16 }}>
                  EN
                </Typography>
              </Button>
          </Grid>
        </Grid>
        <Grid container spacing={0} style={{backgroundColor: '#F47D20'}}>
          <Grid item></Grid>
          <Grid item>
            <CardMedia
              component="img"
              sx={{ width: 160 }}
              image={logo}
              className="databank-logo"
              />
          </Grid>
          <Grid item>
            <h1 style={{ margin: '0px 0px 0px 0px', textTransform: 'uppercase', paddingLeft: '15px' }}>{t('tietopankki')}</h1>
          </Grid>
        </Grid>         
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
              <Link onClick={() => handleSwitch("stages_of_work")} className={colors.stages_of_work} to="/databank/lifeline">
                {t('stages_of_work')}
              </Link> {/*Vuokratyön vaiheet */}
            </Button>
            <Button color="inherit">
              <Link onClick={() => handleSwitch("work_responsibilities")} className={colors.work_responsibilities} to="/databank/responsibilities">
                {t('work_responsibilities')}
              </Link> {/*Vuokratyön vastuut */}
            </Button>
            <Button color="inherit">
              <Link onClick={() => handleSwitch("instructions")} className={colors.instructions} to="/databank/instructions">
                {t('instructions')}
              </Link> {/*Ohjeet */}
            </Button>
            <Button color="inherit">
               <Link onClick={() => handleSwitch("good_practises")} className={colors.good_practises} to="/databank/best-practices">
                 {t('good_practises')}
               </Link> {/*Hyvät käytännöt */}
            </Button>
            <Button color="inherit">
              <Link onClick={() => handleSwitch("forms")} className={colors.forms} to="/databank/faq">
                {t('rwm_forms')}
              </Link> {/*Lomakkeet */}
            </Button>
          </Grid>
          <Grid item>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search/>
              </div>
              <InputBase style={{ border: "2px solid grey", borderRadius: "5rem" }}
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
        borderRadius: '5rem',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            //backgroundColor: alpha(theme.palette.common.white, 0.25),
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
        padding: theme.spacing(0.5, 0.5, 0.5, 0),
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
