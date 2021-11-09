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
import { useTranslation } from 'react-i18next';
import TranslateIcon from '@material-ui/icons/Translate';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import FormatList from '@material-ui/icons/FormatListBulleted';

import fi1 from '../NavigationComponents/fi1.png';
import us1 from '../NavigationComponents/us1.png';
import sw1 from '../NavigationComponents/sw1.png';


/**
 * @component
 * @desc A component which renders the drawer on the left side of application.
 * There is actually two drawers which are rendered at at different time.
 * One for mobile view one for web view.
 */
const ResponsiveDrawer: React.FC<any> = ({ isOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { t } = useTranslation();
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
      <div className="kuvake">

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
            <ListItemText primary={t('home')} />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/databank">
            <ListItemIcon>{<Security />}</ListItemIcon>
            <ListItemText primary={t('databank')} />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/home">
            <ListItemIcon>{<CalendarTodayIcon />}</ListItemIcon>
            <ListItemText primary={t('schedule')} />
          </ListItem>
          <Divider />
          <ListItem button component={Link} to="/profiles">
            <ListItemIcon>{<PeopleOutlineIcon />}</ListItemIcon>
            <ListItemText primary={t('profiles')} />
          </ListItem>
          <Divider />

          {role === roles.Agency && (
            <>
              <ListItem button component={Link} to="/contracts">
                <ListItemIcon>
                  <Contacts />
                </ListItemIcon>
                <ListItemText primary={t('contracts')} />
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
                <ListItemText primary={t('work_overview')} />
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
                <ListItemText primary={t('forms')} />
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
                <ListItemText primary={t('business_contracts')} />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItem button component={Link} to="/create-job">
                <ListItemIcon>
                  <WorkOutlineIcon />
                </ListItemIcon>
                <ListItemText primary={t('create_job')} />
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
                <ListItemText primary={t('work_request')} />
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
                <ListItemText primary={t('mood_stats')} />
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
                <ListItemText primary={t('reports')} />
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
                <ListItemText primary={t('business_contracts')} />
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
                <ListItemText primary={t('my_work')} />
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
                <ListItemText primary={t('jobs')} />
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
                <ListItemText primary={t('moods')} />
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
                <ListItemText primary={t('report')} />
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
        <ListItemText primary={t('exit_application')} />
      </ListItem>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  logo: {
    height: 100,
    padding: 0,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5%',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  list: {
    '& .MuiList-root': {
      width: '130px !important',
    },
    top: '38px !important',
    left: '30px !important',
  },
}));

ResponsiveDrawer.defaultProps = {
  isOpen: true,
};

export default ResponsiveDrawer;
