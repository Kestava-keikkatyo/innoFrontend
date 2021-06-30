import { AppBar, Box, Divider, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, makeStyles, Menu, MenuItem, Popover, Toolbar, Typography } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons';
import CheckIcon from '@material-ui/icons/Check';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import navConstants from '../../constants/navConstants';
import { TopAppBarProps } from '../../types/props';
import { IRootState } from '../../utils/store';
import ActiveLastBreadcrumb from '../ActiveLastBreadcrumb';
import { useHistory } from 'react-router-dom';
import { fetchNotifications } from '../../actions/notificationsActions';

const drawerWidth = navConstants.DRAWER_WIDTH;

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
const TopAppBar: React.FC<TopAppBarProps> = ({ handleDrawerToggle, open }) => {
  const classes = useStyles();
  const { data } = useSelector((state: IRootState) => state.user)
  const { notifications } = useSelector((state: IRootState) => state.notifications)
  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);

  useEffect(() => {
    dispatch(fetchNotifications())
    setInterval(() => {
      dispatch(fetchNotifications())
    }, 30000)
  }, [])

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const [anchorElNotifications, setAnchorElNotifications] = React.useState(null)
  const open2 = Boolean(anchorElNotifications)

  const handleNotifications = (event: any) => {
    setAnchorElNotifications(event.currentTarget)
  }

  const handleCloseNotifications = () => {
    setAnchorElNotifications(null)
  }

  const history = useHistory()

  const handleClickProfile = () => {
    history.push('/profile')
  }

  const handleClickProfileSettings = () => {
    history.push('/profile-edit')
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })} >
      <Toolbar className="toolbar" variant="dense">
        <ActiveLastBreadcrumb />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        {/**Here comes the rest appbar stuff */}
        <div className="app-bar-container">
          <Typography className={classes.text}>
            {data.name || 'Loading'}
          </Typography>
          {/**<img className={classes.logo} src={profileThumb} alt="logo" />*/}
          <IconButton
            aria-label="notifications"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="primary"
            onClick={handleNotifications}>
            <NotificationsIcon />
          </IconButton>
          <Popover
            id="menu-appbar"
            open={open2}
            anchorEl={anchorElNotifications}
            onClose={handleCloseNotifications}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box>
              <Typography className={classes.notificationsHeader}>Notifications:</Typography>
              <Divider />
              {notifications.message ? notifications.message.map((message: any) => {
                  if (!message.is_read) {
                    return (
                      <>
                      <List>
                        <ListItem>
                          <ListItemText
                            primary={message.text}
                          />
                          <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="check">
                              <CheckIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      </List>
                      <Divider/>
                      </>
                    )
                  }
                }) : <></>
              }
            </Box>
          </Popover>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="primary"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open1}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClickProfile}>Profiili</MenuItem>
            <MenuItem onClick={handleClickProfileSettings}>Asetukset</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  // appBar: {
  //   [theme.breakpoints.up('lg')]: {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     marginLeft: drawerWidth,
  //   },
  //   backgroundColor: 'white',
  //   borderTop: '16px solid #EB5A00'
  // },
  menuButton: {
    // marginRight: theme.spacing(2),
    // [theme.breakpoints.up('lg')]: {
    //   display: 'none',
    // },
    color: 'black',
  },
  logo: {
    width: 40,
    height: 40,
    padding: 0,
    borderRadius: 20,
    marginLeft: '1rem',
    marginTop: '-8px',
  },
  appBar: {
    width: `calc(100% - ${64}px)`,
    backgroundColor: 'white',
    borderTop: '16px solid #EB5A00',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down('lg')]: {
      width: `100vw`,
      // marginLeft: drawerWidth,
    },
  },
  appBarShift: {
    backgroundColor: 'white',
    borderTop: '16px solid #EB5A00',
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
    [theme.breakpoints.down('xs')]: {
      marginTop: '5%'
    }
  },
  notificationsHeader: {
    textAlign: 'center'
  }
}))

export default TopAppBar;
