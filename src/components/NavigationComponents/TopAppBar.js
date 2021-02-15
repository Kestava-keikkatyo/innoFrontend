import { AppBar, Divider, Hidden, IconButton, List, ListItem, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import navConstants from '../../constants/navConstants';
import profileThumb from '../../assets/profile-thumb.jpg'
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/userActions';

const drawerWidth = navConstants.DRAWER_WIDTH

/**
 * TODO: Sulje kun klikkaa boxin ulkopuolelta
 * @param {*} param0 
 */
const UserMenuDropdown = ({open}) => {
  const dispatch = useDispatch()

  return(
    <div className={`${open ? 'hidden': ''} user-menu-dropdown`}>
      <List className="overflow-container">
        <ListItem fontSize="large" button mt={100} component={Link} to="/profile">
          {/* <ListItemIcon>{<Home />}</ListItemIcon> */}
          <ListItemText primary="Profile settings" />
        </ListItem>
        <Divider />
        <ListItem fontSize="large" button mt={100} component={Link} to="/settings">
          {/* <ListItemIcon>{<MailIcon />}</ListItemIcon> */}
          <ListItemText primary="App settings" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/help">
          {/* <ListItemIcon>{<CalendarTodayIcon />}</ListItemIcon> */}
          <ListItemText primary="Help" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => dispatch(logout())}>
          {/* <ListItemIcon>{<InboxIcon />}</ListItemIcon> */}
          <ListItemText primary="Log out" />
        </ListItem>
      </List>
    </div>
  )
}

const TopAppBar = ({ handleDrawerToggle }) => {
  const classes = useStyles();
  const { data } = useSelector((state) => state.user)
  const [open, setOpen] = useState(true)

  return(
    <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {/**Here comes the rest appbar stuff */}
          <div className="app-bar-container" onClick={() => setOpen(!open)}>
            <Hidden xsDown implementation="css">
              <Typography>{data.name || 'Loading'}</Typography>
            </Hidden>
            <img className={classes.logo} src={profileThumb} alt="logo" />
            {open ? <ExpandLess /> : <ExpandMore />}
            <UserMenuDropdown open={open}/>
          </div>
        </Toolbar>
      </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  logo: {
    width: 40,
    height: 40,
    padding: 0,
    borderRadius: 20,
    marginLeft: '1rem',
    marginTop: '-8px',
  },
}))

export default TopAppBar