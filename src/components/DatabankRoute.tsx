import { Button, Container, alpha, Grid, InputBase, Typography, CardMedia, Box, AppBar, IconButton, Toolbar, MenuItem, Menu, ThemeProvider, createTheme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Search } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/pictures/Tietopankki_yläpalkki_kuvitus.svg'
import { useTranslation } from 'react-i18next'
import logo_text from '../../src/assets/logo_keikkakaveri_navbar.svg'
import MenuIcon from '@mui/icons-material/Menu';
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
    const [routeText, setRouteText] = useState("stages_of_work");

    const handleSwitch = (page: string) => {
        switch (page) {
            case "stages_of_work":
                setColors({ ...colors, stages_of_work: "databank-nav-link-active", work_responsibilities: "databank-nav-link", instructions: "databank-nav-link", good_practises: "databank-nav-link", forms: "databank-nav-link" });
                setRouteText("stages_of_work");

                break
            case "work_responsibilities":
                setColors({ ...colors, stages_of_work: "databank-nav-link", work_responsibilities: "databank-nav-link-active", instructions: "databank-nav-link", good_practises: "databank-nav-link", forms: "databank-nav-link" });
                setRouteText("work_responsibilities");
                break
            case "instructions":
                setColors({ ...colors, stages_of_work: "databank-nav-link", work_responsibilities: "databank-nav-link", instructions: "databank-nav-link-active", good_practises: "databank-nav-link", forms: "databank-nav-link" });
                setRouteText("instructions");
                break
            case "good_practises":
                setColors({ ...colors, stages_of_work: "databank-nav-link", work_responsibilities: "databank-nav-link", instructions: "databank-nav-link", good_practises: "databank-nav-link-active", forms: "databank-nav-link" });
                setRouteText("good_practises");
                break
            case "forms":
                setColors({ ...colors, stages_of_work: "databank-nav-link", work_responsibilities: "databank-nav-link", instructions: "databank-nav-link", good_practises: "databank-nav-link", forms: "databank-nav-link-active" });
                setRouteText("forms");
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
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const theme = createTheme({
        typography: {
            fontFamily: 'Montserrat, serif',
            allVariants: {
                color: "#2C2C2C"
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div>
                <AppBar position="fixed" elevation={1} style={{ boxShadow: 'none', height: '60p' }}>
                    <Toolbar className="toolbar" style={{ backgroundColor: '#F47D20' }}>

                        {/* Logo text (left corner) */}
                        <Typography className='test'
                            sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                                <img alt="Keikkakaveri logo-text" src={logo_text} style={{ width: '200px' }} />
                            </Link>
                        </Typography>

                        {/* Menu */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
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
                                <MenuItem>
                                    <Typography textAlign="center">
                                        <Link className="landing-login-dropdown" to="/login">
                                            {t('kirjaudu_sisaan')}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>

                        {/* Keikkakaveri logo-text sm (<600px) */}
                        <Typography
                            sx={{ mr: 2, display: { xs: 'flex', sm: 'flex', md: 'none' }, flexGrow: 1 }}>
                            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                                <img alt="Keikkakaveri logo-text" src={logo_text} style={{ width: '200px', marginRight: '30px' }} />
                            </Link>
                        </Typography>

                        {/* Nav top right corner */}
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }, marginTop: '15px' }}>
                            <Link to="/home" style={{ textDecoration: 'none' }}>
                                <Button className="databank-button">
                                    {t('homeButton')}
                                </Button>
                            </Link>
                            <Link to="/databank/lifeline" style={{ textDecoration: 'none' }}>
                                <Button className="databank-button" style={{ backgroundColor: '#FDFDFD' }}>
                                    {t('tietopankki')}
                                </Button>
                            </Link>
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <Button className="databank-button">
                                    {t('login_title')}
                                </Button>
                            </Link>

                            {/* Language change */}
                            <Button onClick={() => { handleCloseNavMenu(); changeLanguage('fi') }} style={{ marginRight: "0.5em", borderRadius: '5rem', minWidth: '40px', backgroundColor: color2, marginBottom: '10px' }}>
                                <Typography
                                    sx={{ color: 'black', fontWeight: 600, fontSize: 16 }}>
                                    FI
                                </Typography>
                            </Button>
                            <Button onClick={() => { handleCloseNavMenu(); changeLanguage('en') }} style={{ borderRadius: '5rem', minWidth: '40px', backgroundColor: color, marginBottom: '10px' }}>
                                <Typography
                                    sx={{ color: 'black', fontWeight: 600, fontSize: 16 }}>
                                    EN
                                </Typography>
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>

                {/* Databank picture and databank text */}
                <Container maxWidth={false} style={{ backgroundColor: '#F47D20', width: '100%', justifyContent: 'center', margin: 'auto', padding: 0 }} >
                    <div style={{ width: '100%', backgroundColor: '#F47D20', justifyContent: 'center', margin: 'auto' }}></div>
                    <Grid container spacing={4} sx={{ flexWrap: { xs: 'wrap-reverse', sm: 'wrap-reverse' }, backgroundColor: '#F47D20', width: '60%', justifyContent: 'center', margin: 'auto' }}  >
                        <Grid item xs={12} sm={6} sx={{ backgroundClip: 'content-box', backgroundColor: '#F47D20', textAlign: { xs: 'center', sm: 'right' }, marginTop: { xs: '10px', sm: '10px', md: '30px', lg: '30px' } }} style={{ paddingLeft: 0 }}>
                            <Grid sx={{ display: 'flex', flexDirection: 'column' }} style={{ textAlign: 'center', height: '100%', justifyContent: 'end', width: '90%' }}>
                                <CardMedia
                                    component="img"
                                    image={logo}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ backgroundClip: 'content-box', textAlign: { xs: 'center', sm: 'right' }, display: 'inline-flex' }} >
                            <Grid sx={{ visibility: { xs: 'hidden', sm: 'hidden', md: 'visible', lg: 'visible' }, display: 'flex', flexDirection: 'column', marginTop: { xs: '50px', sm: '100px', md: '100px', lg: '100px' } }} style={{ textAlign: 'center' }}>
                                <h1 style={{ margin: '0', textTransform: 'uppercase', fontFamily: 'sans-serif', fontWeight: 'bold', display: 'block', fontSize: '25px' }}>{t('tietopankki')}</h1>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container >

                {/* Databank tabs nav */}
                <Grid container spacing={0} sx={{ flexWrap: { sm: 'wrap', md: 'wrap', lg: 'nowrap' }, width: { xs: '90%', md: '60%' } }} justifyContent='flex-start' style={{ paddingTop: '5px', margin: 'auto' }}>
                    <Grid sx={{ flexDirection: 'column', wrap: 'no-wrap' }} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <Button style={{ padding: 5, width: '100%', whiteSpace: 'nowrap' }}>
                            <Link style={{ minHeight: '40px', fontSize: '14px' }} onClick={() => handleSwitch("stages_of_work")} className={colors.stages_of_work} to="/databank/lifeline">
                                {t('stages_of_work')}
                            </Link> {/*Vuokratyön vaiheet */}
                        </Button>
                    </Grid>
                    <Grid sx={{ flexDirection: 'column', wrap: 'no-wrap' }} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <Button style={{ padding: 5, width: '100%', whiteSpace: 'nowrap' }}>
                            <Link style={{ minHeight: '40px', fontSize: '14px' }} onClick={() => handleSwitch("work_responsibilities")} className={colors.work_responsibilities} to="/databank/responsibilities">
                                {t('work_responsibilities')}
                            </Link> {/*Vuokratyön vastuut */}
                        </Button>
                    </Grid>
                    <Grid sx={{ flexDirection: 'column', wrap: 'no-wrap' }} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <Button style={{ padding: 5, width: '100%', height: '100%', whiteSpace: 'nowrap' }}>
                            <Link style={{ minHeight: '40px', fontSize: '14px' }} onClick={() => handleSwitch("instructions")} className={colors.instructions} to="/databank/instructions">
                                {t('instructions')}
                            </Link> {/*Ohjeet */}
                        </Button>
                    </Grid>
                    <Grid sx={{ flexDirection: 'column', wrap: 'no-wrap' }} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <Button style={{ padding: 5, width: '100%', whiteSpace: 'nowrap' }}>
                            <Link style={{ minHeight: '40px', fontSize: '14px' }} onClick={() => handleSwitch("good_practises")} className={colors.good_practises} to="/databank/best-practices">
                                {t('good_practises')}
                            </Link> {/*Hyvät käytännöt */}
                        </Button>
                    </Grid>
                    <Grid sx={{ flexDirection: 'column', wrap: 'no-wrap' }} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                        <Button style={{ padding: 5, width: '100%', whiteSpace: 'nowrap' }}>
                            <Link style={{ minHeight: '40px', fontSize: '14px' }} onClick={() => handleSwitch("forms")} className={colors.forms} to="/databank/faq">
                                {t('rwm_forms')}
                            </Link> {/*Lomakkeet */}
                        </Button>

                    </Grid>

                    {/* Search */}
                    <Grid sx={{ flexDirection: 'column', wrap: 'no-wrap' }} item xs={4} sm={4} md={4} className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase style={{ border: "2px solid grey", borderRadius: "5rem" }}
                            placeholder={t("search")}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Grid>
                </Grid>

                {/* Databank route */}
                <Grid sx={{ width: { xs: '90%', md: '60%' } }} style={{ display: 'flex', flexDirection: 'row', margin: 'auto', marginTop: '32px' }}>
                    <Link to="/home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Typography className='databank-route' style={{ fontWeight: 'bold', marginRight: '5px' }}>
                            {t('homeButton')} /
                        </Typography>
                    </Link>
                    <Link to="/databank/lifeline" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Typography className='databank-route' style={{ fontWeight: 'bold', marginRight: '5px' }}>
                            {t('databank')} /
                        </Typography>
                    </Link>
                    <Typography className='databank-route' style={{ fontWeight: 'bold' }}>
                        {t(routeText)}
                    </Typography>
                </Grid>

                {children}
            </div>
        </ThemeProvider>
    );
}

const useStyles = makeStyles((theme) => ({
    search: {
        padding: '5px',
        position: 'relative',
        color: 'black',
        borderRadius: '5rem',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 1, 0, 2),
        height: '70%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    font: {
        fontFamily: 'Montserrat, sans-serif',
        color: '#2C2C2C',
    },
    inputInput: {
        fontFamily: 'Montserrat, sans-serif',

        color: '#2C2C2C',
        padding: theme.spacing(0.5, 0.5, 0.5, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        minWidth: '50px',
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