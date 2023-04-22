import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Popover,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
  Menu,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MenuIcon from '@mui/icons-material/Menu'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import navConstants from '../../constants/navConstants'
import { TopAppBarProps } from '../../types/props'
import { IRootState } from '../../utils/store'
import ActiveLastBreadcrumb from '../ActiveLastBreadcrumb'
import { Link, useHistory } from 'react-router-dom'
import { fetchNotifications } from '../../actions/notificationsActions'
import Notifications from './Notifications'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { bindTrigger, bindPopover } from 'material-ui-popup-state'
import { usePopupState } from 'material-ui-popup-state/hooks'
import { logout } from '../../actions/userActions'
import { useTranslation } from 'react-i18next'
import { User } from '../../types/types';
import logo_text from '../../assets/logo_keikkakaveri_navbar.svg'

const LangMenuDropDown = () => {

  const { t, i18n } = useTranslation()
  const [color, setColor] = useState("");
  const [color2, setColor2] = useState("");
  const language = localStorage.getItem("i18nextLng");

  const changeLanguage = (code: string) => {
    localStorage.setItem('i18nextLng', code)
    i18n.changeLanguage(code)
    if (language === "en") {
      setColor2("#FDFDFD")
      setColor("#F47D20")
    } else {
      setColor("#FDFDFD");
      setColor2("#F47D20")
    }
  }

  useEffect(() => {
    if (language === "en") {
      setColor("#FDFDFD")
    } else {
      setColor2("#FDFDFD");
    }
  }, [])

  return (
    <>
      <div style={{}}>

        {/* Language change */}
        <Button onClick={() => { changeLanguage('fi') }} style={{ marginRight: "1em", borderRadius: '5rem', minWidth: '40px', backgroundColor: color2 }}>
          <Typography
            sx={{ color: 'black', fontWeight: 600, fontSize: 16 }}>
            FI
          </Typography>
        </Button>
        <Button onClick={() => { changeLanguage('en') }} style={{ marginRight: "1em", borderRadius: '5rem', minWidth: '40px', backgroundColor: color }}>
          <Typography
            sx={{ color: 'black', fontWeight: 600, fontSize: 16 }}>
            EN
          </Typography>
        </Button>
      </div>
    </>
  )
}

const drawerWidth = navConstants.DRAWER_WIDTH
/**
 * @component
 * @desc This will be probably deleted in future version.
 * @param props
 * @param {boolean} open checks if MenuDropdown is open.
 */
// const UserMenuDropdown: React.FC<{ open: boolean }> = ({ open }) => {
//   const dispatch = useDispatch()

//   return(
//     <div className={`${open ? 'hidden': ''} user-menu-dropdown`}>
//       <List className="overflow-container">
//         <ListItem button component={Link} to="/profile">
//           {/* <ListItemIcon>{<Home />}</ListItemIcon> */}
//           <ListItemText primary="Profile settings" />
//         </ListItem>
//         <Divider />
//         <ListItem button component={Link} to="/settings">
//           {/* <ListItemIcon>{<MailIcon />}</ListItemIcon> */}
//           <ListItemText primary="App settings" />
//         </ListItem>
//         <Divider />
//         <ListItem button component={Link} to="/help">
//           {/* <ListItemIcon>{<CalendarTodayIcon />}</ListItemIcon> */}
//           <ListItemText primary="Help" />
//         </ListItem>
//         <Divider />
//         <ListItem button onClick={() => dispatch(logout())}>
//           {/* <ListItemIcon>{<InboxIcon />}</ListItemIcon> */}
//           <ListItemText primary="Log out" />
//         </ListItem>
//       </List>
//     </div>
//   )
// }

/**
 * @component
 * @desc Basically a stripe on top off the application
 * which contains drawerbutton when screenwidth is small.
 * @param {TopAppBarProps} props
 * @param {MouseEvent} props.handleDrawerToggle An event function.
 * Handles the drawer toggling on small screen size.
 * @todo refaktoroi tämä.
 */

const TopAppBar: React.FC<TopAppBarProps> = ({ handleDrawerToggle }) => {

  const { t } = useTranslation()
  const classes = useStyles()
  const { data } = useSelector((state: IRootState) => state.user)
  const dispatch = useDispatch()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const [timers, setTimers] = useState<any[]>([])
  const [anchorElNotifications, setAnchorElNotifications] = React.useState(null)
  const open2 = Boolean(anchorElNotifications)
  const history = useHistory()

  const { notifications } = useSelector(
    (state: IRootState) => state.notification
  )

  const currentProfil: User = useSelector(
    (state: IRootState) => state.user.data
  )

  const currentProfile: User = React.useMemo(
    () => currentProfil,
    [currentProfil]
  )

  // popupState for user popup menu
  // https://www.npmjs.com/package/material-ui-popup-state
  const popupState = usePopupState({
    variant: 'popper',
    popupId: 'userProfilePopper',
  })

  useEffect(() => {
    dispatch(fetchNotifications())
    console.log('Timers', timers)
    timers.forEach(timer => {
      console.log('Cleared timer: ', timer)
      clearInterval(timer)
    })
    setTimers([])
    const newInterval = setInterval(() => {
      dispatch(fetchNotifications())
    }, 300000)
    setTimers(new Array(newInterval))
  }, [dispatch, data.profileId])

  const handleNotifications = (event: any) => {
    setAnchorElNotifications(event.currentTarget)
  }

  const handleCloseNotifications = () => {
    setAnchorElNotifications(null)
  }

  const handleProfileClick = () => {
    popupState.close()
    history.push('/profile')
  }

  const handleSettingsClick = () => {
    popupState.close()
    history.push('/settings')
  }

  const handleLogout = () => {
    popupState.close()
    dispatch(logout())
  }

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const appWorker = (
    <AppBar
      position="fixed"
      elevation={0}
      className={clsx(classes.appBusiness)}
    >
      <Toolbar className="toolbar" style={{ backgroundColor: '#F47D20', height: '100px' }}>

        {/* Logo text (left corner) */}
        <Typography style={{ marginLeft: '20px' }}
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
          >

            {/* Side menu */}
            <MenuItem key="0" onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link className="landing-nav-link" to="/home">
                  {t('tyopoyta')}
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem key="2" >
              <Typography
                sx={{ color: 'black', fontWeight: 600, fontSize: 16 }}>
                FI
              </Typography>
            </MenuItem>
            <MenuItem key="3" >
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
        <Box style={{ alignItems: 'center' }} sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}>
          <Link to="/home" style={{ textDecoration: 'none', marginRight: '1em' }}>
            <Button className="databank-button">
              {t('homeButton')}
            </Button>
          </Link>
          <Link to="/databank" style={{ textDecoration: 'none', marginRight: '1em' }}>
            <Button className="databank-button" style={{}}>
              {t('tietopankki')}
            </Button>
          </Link>
          <LangMenuDropDown />
          <div style={{ height: '100%', backgroundColor: '#C0CFFA', display: 'flex', flexWrap: 'nowrap', padding: '26px', borderLeft: '3px solid white' }}>
            <Badge
              badgeContent={
                notifications
                  ? notifications.length
                  : 0
              }
              color="secondary"
            >
              <IconButton
                style={{ color: 'black' }}
                aria-label="notifications"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="default"
                sx={{ borderRadius: 0 }}
                onClick={handleNotifications}
                size="large">
                <NotificationsIcon />
              </IconButton>
            </Badge>
          </div>
          <div style={{ height: '100%', backgroundColor: '#C0CFFA', display: 'flex', flexWrap: 'nowrap', padding: '22px', borderLeft: '3px solid white' }}>
            <Popover
              id="menu-appbar"
              open={open2}
              anchorEl={anchorElNotifications}
              onClose={handleCloseNotifications}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {notifications ? (
                <Notifications
                  notifications={notifications}
                  onClose={handleCloseNotifications}
                />
              ) : (
                <></>
              )}
            </Popover>

            {/* Business popup menu */}
            <div style={{ backgroundColor: '#C0CFFA' }}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                color="primary"
                sx={{ borderRadius: 0 }}
                className={classes.user}
                {...bindTrigger(popupState)}
                size="large">
                <Typography className={classes.username}>
                  {data.firstName || 'Loading'}
                </Typography>
                <Avatar
                  style={{ margin: 'auto', backgroundColor: 'black', color: '#C0CFFA' }}
                  className={classes.avatarBusiness}
                  src={currentProfile.profilePicture || ''}
                  alt="profilePicture"
                />
                <ExpandMoreIcon style={{ color: 'black' }} />
              </IconButton>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Box className={classes.userPopover}>
                  <Grid style={{ marginTop: 16 }}>
                    <Avatar
                      style={{ margin: 'auto' }}
                      className={classes.popoverAvatarBusiness}
                      src={currentProfile.profilePicture || ''}
                      alt="profilePicture"
                    />
                    <Typography
                      variant="body1"
                      align="center"
                      style={{ marginTop: 16 }}
                    >
                      {currentProfile.firstName} {currentProfile.lastName}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      style={{ marginBottom: 16 }}
                    >
                      {currentProfile.email}
                    </Typography>
                  </Grid>
                  <Divider />
                  <MenuItem
                    onClick={handleProfileClick}
                    style={{ marginTop: 10 }}
                  >
                    <AccountCircleIcon
                      style={{ fontSize: 24, marginRight: 10 }}
                    />{' '}
                    {t('profile')}
                  </MenuItem>
                  <MenuItem onClick={handleSettingsClick}>
                    <SettingsIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
                    {t('settings')}
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ExitToAppIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
                    {t('logout')}
                  </MenuItem>
                </Box>
              </Popover>
            </div>
          </div>
        </Box>
      </Toolbar>
      <div style={{ display: 'flex', backgroundColor: '#FDFDFD' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
          size="large">
          <MenuIcon />
        </IconButton>
        <h3 style={{ color: 'black', textTransform: 'uppercase', padding: '5px', fontWeight: 'bold' }}>{t('workerFrontpage')}</h3>
      </div>
    </AppBar>
  )

  if (data.role === 'worker') {
    return <div>{appWorker}</div>
  }

  const appAgency = (
    <AppBar
      position="fixed"
      elevation={0}
      className={clsx(classes.appBusiness)}
    >
      <Toolbar className="toolbar" style={{ backgroundColor: '#F47D20', height: '100px' }}>

        {/* Logo text (left corner) */}
        <Typography style={{ marginLeft: '20px' }}
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
          >

            {/* Side menu */}
            <MenuItem key="0" onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link className="landing-nav-link" to="/home">
                  {t('tyopoyta')}
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem key="2" >
              <Typography
                sx={{ color: 'black', fontWeight: 600, fontSize: 16 }}>
                FI
              </Typography>
            </MenuItem>
            <MenuItem key="3" >
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
        <Box style={{ alignItems: 'center' }} sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}>
          <Link to="/home" style={{ textDecoration: 'none', marginRight: '1em' }}>
            <Button className="databank-button">
              {t('homeButton')}
            </Button>
          </Link>
          <Link to="/databank" style={{ textDecoration: 'none', marginRight: '1em' }}>
            <Button className="databank-button" style={{}}>
              {t('tietopankki')}
            </Button>
          </Link>
          <LangMenuDropDown />
          <div style={{ height: '100%', backgroundColor: '#C0CFFA', display: 'flex', flexWrap: 'nowrap', padding: '26px', borderLeft: '3px solid white' }}>
            <Badge
              badgeContent={
                notifications
                  ? notifications.length
                  : 0
              }
              color="secondary"
            >
              <IconButton
                style={{ color: 'black' }}
                aria-label="notifications"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="default"
                sx={{ borderRadius: 0 }}
                onClick={handleNotifications}
                size="large">
                <NotificationsIcon />
              </IconButton>
            </Badge>
          </div>
          <div style={{ height: '100%', backgroundColor: '#C0CFFA', display: 'flex', flexWrap: 'nowrap', padding: '22px', borderLeft: '3px solid white' }}>
            <Popover
              id="menu-appbar"
              open={open2}
              anchorEl={anchorElNotifications}
              onClose={handleCloseNotifications}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {notifications ? (
                <Notifications
                  notifications={notifications}
                  onClose={handleCloseNotifications}
                />
              ) : (
                <></>
              )}
            </Popover>

            {/* Business popup menu */}
            <div style={{ backgroundColor: '#C0CFFA' }}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                color="primary"
                sx={{ borderRadius: 0 }}
                className={classes.user}
                {...bindTrigger(popupState)}
                size="large">
                <Typography className={classes.username}>
                  {data.firstName || 'Loading'}
                </Typography>
                <Avatar
                  style={{ margin: 'auto', backgroundColor: 'black', color: '#C0CFFA' }}
                  className={classes.avatarBusiness}
                  src={currentProfile.profilePicture || ''}
                  alt="profilePicture"
                />
                <ExpandMoreIcon style={{ color: 'black' }} />
              </IconButton>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Box className={classes.userPopover}>
                  <Grid style={{ marginTop: 16 }}>
                    <Avatar
                      style={{ margin: 'auto' }}
                      className={classes.popoverAvatarBusiness}
                      src={currentProfile.profilePicture || ''}
                      alt="profilePicture"
                    />
                    <Typography
                      variant="body1"
                      align="center"
                      style={{ marginTop: 16 }}
                    >
                      {currentProfile.firstName} {currentProfile.lastName}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      style={{ marginBottom: 16 }}
                    >
                      {currentProfile.email}
                    </Typography>
                  </Grid>
                  <Divider />
                  <MenuItem
                    onClick={handleProfileClick}
                    style={{ marginTop: 10 }}
                  >
                    <AccountCircleIcon
                      style={{ fontSize: 24, marginRight: 10 }}
                    />{' '}
                    {t('profile')}
                  </MenuItem>
                  <MenuItem onClick={handleSettingsClick}>
                    <SettingsIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
                    {t('settings')}
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ExitToAppIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
                    {t('logout')}
                  </MenuItem>
                </Box>
              </Popover>
            </div>
          </div>
        </Box>
      </Toolbar>
      <div style={{ display: 'flex', backgroundColor: '#FDFDFD' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
          size="large">
          <MenuIcon />
        </IconButton>
        <Typography sx={{fontSize: {md: '20px', sm: '20px', xs: '15px'}}} style={{ margin: '5px 0px 0px 5px', fontFamily: 'Montserrat, serif', color: 'black', textTransform: 'uppercase', padding: '5px', fontWeight: 'bold'}}>{t('agencyFrontpage')}</Typography>
      </div>
    </AppBar>
  )

  if (data.role === 'agency') {
    return <div>{appAgency}</div>
  }

  const appBusiness = (
    <AppBar
      position="fixed"
      elevation={0}
      className={clsx(classes.appBusiness)}
    >
      <Toolbar className="toolbar" style={{ backgroundColor: '#F47D20', height: '100px' }}>

        {/* Logo text (left corner) */}
        <Typography style={{ marginLeft: '20px' }}
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
          >

            {/* Side menu */}
            <MenuItem key="0" onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link className="landing-nav-link" to="/home">
                  {t('tyopoyta')}
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem key="2" >
              <Typography
                sx={{ color: 'black', fontWeight: 600, fontSize: 16 }}>
                FI
              </Typography>
            </MenuItem>
            <MenuItem key="3" >
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
        <Box style={{ alignItems: 'center' }} sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}>
          <Link to="/home" style={{ textDecoration: 'none', marginRight: '1em' }}>
            <Button className="databank-button">
              {t('homeButton')}
            </Button>
          </Link>
          <Link to="/databank" style={{ textDecoration: 'none', marginRight: '1em' }}>
            <Button className="databank-button" style={{}}>
              {t('tietopankki')}
            </Button>
          </Link>
          <LangMenuDropDown />
          <div style={{ height: '100%', backgroundColor: '#C0CFFA', display: 'flex', flexWrap: 'nowrap', padding: '26px', borderLeft: '3px solid white' }}>
            <Badge
              badgeContent={
                notifications
                  ? notifications.length
                  : 0
              }
              color="secondary"
            >
              <IconButton
                style={{ color: 'black' }}
                aria-label="notifications"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="default"
                sx={{ borderRadius: 0 }}
                onClick={handleNotifications}
                size="large">
                <NotificationsIcon />
              </IconButton>
            </Badge>
          </div>
          <div style={{ height: '100%', backgroundColor: '#C0CFFA', display: 'flex', flexWrap: 'nowrap', padding: '22px', borderLeft: '3px solid white' }}>
            <Popover
              id="menu-appbar"
              open={open2}
              anchorEl={anchorElNotifications}
              onClose={handleCloseNotifications}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {notifications ? (
                <Notifications
                  notifications={notifications}
                  onClose={handleCloseNotifications}
                />
              ) : (
                <></>
              )}
            </Popover>

            {/* Business popup menu */}
            <div style={{ backgroundColor: '#C0CFFA' }}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                color="primary"
                sx={{ borderRadius: 0 }}
                className={classes.user}
                {...bindTrigger(popupState)}
                size="large">
                <Typography className={classes.username}>
                  {data.firstName || 'Loading'}
                </Typography>
                <Avatar
                  style={{ margin: 'auto', backgroundColor: 'black', color: '#C0CFFA' }}
                  className={classes.avatarBusiness}
                  src={currentProfile.profilePicture || ''}
                  alt="profilePicture"
                />
                <ExpandMoreIcon style={{ color: 'black' }} />
              </IconButton>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Box className={classes.userPopover}>
                  <Grid style={{ marginTop: 16 }}>
                    <Avatar
                      style={{ margin: 'auto' }}
                      className={classes.popoverAvatarBusiness}
                      src={currentProfile.profilePicture || ''}
                      alt="profilePicture"
                    />
                    <Typography
                      variant="body1"
                      align="center"
                      style={{ marginTop: 16 }}
                    >
                      {currentProfile.firstName} {currentProfile.lastName}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      style={{ marginBottom: 16 }}
                    >
                      {currentProfile.email}
                    </Typography>
                  </Grid>
                  <Divider />
                  <MenuItem
                    onClick={handleProfileClick}
                    style={{ marginTop: 10 }}
                  >
                    <AccountCircleIcon
                      style={{ fontSize: 24, marginRight: 10 }}
                    />{' '}
                    {t('profile')}
                  </MenuItem>
                  <MenuItem onClick={handleSettingsClick}>
                    <SettingsIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
                    {t('settings')}
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ExitToAppIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
                    {t('logout')}
                  </MenuItem>
                </Box>
              </Popover>
            </div>
          </div>
        </Box>
      </Toolbar>
      <div style={{ display: 'flex', backgroundColor: '#FDFDFD' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
          size="large">
          <MenuIcon />
        </IconButton>
        <h3 style={{ color: 'black', textTransform: 'uppercase', padding: '5px', fontWeight: 'bold' }}>{t('businessFrontpage')}</h3>
      </div>
    </AppBar>
  )

  if (data.role === 'business') {
    return <div>{appBusiness}</div>
  }

  return (
    <AppBar position="fixed" elevation={0} className={clsx(classes.appBar)}>
      <Toolbar className="toolbar" variant="dense">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
          size="large">
          <MenuIcon />
        </IconButton>
        {matches ? null : <ActiveLastBreadcrumb />}

        {/** Here comes the rest appbar stuff */}
        <div className="app-bar-container">
          {/** <img className={classes.logo} src={profileThumb} alt="logo" />*/}
          <Badge
            badgeContent={
              notifications
                ? notifications.length
                : 0
            }
            color="secondary"
          >
            <IconButton
              aria-label="notifications"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="default"
              onClick={handleNotifications}
              size="large">
              <NotificationsIcon />
            </IconButton>
            <LangMenuDropDown />
          </Badge>
          <Popover
            id="menu-appbar"
            open={open2}
            anchorEl={anchorElNotifications}
            onClose={handleCloseNotifications}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {notifications ? (
              <Notifications
                notifications={notifications}
                onClose={handleCloseNotifications}
              />
            ) : (
              <></>
            )}
          </Popover>

          {/* User popup menu */}
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              color="primary"
              className={classes.user}
              {...bindTrigger(popupState)}
              size="large">
              <Typography className={classes.username}>
                {data.firstName || 'Loading'}
              </Typography>
              <Avatar
                style={{ margin: 'auto' }}
                className={classes.avatar}
                src={currentProfile.profilePicture || ''}
                alt="profilePicture"
              />
              <ExpandMoreIcon />
            </IconButton>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box className={classes.userPopover}>
                <Grid style={{ marginTop: 16 }}>
                  <Avatar
                    style={{ margin: 'auto' }}
                    className={classes.popoverAvatar}
                    src={currentProfile.profilePicture || ''}
                    alt="profilePicture"
                  />
                  <Typography
                    variant="body1"
                    align="center"
                    style={{ marginTop: 16 }}
                  >
                    {currentProfile.firstName} {currentProfile.lastName}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    style={{ marginBottom: 16 }}
                  >
                    {currentProfile.email}
                  </Typography>
                </Grid>
                <Divider />
                <MenuItem
                  onClick={handleProfileClick}
                  style={{ marginTop: 10 }}
                >
                  <AccountCircleIcon
                    style={{ fontSize: 24, marginRight: 10 }}
                  />{' '}
                  {t('profile')}
                </MenuItem>
                <MenuItem onClick={handleSettingsClick}>
                  <SettingsIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
                  {t('settings')}
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ExitToAppIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
                  {t('logout')}
                </MenuItem>
              </Box>
            </Popover>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  menuButton: {
    color: 'black',
  },
  logo: {
    width: 40,
    height: 40,
    padding: -20,
    borderRadius: 20,
    marginLeft: '1rem',
    marginTop: '-8px',
  },
  appWorker: {
    borderTop: '16px solid #2386CC',
    width: `calc(100% - ${0}px)`,
    backgroundColor: 'white',

    zIndex: theme.zIndex.drawer + 1,
  },
  appAgency: {
    borderTop: '16px solid #009E60',
    width: `calc(100% - ${0}px)`,
    backgroundColor: 'white',

    zIndex: theme.zIndex.drawer + 1,
  },
  appBusiness: {
    width: `calc(100% - ${0}px)`,
    backgroundColor: 'white',

    zIndex: theme.zIndex.drawer + 1,
  },
  appBar: {
    width: `calc(100% - ${0}px)`,
    backgroundColor: '#F47D20',
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.down('lg')]: {
      width: '100vw',
    },
  },
  appBarShift: {
    backgroundColor: 'white',
    borderTop: '16px solid #2386CC',
    marginLeft: drawerWidth,
    width: `calc(100% - ${navConstants.DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  text: {
    color: 'black',
    marginTop: '1%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5%',
    },
  },
  user: {
  },
  avatarWorker: {
    color: theme.palette.getContrastText('#eb5a00'),
    backgroundColor: '#2386CC',
    width: theme.spacing(4),
    height: theme.spacing(4),
  },

  avatarAgency: {
    color: theme.palette.getContrastText('#009E60'),
    backgroundColor: '#009E60',
    width: theme.spacing(4),
    height: theme.spacing(4),
  },

  avatarBusiness: {
    color: theme.palette.getContrastText('#eb5a00'),
    backgroundColor: '#eb5a00',
    width: theme.spacing(4),
    height: theme.spacing(4),
  },

  avatar: {
    color: theme.palette.getContrastText('#eb5a00'),
    backgroundColor: '#eb5a00',
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  popoverAvatarWorker: {
    color: theme.palette.getContrastText('#2386CC'),
    backgroundColor: '#2386CC',
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  popoverAvatarAgency: {
    color: theme.palette.getContrastText('#009E60'),
    backgroundColor: '#009E60',
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  popoverAvatarBusiness: {
    color: theme.palette.getContrastText('#eb5a00'),
    backgroundColor: '#eb5a00',
    width: theme.spacing(10),
    height: theme.spacing(10),
  },

  popoverAvatar: {
    color: theme.palette.getContrastText('#eb5a00'),
    backgroundColor: '#eb5a00',
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  userPopover: {
    padding: 5,
    width: 300,
  },
  username: {
    fontWeight: 'bold',
    color: 'black',
    marginRight: 10,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}))

export default TopAppBar

