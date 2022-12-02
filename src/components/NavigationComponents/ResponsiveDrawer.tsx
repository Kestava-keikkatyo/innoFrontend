import makeStyles from '@mui/styles/makeStyles';
import React, { useState } from 'react'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone'
import MoodIcon from '@mui/icons-material/Mood'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { OpenInNew, PersonAdd, Security } from '@mui/icons-material'
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
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined'
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined'
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import PersonIcon from '@mui/icons-material/Person';

/**
 * @component
 * @desc A component which renders the drawer on the left side of application.
 * There is actually two drawers which are rendered at different time.
 * One for mobile view one for web view.
 */
const ResponsiveDrawer: React.FC<any> = ({ isMobile, setOpen }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { t } = useTranslation()
  const { data } = useSelector((state: IRootState) => state.user)
  const role = data.role

  const iconColor = {
    base: '#000',
    done: '#0F0',
    undone: '#F00'
  }

  /**
   * Function for opening and closing drawer component.
   * Passed as prop to [AppBar]{@link module:components/AppBar} and
   * [Drawer]{@link module:components/Drawer}.
   * @function
   */
  const handleClick = () => {
    if (isMobile) { setOpen(false) }
  }


  const [openNest, setOpenNest] = useState(false)

  const handleOpenNest = () => {
    setOpenNest(!openNest);
  };

  return (
    <div className="drawer">
      <div className="kuvake">
        <img className={classes.logo} src={logo} alt="keikkakaveri_logo" />
        <Divider />
      </div>
      <div className="content-wrapper">
        <List className="overflow-container">
          <ListItemButton component={Link} to="/home" onClick={handleClick}>
            <ListItemIcon>
              <HomeOutlinedIcon sx={{ color: iconColor.base }} />
            </ListItemIcon>
            <ListItemText primary={t('home')} />
          </ListItemButton>
          <Divider />
          {(role === roles.Agency || role === roles.Business) && (
            <>
              <ListItemButton component={Link} to="/reports" onClick={handleClick}>
                <ListItemIcon>
                  <ErrorOutlineIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('reports')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItemButton component={Link} to="/receivedFeedbacks" onClick={handleClick}>
                <ListItemIcon>
                  <MoodIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('feedback')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItemButton component={Link} to="/agencyResponsibilities" onClick={handleClick}>
                <ListItemIcon>
                  <AccessibilityOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('responsibilities')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {/** FORMS=MATERIAL  CONTENT = ORIENTATION */}
          {role === roles.Agency && (
            <>
              <ListItemButton component={Link} to="/forms" onClick={handleClick}>
                <ListItemIcon>
                  <InsertDriveFileOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('materials')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItemButton component={Link} to="/workers" onClick={handleClick}>
                <ListItemIcon>
                  <PersonIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('employees')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItemButton component={Link} to="/businesses" onClick={handleClick}>
                <ListItemIcon>
                  <GroupOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('BusinessCompanies')} />
              </ListItemButton>
              <Divider />
            </>
          )}


          {(role === roles.Business) && (
            <>
              <ListItemButton component={Link} to="/feedback" onClick={handleClick}>
                <ListItemIcon>
                  <FeedbackOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('feedback')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Business && (
            <>

              <ListItemButton component={Link} to="/businessResponsibilities" onClick={handleClick}>
                <ListItemIcon>
                  <AccessibilityOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('responsibilities')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Business && (
            <>
              <ListItemButton component={Link} to="/forms" onClick={handleClick}>
                <ListItemIcon>
                  <InsertDriveFileOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('materials')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Business && (
            <>
              <ListItemButton component={Link} to="/agencies" onClick={handleClick}>
                <ListItemIcon>
                  <GroupOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('list_title_agencies')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {(role === roles.Business || role === roles.Agency) && (
            <>
              <ListItemButton onClick={handleOpenNest}>
                <ListItemIcon>
                  <SupervisedUserCircleIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('rental_work_model')} />
                {openNest ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openNest} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel">
                    <ListItemIcon>
                      <SupervisorAccountIcon fontSize="small" sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText primary={t('overview')} />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel/customerContract">
                    <ListItemIcon>
                      <CircleTwoToneIcon fontSize="small" sx={{ color: iconColor.done }} />
                    </ListItemIcon>
                    <ListItemText primary={t('customer_contract')} />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel/orderingEmployee">
                    <ListItemIcon>
                      <CircleTwoToneIcon fontSize="small" sx={{ color: iconColor.done }} />
                    </ListItemIcon>
                    <ListItemText primary={t('worker_order')} />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel/contractOfEmployment">
                    <ListItemIcon>
                      <CircleTwoToneIcon fontSize="small" sx={{ color: iconColor.undone }} />
                    </ListItemIcon>
                    <ListItemText primary={t('contract_of_employment')} />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel/guidanceToWork">
                    <ListItemIcon>
                      <CircleTwoToneIcon fontSize="small" sx={{ color: iconColor.undone }} />
                    </ListItemIcon>
                    <ListItemText primary={t('guidance_to_work')} />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel/workPerformance">
                    <ListItemIcon>
                      <CircleTwoToneIcon fontSize="small" sx={{ color: iconColor.undone }} />
                    </ListItemIcon>
                    <ListItemText primary={t('work_performance')} />
                  </ListItemButton>
                </List>
              </Collapse>
              <Divider />
            </>
          )}
          {(role === roles.Business || role === roles.Agency) && (
            <>
              <ListItemButton component="a" href="/databank" target="_blank" onClick={handleClick}>
                <ListItemIcon>
                  <Security sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('databank')} />
                <OpenInNew></OpenInNew>
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItemButton component={Link} to="/receivedWorkRequests" onClick={handleClick} disabled>
                <ListItemIcon>
                  <WorkOutlineIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('work_request')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {(role === roles.Business) && (
            <>
              <ListItemButton component={Link} to="/workRequests" onClick={handleClick} disabled>
                <ListItemIcon>
                  <AssignmentOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('Work_request')} />
              </ListItemButton>
              <Divider />
            </>
          )}


          {/**
           * REMOVED FROM NAVIGATIONBAR
           BUSINESS
           *  {role === roles.Business && (
            <>
              <ListItemButton component={Link} to="/businessContracts" onClick={handleClick}>
                <ListItemIcon>
                  <AssignmentOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('business_contracts')} />
              </ListItemButton>
              <Divider />
            </>
          )}
                    {(role === roles.Agency || role === roles.Business) && (
            <>
              <ListItemButton component={Link} to="/workers" onClick={handleClick}>
                <ListItemIcon>
                  <GroupOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('list_title_workers')} />
              </ListItemButton>
              <Divider />
            </>
          )}


          AGENCY
          {role === roles.Agency && (
            <>
              <ListItemButton component={Link} to="/contracts" onClick={handleClick}>
                <ListItemIcon>
                  <ContactsOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('contracts')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItemButton component={Link} to="/job" onClick={handleClick}>
                <ListItemIcon>
                  <AssignmentTurnedInOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('jobs')} />
              </ListItemButton>
              <Divider />
            </>
          )}
            */}





          {role === roles.Worker && (
            <>

              <ListItemButton component={Link} to="/workerResponsibilities" onClick={handleClick}>
                <ListItemIcon>
                  <AccessibilityOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('responsibilities')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {(role === roles.Worker) && (
            <>
              <ListItemButton component={Link} to="/feedback" onClick={handleClick}>
                <ListItemIcon>
                  <FeedbackOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('feedback')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Worker && (
            <>

              <ListItemButton component={Link} to="/schedule" onClick={handleClick}>

                <ListItemIcon>
                  <CalendarTodayIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('schedule')} />
              </ListItemButton>
              <Divider />
            </>
          )}

          {role === roles.Worker && (
            <>
              <ListItemButton component={Link} to="/businessContracts" onClick={handleClick}>
                <ListItemIcon>
                  <LibraryBooksOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('business_contracts')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {(role === roles.Worker) && (
            <>
              <ListItemButton onClick={handleOpenNest}>
                <ListItemIcon>
                  <SupervisedUserCircleIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('rental_work_model')} />
                {openNest ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openNest} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel">
                    <ListItemIcon>
                      <SupervisorAccountIcon fontSize="small" sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText primary={t('overview')} />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel/contractOfEmployment">
                    <ListItemIcon>
                      <CircleTwoToneIcon fontSize="small" sx={{ color: iconColor.undone }} />
                    </ListItemIcon>
                    <ListItemText primary={t('contract_of_employment')} />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel/guidanceToWork">
                    <ListItemIcon>
                      <CircleTwoToneIcon fontSize="small" sx={{ color: iconColor.undone }} />
                    </ListItemIcon>
                    <ListItemText primary={t('guidance_to_work')} />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel/workPerformance">
                    <ListItemIcon>
                      <CircleTwoToneIcon fontSize="small" sx={{ color: iconColor.undone }} />
                    </ListItemIcon>
                    <ListItemText primary={t('work_performance')} />
                  </ListItemButton>
                </List>
              </Collapse>
              <Divider />
            </>
          )}
          {role === roles.Worker && (
            <>
              <ListItemButton component={Link} to="/jobs" onClick={handleClick}>
                <ListItemIcon>
                  <WorkOutlineIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('jobs')} />
              </ListItemButton>
              <Divider />
            </>
          )}

          {role === roles.Worker && (
            <>
              <ListItemButton component={Link} to="/fiilismittari" onClick={handleClick}>
                <ListItemIcon>
                  <MoodIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('moods')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Worker && (
            <>
              <ListItemButton component={Link} to="/reports" onClick={handleClick}>
                <ListItemIcon>
                  <ErrorOutlineIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('reports')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Admin && (
            <>
              <ListItemButton component={Link} to="/userList" onClick={handleClick}>
                <ListItemIcon>
                  <GroupsIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('User List')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Admin && (
            <>
              <ListItemButton component={Link} to="/createUser" onClick={handleClick}>
                <ListItemIcon>
                  <PersonAdd sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('Create User')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Admin && (
            <>
              <ListItemButton component={Link} to="/topics" onClick={handleClick}>
                <ListItemIcon>
                  <GroupsIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('topic_navigate')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Admin && (
            <>
              <ListItemButton component={Link} to="/responsibilities" onClick={handleClick}>
                <ListItemIcon>
                  <AssignmentIndOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText primary={t('responsibility_navigate')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {/**  <ListItemButton component="a" href="/databank" target="_blank" onClick={handleClick}>
            <ListItemIcon>
              <Security sx={{ color: iconColor.base }} />
            </ListItemIcon>
            <ListItemText primary={t('databank')} />
            <OpenInNew></OpenInNew>
          </ListItemButton>
          <Divider /> */}
        </List>
      </div>

      <ListItem className="drawer-logout" onClick={() => dispatch(logout())}>
        <Divider />
        <ListItemIcon>
          <ExitToAppIcon sx={{ color: iconColor.base }} />
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
