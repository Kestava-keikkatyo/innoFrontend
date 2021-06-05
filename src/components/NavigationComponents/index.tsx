import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import TopAppBar from './TopAppBar'
import ResponsiveDrawer from './ResponsiveDrawer'
import navConstants from '../../constants/navConstants'
import clsx from 'clsx'

// const drawerWidth = navConstants.DRAWER_WIDTH

/**
 * @component
 * @desc Parent component of Navigation. Includes Drawer 
 * and navigation bar on top of the app.
 * @param props
 * @param {any} props.window
 * @param {ReactNode} props.children A page component.
 */
const AppNavigation = (props: { window: any, children: ReactNode }) => {
  const { window, children } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  }
  
  /**
   * An event function. 
   * Handles the drawer toggling on small screen size.
   */
  const handleDrawerMobile = () => {
    setMobileOpen(!mobileOpen)
  }

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <Hidden lgUp implementation="css">
        <TopAppBar open={open} handleDrawerToggle={handleDrawerMobile} />
      </Hidden>
      <Hidden mdDown implementation="css">
        <TopAppBar open={open} handleDrawerToggle={handleDrawer} />
      </Hidden>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden lgUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerMobile}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <ResponsiveDrawer />
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
            variant="permanent"
            open
          >
            <ResponsiveDrawer isOpen={open} />
          </Drawer>
        </Hidden>
      </nav>

      <div className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  )
}

AppNavigation.propTypes = {
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      // width: drawerWidth,
      flexShrink: 0,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    // width: drawerWidth,
    overflow: 'hidden',
  },
  content: {
    flexGrow: 1,
    paddingRight: 0,
    marginLeft: "20%",
    [theme.breakpoints.down('md')]: {
      marginLeft:"auto"
    }
  },
  drawerOpen: {
    width: navConstants.DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    //width: theme.spacing(7) + 1,
    //[theme.breakpoints.up('sm')]: {
    //  width: theme.spacing(9) + 1,
    //},
  },
}))

export default AppNavigation
