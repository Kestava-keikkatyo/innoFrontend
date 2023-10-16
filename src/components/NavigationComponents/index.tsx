import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import Drawer from '@mui/material/Drawer'
import Hidden from '@mui/material/Hidden'
import { useTheme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import TopAppBar from './TopAppBarType'
import ResponsiveDrawer from './ResponsiveDrawer'
import navConstants from '../../constants/navConstants'
import clsx from 'clsx'
import Footer from '../../pages/LandingPage/Footer'
// const drawerWidth = navConstants.DRAWER_WIDTH

/**
 * @component
 * @desc Parent component of Navigation. Includes Drawer
 * and navigation bar on top of the app.
 * @param props
 * @param {any} props.windowProp
 * @param {ReactNode} props.children A page component.
 */
const AppNavigation = (props: { windowProp: any; children: ReactNode }) => {
  const { windowProp, children } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [open, setOpen] = React.useState(true)

  const handleDrawer = () => {
    console.log(window.innerWidth)
    if (window.innerWidth <= 1216) {
      setMobileOpen(!mobileOpen)
    } else {
      setOpen(!open)
    }
  }

  /**
   * An event function.
   * Handles the drawer toggling on small screen size.
   */
  const handleDrawerMobile = () => {
    setMobileOpen(!mobileOpen)
  }

  const container = windowProp !== undefined ? () => windowProp().document.body : undefined

  return (
    <div className={classes.root}>
      <TopAppBar open={open} handleDrawerToggle={handleDrawer} />
      <nav className={classes.drawer} aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden lgUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
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
            <ResponsiveDrawer isMobile={true} setOpen={setMobileOpen} />
          </Drawer>
        </Hidden>
        <Hidden lgDown implementation='css'>
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
            variant='permanent'
            open
          >
            <ResponsiveDrawer isMobile={false} />
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        {/*Extra toolbar to prevent content from going under top nav bar*/}
        <div className={classes.toolbar} style={{ height: `${150}px` }} />
        {children}
        <div
          style={{ backgroundColor: '#F47D20', height: '15px', width: '100%', marginTop: '500px' }}
        ></div>
        <Footer></Footer>
      </div>
    </div>
  )
}

AppNavigation.propTypes = {
  windowProp: PropTypes.func,
}

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
    marginLeft: '0%',
    backgroundColor: '#FDFDFD',
    [theme.breakpoints.down('lg')]: {
      marginLeft: 'auto',
    },
  },
  drawerOpen: {
    width: navConstants.DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: '#FDFDFD',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#FDFDFD',
    display: 'none',
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
}))

export default AppNavigation
