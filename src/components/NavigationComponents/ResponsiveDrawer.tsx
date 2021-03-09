import { makeStyles } from "@material-ui/core";
import React from 'react';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { Collapse } from '@material-ui/core';
import MoodIcon from '@material-ui/icons/Mood';
import TimelineIcon from '@material-ui/icons/Timeline';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Contacts, ExpandLess, ExpandMore, Home, PeopleAlt, StarBorder, Security } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import Role from '../../constants/role'

const ResponsiveDrawer: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch()

  const { data } = useSelector((state: any) => state.user)
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

  const nestedStatisticItems = () => (
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
    </Collapse>
  )
  
  return(
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
          <ListItem button component={Link} to="/home">
            <ListItemIcon>{<Home />}</ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/databank">
            <ListItemIcon>{<Security />}</ListItemIcon>
            <ListItemText primary="Health and Security" />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/messages">
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

          {role === Role.Worker &&
          <>
            <ListItem button onClick={handleClick} className="expandable-button">
              <ListItemIcon>
                <EqualizerIcon />
              </ListItemIcon>
              <ListItemText primary="Statistics" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {nestedStatisticItems()}
          </>
          }
        </List>
      </div>

        <ListItem button className="drawer-logout" onClick={() => dispatch(logout())}>
          <Divider />
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary="Exit Application" />
        </ListItem>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
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
}));

export default ResponsiveDrawer