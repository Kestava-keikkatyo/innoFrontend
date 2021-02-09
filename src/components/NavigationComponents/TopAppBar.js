import { AppBar, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react'
import navConstants from '../../constants/navConstants';

const drawerWidth = navConstants.DRAWER_WIDTH

const TopAppBar = ({ handleDrawerToggle }) => {
  const classes = useStyles();

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
  }
}))

export default TopAppBar