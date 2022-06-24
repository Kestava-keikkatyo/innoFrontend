import makeStyles from '@mui/styles/makeStyles';
import React from 'react'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import MoodIcon from '@mui/icons-material/Mood'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { PersonAdd, Security } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import { logout } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { roles } from '../../types/types'
import { IRootState } from '../../utils/store'
import logo from '../../assets/keikkakaveri_logo.png'
import GroupsIcon from '@mui/icons-material/Group'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

import { useTranslation } from 'react-i18next'
// import TranslateIcon from '@mui/icons-material/Translate';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import FormatList from '@mui/icons-material/FormatListBulleted'
import LiveHelpIcon from '@mui/icons-material/LiveHelpOutlined'
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined'
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
// import fi1 from '../NavigationComponents/fi1.png';
// import us1 from '../NavigationComponents/us1.png';
// import sw1 from '../NavigationComponents/sw1.png';

/**
 * @component
 * @desc A component which renders the drawer on the left side of application.
 * There is actually two drawers which are rendered at at different time.
 * One for mobile view one for web view.
 */
const ResponsiveDrawer: React.FC<any> = ({ isMobile, isOpen, setOpen }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { t } = useTranslation()
  const { data } = useSelector((state: IRootState) => state.user)
  const role = data.role

  /**
   * Function for opening and closing drawer component.
   * Passed as prop to [AppBar]{@link module:components/AppBar} and
   * [Drawer]{@link module:components/Drawer}.
   * @function
   */
   const handleClick = () => {
     if(isMobile) { setOpen(false) }    
   }

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
          <ListItem button component={Link} to="/home" onClick={handleClick}>
            <ListItemIcon>{<HomeOutlinedIcon />}</ListItemIcon>
            <ListItemText primary={t('home')} />
          </ListItem>
          <Divider />
          {(role === roles.Agency || role === roles.Business) && (
            <>
              <ListItem button component={Link} to="/forms" onClick={handleClick}>
                <ListItemIcon>
                  <InsertDriveFileOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={t('forms')} />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItem button component={Link} to="/contracts" onClick={handleClick}>
                <ListItemIcon>
                  <ContactsOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={t('contracts')} />
              </ListItem>
              <Divider />
            </>
          )}

          {/* <ListItem button component={Link} to="/home">
            <ListItemIcon>{<CalendarTodayIcon />}</ListItemIcon>
            <ListItemText primary={t('schedule')} />
          </ListItem> */}

          {role === roles.Business && (
            <>
              <ListItem button component={Link} to="/business-contracts" onClick={handleClick}>
                <ListItemIcon>
                  <AssignmentOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={t('business_contracts')} />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItem button component={Link} to="/job" onClick={handleClick}>
                <ListItemIcon>
                  <AssignmentTurnedInOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={t('jobs')} />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItem button component={Link} to="/receivedWorkRequests" onClick={handleClick}>
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
              <ListItem button component={Link} to="/mood-stats" onClick={handleClick}>
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
              <ListItem button component={Link} to="/workers" onClick={handleClick}>
                <ListItemIcon>
                  <GroupOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={t('list_title_workers')} />
              </ListItem>
              <Divider />
            </>
          )}
          {(role === roles.Business) && (
            <>
              <ListItem button component={Link} to="/agencies" onClick={handleClick}>
                <ListItemIcon>
                  <GroupOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={t('list_title_agencies')} />
              </ListItem>
              <Divider />
            </>
          )}
          {(role === roles.Business) && (
            <>
              <ListItem button component={Link} to="/workRequests" onClick={handleClick}>
                <ListItemIcon>
                  <AssignmentOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={t('Work_request')} />
              </ListItem>
              <Divider />
            </>
          )}
          {(role === roles.Agency || role === roles.Business) && (
            <>
              <ListItem button component={Link} to="/reports" onClick={handleClick}>
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
              <ListItem button component={Link} to="/home" onClick={handleClick}>
                <ListItemIcon>{<CalendarTodayIcon />}</ListItemIcon>
                <ListItemText primary={t('schedule')} />
              </ListItem>
              <Divider />
              <ListItem button component={Link} to="/business-contracts" onClick={handleClick}>
                <ListItemIcon>
                  <LibraryBooksOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={t('business_contracts')} />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Worker && (
            <>
              <ListItem button component={Link} to="/my-work" onClick={handleClick}>
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
              <ListItem button component={Link} to="/jobs" onClick={handleClick}>
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
              <ListItem button component={Link} to="/fiilismittari" onClick={handleClick}>
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
              <ListItem button component={Link} to="/reports" onClick={handleClick}>
                <ListItemIcon>
                  <ErrorOutlineIcon />
                </ListItemIcon>
                <ListItemText primary={t('reports')} />
              </ListItem>
              <Divider />
              <ListItem button component={Link} to="/faq" onClick={handleClick}>
                <ListItemIcon>
                  <LiveHelpIcon />
                </ListItemIcon>
                <ListItemText primary={t('faq')} />
              </ListItem>
              <Divider />
            </>
          )}
          {(role === roles.Agency || role === roles.Business || role === roles.Worker) && (
            <>
              <ListItem button component={Link} to="/feedback" onClick={handleClick}>
                <ListItemIcon>
                  <FeedbackOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={t('feedback')} />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Admin && (
            <>
              <ListItem button component={Link} to="/userList" onClick={handleClick}>
                <ListItemIcon>
                  <GroupsIcon />
                </ListItemIcon>
                <ListItemText primary={t('User List')} />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Admin && (
            <>
              <ListItem button component={Link} to="/createUser" onClick={handleClick}>
                <ListItemIcon>
                  <PersonAdd />
                </ListItemIcon>
                <ListItemText primary={t('Create User')} />
              </ListItem>
              <Divider />
            </>
          )}
          {role === roles.Admin && (
            <>
              <ListItem button component={Link} to="/topics" onClick={handleClick}>
                <ListItemIcon>
                  <GroupsIcon />
                </ListItemIcon>
                <ListItemText primary={t('topic_navigate')} />
              </ListItem>
              <Divider />
            </>
          )}
          <ListItem button component={Link} to="/databank" onClick={handleClick}>
            <ListItemIcon>{<Security />}</ListItemIcon>
            <ListItemText primary={t('databank')} />
          </ListItem>
          <Divider />
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
  )
}

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
}))

ResponsiveDrawer.defaultProps = {
  isOpen: true,
}

export default ResponsiveDrawer
