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
  Button,
  Menu,
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MenuIcon from '@mui/icons-material/Menu'
import clsx from 'clsx'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../../utils/store'
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
import { User } from '../../types/types'
import logo_text from '../../assets/logo_keikkakaveri_navbar.svg'

const LangMenuDropDown: React.FC = () => {
  const language = localStorage.getItem('i18nextLng')

  return (
    <>
      <div>
        <LanguageButton languageCode='fi' currentLanguage={language} />
        <LanguageButton languageCode='en' currentLanguage={language} />
      </div>
    </>
  )
}

interface LanguageButtonProps {
  languageCode: string
  currentLanguage: string | null
}

const LanguageButton: React.FC<LanguageButtonProps> = ({ languageCode, currentLanguage }) => {
  const { i18n } = useTranslation()

  return (
    <Button
      onClick={() => {
        localStorage.setItem('i18nextLng', languageCode)
        i18n.changeLanguage(languageCode)
      }}
      style={{
        marginRight: '1em',
        borderRadius: '5rem',
        minWidth: '40px',
        backgroundColor: currentLanguage === languageCode ? '#FDFDFD' : '#F47D20',
      }}
    >
      <Typography sx={{ color: 'black', fontWeight: 600, fontSize: 16 }}>
        {languageCode.toUpperCase()}
      </Typography>
    </Button>
  )
}

const TopAppBar: React.FC = () => {
  const { t } = useTranslation()

  const classes = useStyles()

  const { data } = useSelector((state: IRootState) => state.user)
  const dispatch = useDispatch()
  const [anchorElNotifications, setAnchorElNotifications] = React.useState(null)
  const open2 = Boolean(anchorElNotifications)
  const history = useHistory()

  const { notifications } = useSelector((state: IRootState) => state.notification)

  const currentProfil: User = useSelector((state: IRootState) => state.user.data)

  const currentProfile: User = React.useMemo(() => currentProfil, [currentProfil])

  // popupState for user popup menu
  // https://www.npmjs.com/package/material-ui-popup-state
  const popupState = usePopupState({
    variant: 'popper',
    popupId: 'userProfilePopper',
  })

  useEffect(() => {
    // Set up an interval to dispatch the action every 300,000 milliseconds (5 minutes)
    const intervalId = setInterval(dispatch(fetchNotifications()), 300000)

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId)
    }
  }, [dispatch])

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

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  {
    if (data.role)
      return (
        <AppBar className={clsx(classes.appBusiness)}>
          <Toolbar className='toolbar' style={{ backgroundColor: '#F47D20', height: '100px' }}>
            {/* Logo text (left corner) */}
            <Typography
              style={{ marginLeft: '20px' }}
              sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
            >
              <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                <img alt='Keikkakaveri logo-text' src={logo_text} style={{ width: '200px' }} />
              </Link>
            </Typography>

            {/* Menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', sm: 'flex', md: 'none' },
              }}
            >
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='default'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
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
                  display: { xs: 'block', sm: 'block', md: 'none' },
                }}
              >
                {/* Side menu */}
                <MenuItem key='0' onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>
                    <Link className='landing-nav-link' to='/home'>
                      {t('tyopoyta')}
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem key='2'>
                  <Typography sx={{ color: 'black', fontWeight: 600, fontSize: 16 }}>FI</Typography>
                </MenuItem>
                <MenuItem key='3'>
                  <Typography sx={{ color: 'black', fontWeight: 600, fontSize: 16 }}>EN</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign='center'>
                    <Link className='landing-login-dropdown' to='/login'>
                      {t('kirjaudu_sisaan')}
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            {/* Keikkakaveri logo-text sm (<600px) */}
            <Typography
              sx={{ mr: 2, display: { xs: 'flex', sm: 'flex', md: 'none' }, flexGrow: 1 }}
            >
              <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  alt='Keikkakaveri logo-text'
                  src={logo_text}
                  style={{ width: '200px', marginRight: '30px' }}
                />
              </Link>
            </Typography>

            {/* Nav top right corner */}
            <Box
              style={{ alignItems: 'center' }}
              sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
            >
              <Link to='/home' style={{ textDecoration: 'none', marginRight: '1em' }}>
                <Button className='databank-button'>{t('homeButton')}</Button>
              </Link>
              <Link to='/databank/lifeline' style={{ textDecoration: 'none', marginRight: '1em' }}>
                <Button className='databank-button'>{t('tietopankki')}</Button>
              </Link>
              <LangMenuDropDown />
              <div
                style={{
                  height: '100%',
                  backgroundColor: '#C0CFFA',
                  display: 'flex',
                  flexWrap: 'nowrap',
                  padding: '26px',
                  borderLeft: '3px solid white',
                }}
              >
                <Badge badgeContent={notifications ? notifications.length : 0} color='secondary'>
                  <IconButton
                    style={{ color: 'black' }}
                    aria-label='notifications'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    color='default'
                    sx={{ borderRadius: 0 }}
                    onClick={handleNotifications}
                    size='large'
                  >
                    <NotificationsIcon />
                  </IconButton>
                </Badge>
              </div>
              <div
                style={{
                  height: '100%',
                  backgroundColor: '#C0CFFA',
                  display: 'flex',
                  flexWrap: 'nowrap',
                  padding: '22px',
                  borderLeft: '3px solid white',
                }}
              >
                <Popover
                  id='menu-appbar'
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
                <div style={{ backgroundColor: '#C0CFFA' }}>
                  <IconButton
                    aria-label='account of current user'
                    aria-controls='menu-appbar'
                    color='primary'
                    sx={{ borderRadius: 0 }}
                    {...bindTrigger(popupState)}
                    size='large'
                  >
                    <Typography className={classes.username}>
                      {data.firstName || 'Loading'}
                    </Typography>
                    <Avatar
                      style={{ margin: 'auto', backgroundColor: 'black', color: '#C0CFFA' }}
                      className={classes.avatar}
                      src={currentProfile.profilePicture || ''}
                      alt='profilePicture'
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
                          className={classes.popoverAvatar}
                          src={currentProfile.profilePicture || ''}
                          alt='profilePicture'
                        />
                        <Typography variant='body1' align='center' style={{ marginTop: 16 }}>
                          {currentProfile.firstName} {currentProfile.lastName}
                        </Typography>
                        <Typography variant='body2' align='center' style={{ marginBottom: 16 }}>
                          {currentProfile.email}
                        </Typography>
                      </Grid>
                      <Divider />
                      <MenuItem onClick={handleProfileClick} style={{ marginTop: 10 }}>
                        <AccountCircleIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
                        {t('profile')}
                      </MenuItem>
                      <MenuItem onClick={handleSettingsClick}>
                        <SettingsIcon style={{ fontSize: 24, marginRight: 10 }} /> {t('settings')}
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>
                        <ExitToAppIcon style={{ fontSize: 24, marginRight: 10 }} /> {t('logout')}
                      </MenuItem>
                    </Box>
                  </Popover>
                </div>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
      )
  }

  return <></>
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
  appBusiness: {
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
  text: {
    color: 'black',
    marginTop: '1%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5%',
    },
  },
  avatar: {
    color: theme.palette.getContrastText('#eb5a00'),
    backgroundColor: '#eb5a00',
    width: theme.spacing(4),
    height: theme.spacing(4),
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
