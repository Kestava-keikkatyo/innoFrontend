import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react'
import { useSelector } from 'react-redux';
//import navConstants from '../../constants/navConstants';
import profileThumb from '../../assets/profile-thumb.jpg'

//const drawerWidth = navConstants.DRAWER_WIDTH

const TopAppBar = ({ handleDrawerToggle }) => {
  const classes = useStyles();
  const { data } = useSelector((state) => state.user)

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
          <div className="app-bar-container">
            <Typography>{data.name || 'Loading'}</Typography>
            <img className={classes.logo} src={profileThumb} alt="logo" />
          </div>
        </Toolbar>
      </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    //[theme.breakpoints.up('lg')]: {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: drawerWidth,
    //},
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  logo: {
    width: 50,
    height: 50,
    padding: 0,
    borderRadius: 25,
    // display: "block",
    // marginLeft: "auto",
    // marginRight: "auto",
  },
}))

export default TopAppBar