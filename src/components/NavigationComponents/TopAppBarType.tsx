import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  MenuItem,
  Popover,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import navConstants from '../../constants/navConstants';
import { TopAppBarProps } from '../../types/props';
import { IRootState } from '../../utils/store';
import ActiveLastBreadcrumb from '../ActiveLastBreadcrumb';
import { useHistory } from 'react-router-dom';
import { fetchNotifications } from '../../actions/notificationsActions';
import Notifications from './Notifications';
import { fetchProfileById } from '../../actions/profileActions';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { usePopupState } from 'material-ui-popup-state/hooks';
import { logout } from '../../actions/userActions';
import { useTranslation } from 'react-i18next'
import { roles } from '../../types/types';

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
  const { t } = useTranslation()
  const classes = useStyles();
  const { data } = useSelector((state: IRootState) => state.user);
  
  const { notifications } = useSelector(
    (state: IRootState) => state.notifications
  );
  
  
  const currentProfile: any = useSelector(
    (state: any) => state.profile.currentProfile
  );
 
  const dispatch = useDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  // popupState for user popup menu
  // https://www.npmjs.com/package/material-ui-popup-state
  const popupState = usePopupState({
    variant: 'popper',
    popupId: 'userProfilePopper',
  });

  useEffect(() => {
    dispatch(fetchProfileById(data.profileId));
    dispatch(fetchNotifications());
    setInterval(() => {
      dispatch(fetchNotifications());
    }, 30000);
  }, [dispatch, data.profileId]);

  const [anchorElNotifications, setAnchorElNotifications] =
    React.useState(null);
  const open2 = Boolean(anchorElNotifications);

  const handleNotifications = (event: any) => {
    setAnchorElNotifications(event.currentTarget);
  };

  const handleCloseNotifications = () => {
    setAnchorElNotifications(null);
  };

  const history = useHistory();

  const handleProfileClick = () => {
    popupState.close();
    history.push('/profile');
  };

  const handleSettingsClick = () => {
    popupState.close();
    history.push('/settings');
  };

  const handleLogout = () => {
    popupState.close();
    dispatch(logout());
  };

const appWorker= ( <AppBar position="fixed" elevation={0} className={clsx(classes.appWorker)}>
<Toolbar className="toolbar" variant="dense">
  <IconButton
    color="inherit"
    aria-label="open drawer"
    edge="end"
    onClick={handleDrawerToggle}
    className={classes.menuButton}
  >
    <MenuIcon />
  </IconButton>
  {matches ? null : <ActiveLastBreadcrumb />}
  {/**Here comes the rest appbar stuff */}
  <div className="app-bar-container">
    {/**<img className={classes.logo} src={profileThumb} alt="logo" />*/}
    <Badge
      badgeContent={
        notifications.unread_messages
          ? notifications.unread_messages.length
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
      >
        <NotificationsIcon />
      </IconButton>
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
      {notifications.unread_messages ? (
        <Notifications
          notifications={notifications.unread_messages}
          handleCloseNotifications={handleCloseNotifications}
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
      >
        <Typography className={classes.username}>
          {data.name || 'Loading'}
        </Typography>
        <Avatar
          style={{ margin: 'auto' }}
          className={classes.avatarWorker}
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
              className={classes.popoverAvatarWorker}
              src={currentProfile.profilePicture || ''}
              alt="profilePicture"
            />
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: 16 }}
            >
              {currentProfile.name}
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
            {t("profile")}
          </MenuItem>
          <MenuItem onClick={handleSettingsClick}>
            <SettingsIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
            {t("settings")}
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ExitToAppIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
            {t("logout")}
          </MenuItem>
        </Box>
      </Popover>
    </div>
  </div>
</Toolbar>
</AppBar>
);

if(data.role === "worker") {
  return (
         <div>
           {appWorker} 
         </div>
         )
       }


const appAgency= ( <AppBar position="fixed" elevation={0} className={clsx(classes.appAgency)}>
<Toolbar className="toolbar" variant="dense">
  <IconButton
    color="inherit"
    aria-label="open drawer"
    edge="end"
    onClick={handleDrawerToggle}
    className={classes.menuButton}
  >
    <MenuIcon />
  </IconButton>
  {matches ? null : <ActiveLastBreadcrumb />}
  {/**Here comes the rest appbar stuff */}
  <div className="app-bar-container">
    {/**<img className={classes.logo} src={profileThumb} alt="logo" />*/}
    <Badge
      badgeContent={
        notifications.unread_messages
          ? notifications.unread_messages.length
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
      >
        <NotificationsIcon />
      </IconButton>
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
      {notifications.unread_messages ? (
        <Notifications
          notifications={notifications.unread_messages}
          handleCloseNotifications={handleCloseNotifications}
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
      >
        <Typography className={classes.username}>
          {data.name || 'Loading'}
        </Typography>
        <Avatar
          style={{ margin: 'auto' }}
          className={classes.avatarAgency}
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
              className={classes.popoverAvatarAgency}
              src={currentProfile.profilePicture || ''}
              alt="profilePicture"
            />
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: 16 }}
            >
              {currentProfile.name}
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
            {t("profile")}
          </MenuItem>
          <MenuItem onClick={handleSettingsClick}>
            <SettingsIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
            {t("settings")}
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ExitToAppIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
            {t("logout")}
          </MenuItem>
        </Box>
      </Popover>
    </div>
  </div>
</Toolbar>
</AppBar>
);

if(data.role === "agency") {
  return (
         <div>
           {appAgency} 
         </div>
         )
       }


       const appBusiness= ( <AppBar position="fixed" elevation={0} className={clsx(classes.appBusiness)}>
       <Toolbar className="toolbar" variant="dense">
         <IconButton
           color="inherit"
           aria-label="open drawer"
           edge="end"
           onClick={handleDrawerToggle}
           className={classes.menuButton}
         >
           <MenuIcon />
         </IconButton>
         {matches ? null : <ActiveLastBreadcrumb />}
         {/**Here comes the rest appbar stuff */}
         <div className="app-bar-container">
           {/**<img className={classes.logo} src={profileThumb} alt="logo" />*/}
           <Badge
             badgeContent={
               notifications.unread_messages
                 ? notifications.unread_messages.length
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
             >
               <NotificationsIcon />
             </IconButton>
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
             {notifications.unread_messages ? (
               <Notifications
                 notifications={notifications.unread_messages}
                 handleCloseNotifications={handleCloseNotifications}
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
             >
               <Typography className={classes.username}>
                 {data.name || 'Loading'}
               </Typography>
               <Avatar
                 style={{ margin: 'auto' }}
                 className={classes.avatarBusiness}
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
                     className={classes.popoverAvatarBusiness}
                     src={currentProfile.profilePicture || ''}
                     alt="profilePicture"
                   />
                   <Typography
                     variant="body1"
                     align="center"
                     style={{ marginTop: 16 }}
                   >
                     {currentProfile.name}
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
                   {t("profile")}
                 </MenuItem>
                 <MenuItem onClick={handleSettingsClick}>
                   <SettingsIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
                   {t("settings")}
                 </MenuItem>
                 <MenuItem onClick={handleLogout}>
                   <ExitToAppIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
                   {t("logout")}
                 </MenuItem>
               </Box>
             </Popover>
           </div>
         </div>
       </Toolbar>
       </AppBar>
       );
       
       if(data.role === "business") {
         return (
                <div>
                  {appBusiness} 
                </div>
                )
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
        >
          <MenuIcon />
        </IconButton>
        {matches ? null : <ActiveLastBreadcrumb />}
        {/**Here comes the rest appbar stuff */}
        <div className="app-bar-container">
          {/**<img className={classes.logo} src={profileThumb} alt="logo" />*/}
          <Badge
            badgeContent={
              notifications.unread_messages
                ? notifications.unread_messages.length
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
            >
              <NotificationsIcon />
            </IconButton>
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
            {notifications.unread_messages ? (
              <Notifications
                notifications={notifications.unread_messages}
                handleCloseNotifications={handleCloseNotifications}
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
            >
              <Typography className={classes.username}>
                {data.name || 'Loading'}
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
                    {currentProfile.name}
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
                  {t("profile")}
                </MenuItem>
                <MenuItem onClick={handleSettingsClick}>
                  <SettingsIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
                  {t("settings")}
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ExitToAppIcon style={{ fontSize: 24, marginRight: 10 }} />{' '}
                  {t("logout")}
                </MenuItem>
              </Box>
            </Popover>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};



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
  appWorker: {
    borderTop: '16px solid #2386CC',
    width: `calc(100% - ${51}px)`,
    backgroundColor: 'white',
   
    zIndex: theme.zIndex.drawer + 1,
  
  },
  appAgency: {
    borderTop: '16px solid #0F5A0C',
    width: `calc(100% - ${51}px)`,
    backgroundColor: 'white',
   
    zIndex: theme.zIndex.drawer + 1,
  
  },
  appBusiness: {
    borderTop: '16px solid #eb5a00',
    width: `calc(100% - ${51}px)`,
    backgroundColor: 'white',
   
    zIndex: theme.zIndex.drawer + 1,
  
  },
  appBar: {
    width: `calc(100% - ${51}px)`,
    backgroundColor: 'white',
    borderTop: '16px solid #eb5a00',
    zIndex: theme.zIndex.drawer + 1,
    /**
     * transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
     */
    [theme.breakpoints.down('md')]: {
      width: `100vw`,
      // marginLeft: drawerWidth,
    },
  },
  appBarShift: {
    backgroundColor: 'white',
    //borderTop: '16px solid #eb5a00',
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
    [theme.breakpoints.down('xs')]: {
      marginTop: '5%',
    },
  },
  user: {
    //border: '1px solid red',
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
    backgroundColor:'#2386CC',
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  popoverAvatarAgency: {
    color: theme.palette.getContrastText('#009E60'),
    backgroundColor:'#009E60',
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
    color: 'black',
    marginRight: 10,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));







  




export default TopAppBar;
