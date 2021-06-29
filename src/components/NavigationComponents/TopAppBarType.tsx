import { AppBar, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import navConstants from '../../constants/navConstants';
import { TopAppBarProps } from '../../types/props'
import { IRootState } from '../../utils/store';
import ActiveLastBreadcrumb from '../ActiveLastBreadcrumb';
import profileThumb from '../../assets/profile-thumb.jpg'
import { useHistory } from 'react-router-dom';

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
const TopAppBar: React.FC<TopAppBarProps> = ({ handleDrawerToggle, open }) => {
  const classes = useStyles();
  const { data } = useSelector((state: IRootState) => state.user)
  //const [openn, setOpen] = useState(true)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);

  const handleMenu = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory()

  const handleClickProfile = () => {
    history.push('/instruction')
  }

  const handleClickProfileSettings = () => {
    history.push('/profile-edit')
  }

  return(
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
            <Typography className={classes.text}>{data.name || 'Loading'}</Typography>
            {/**<img className={classes.logo} src={profileThumb} alt="logo" />*/}
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
    color: 'black'
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
    marginTop: '1%'
  },
}))

export default TopAppBar