import { Button, makeStyles, Menu, MenuItem } from '@material-ui/core';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import MoodIcon from '@material-ui/icons/Mood';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Contacts, Home, Security } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { roles } from '../../types/types';
import { IRootState } from '../../utils/store';
import logo from '../../assets/keikkakaveri_logo.png';

import TranslateIcon from '@material-ui/icons/Translate';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import FormatList from '@material-ui/icons/FormatListBulleted';

const LangMenuDropDown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="drawer-top">
        <Button onClick={handleClick} style={{ height: '48px' }}>
          <TranslateIcon
            style={{ fontSize: '36px' }}
            className="translate-icon"
          />
        </Button>
        {/* <Typography variant="body2">FI</Typography> */}
      </div>
      <Menu
        id="forms-settings"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Suomi</MenuItem>
        <MenuItem onClick={handleClose}>English</MenuItem>
        <MenuItem onClick={handleClose}>Svenska</MenuItem>
      </Menu>
    </>
  );
};

/**
 * @component
 * @desc A component which renders the drawer on the left side of application.
 * There is actually two drawers which are rendered at at different time.
 * One for mobile view one for web view.
 */
const ResponsiveDrawer: React.FC<any> = ({ isOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { data } = useSelector((state: IRootState) => state.user);
  const role = data.role;

  /**
   * Function for opening and closing drawer component.
   * Passed as prop to [AppBar]{@link module:components/AppBar} and
   * [Drawer]{@link module:components/Drawer}.
   * @function
   */
  // const handleClick = () => {
  //   setOpen(!open)
  // }

  return (
    <div className="drawer">
      <div className="">
        <LangMenuDropDown />
        {isOpen ? (
          <img className={classes.logo} src={logo} alt="logo" />
        ) : (
          <div className={classes.logo} />
        )}
        {/* <Typography variant="h6" align="center">FI / EN / SV</Typography> */}
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
            <ListItemText primary="Databank" />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/home">
            <ListItemIcon>{<CalendarTodayIcon />}</ListItemIcon>
            <ListItemText primary="Schedule" />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/profiles">
            <ListItemIcon>{<PeopleOutlineIcon />}</ListItemIcon>
            <ListItemText primary="Profiles" />
          </ListItem>
          <Divider />

          {role === roles.Agency && (
            <>
              <ListItem button component={Link} to="/contracts">
                <ListItemIcon>
                  <Contacts />
                </ListItemIcon>
                <ListItemText primary="Contracts" />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Business && (
            <>
              <ListItem button component={Link} to="/work-overview">
                <ListItemIcon>
                  <SupervisedUserCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Work Overview" />
              </ListItem>
              <Divider />
            </>
          )}
          {(role === roles.Agency || role === roles.Business) && (
            <>
              <ListItem button component={Link} to="/forms">
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary="Forms" />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Business && (
            <>
              <ListItem button component={Link} to="/business-contracts">
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Business Contracts" />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItem button component={Link} to="/work-request">
                <ListItemIcon>
                  <WorkOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Work request" />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItem button component={Link} to="/mood-stats">
                <ListItemIcon>
                  <MoodIcon />
                </ListItemIcon>
                <ListItemText primary="Mood stats" />
              </ListItem>
              <Divider />
            </>
          )}
          {(role === roles.Agency || role === roles.Business) && (
            <>
              <ListItem button component={Link} to="/reports">
                <ListItemIcon>
                  <ErrorOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Worker && (
            <>
              <ListItem button component={Link} to="/business-contracts">
                <ListItemIcon>
                  <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText primary="Business Contracts" />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Worker && (
            <>
              <ListItem button component={Link} to="/my-work">
                <ListItemIcon>
                  <FormatList />
                </ListItemIcon>
                <ListItemText primary="my work" />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Worker && (
            <>
              <ListItem button component={Link} to="/job-list">
                <ListItemIcon>
                  <WorkOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Jobs" />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Worker && (
            <>
              <ListItem button component={Link} to="/fiilismittari">
                <ListItemIcon>
                  <MoodIcon />
                </ListItemIcon>
                <ListItemText primary="Mood" />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Worker && (
            <>
              <ListItem button component={Link} to="/report">
                <ListItemIcon>
                  <ErrorOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Report" />
              </ListItem>
              <Divider />
            </>
          )}
        </List>
      </div>

      <ListItem
        button
        className="drawer-logout"
        onClick={() => dispatch(logout())}
      >
        <Divider />
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Exit Application" />
      </ListItem>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  logo: {
    height: 130,
    padding: 30,
    paddingTop: 10,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

ResponsiveDrawer.defaultProps = {
  isOpen: true,
};

export default ResponsiveDrawer;
