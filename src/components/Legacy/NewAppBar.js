import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import logo from '../img/logo.png'
import AssignmentIcon from '@material-ui/icons/Assignment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { Collapse } from '@material-ui/core';
import MoodIcon from '@material-ui/icons/Mood';
import TimelineIcon from '@material-ui/icons/Timeline';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AccountCircle, Contacts, ExpandLess, ExpandMore, Home, PeopleAlt, StarBorder } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Role from '../../constants/role'

const drawerWidth = 300;

function ResponsiveDrawer(props) {
  const { window, children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { loggedIn, data } = useSelector((state) => state.user)
  const role = data.role


  /**
   * Function for opening and closing drawer component.
   * Passed as prop to [AppBar]{@link module:components/AppBar} and
   * [Drawer]{@link module:components/Drawer}.
   * @function
   */
  const handleClick = () => {
    setOpen(!open);
  };
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="drawer">

      <div className="">
        <div className={`color-primary ${classes.toolbar}`}/>
        {/*
        *TODO: tähän tulee logo
        *
        *  <img className={classes.logo} src={logo} alt="logo" /> */}
        <Typography variant="h6" align="center">FI / EN / SV</Typography>
        <Divider />
      </div>

      <div className="content-wrapper">
      <List className="overflow-container">
        <ListItem fontSize="large" button mt={100} component={Link} to="/home">
          <ListItemIcon>{<Home />}</ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem fontSize="large" button mt={100} component={Link} to="/messages">
          <ListItemIcon>{<MailIcon />}</ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/home">
          <ListItemIcon>{<CalendarTodayIcon />}</ListItemIcon>
          <ListItemText primary="Schedule" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/documents">
          <ListItemIcon>{<InboxIcon />}</ListItemIcon>
          <ListItemText primary="Documents" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/tasks">
          <ListItemIcon>{<AssignmentIcon />}</ListItemIcon>
          <ListItemText primary="Assignments" />
        </ListItem>
        <Divider />

        <ListItem button onClick={handleClick} className="expandable-button">
        <ListItemIcon>
          <EqualizerIcon />
        </ListItemIcon>
        <ListItemText primary="Statistics" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Achievments" />
            </ListItem>
            <ListItem button className={classes.nested} component={Link} to="/fiilismittari">
              <ListItemIcon>
                <MoodIcon />
              </ListItemIcon>
              <ListItemText primary="Feel-o-Meter" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <TimelineIcon />
              </ListItemIcon>
              <ListItemText primary="Work history" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FeedbackIcon />
              </ListItemIcon>
              <ListItemText primary="My Feedback" />
            </ListItem>
          </List>

          <ListItem button component={Link} to="/profile">
            <ListItemIcon><AccountCircle /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          
            {role === Role.Agency &&
              <ListItem button component={Link} to="/contracts">
                <ListItemIcon><Contacts /></ListItemIcon>
                <ListItemText primary="Contracts" />
              </ListItem>
            }
            {(role === Role.Agency || role === Role.Business) &&
              <ListItem button component={Link} to="/workers">
                <ListItemIcon><PeopleAlt /></ListItemIcon>
                <ListItemText primary="Workers" />
              </ListItem>
            }

        </Collapse>
      </List>
      </div>

        <ListItem button className="drawer-logout" onClick={() => dispatch(logout())}>
          <Divider />
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary="Exit Application" />
        </ListItem>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
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
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden lgUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
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
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    overflow: 'hidden',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingRight: 0,
  },
  logo: {
    width: 170,
    height: 170,
    padding: 30,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  menu: {
    width: drawerWidth,
    overflow: "auto",
    height: "100%",
    marginTop: "267px"
    // [theme.breakpoints.up("md")]: {
    //   overflow: "auto",
    //   width: drawerWidth,
    //   position: "relative",
    //   height: "100%"
    // }
  }
}));

export default ResponsiveDrawer;
