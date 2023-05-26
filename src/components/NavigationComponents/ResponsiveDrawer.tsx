import makeStyles from '@mui/styles/makeStyles';
import React, { useEffect, useState } from 'react'
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
import MoodIcon from '@mui/icons-material/Mood'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { OpenInNew, PersonAdd, Security } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { roles } from '../../types/types'
import { IRootState } from '../../utils/store'
import GroupsIcon from '@mui/icons-material/Group'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { useTranslation } from 'react-i18next'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined'
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import TaskIcon from '@mui/icons-material/Task';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import WorkIcon from '@mui/icons-material/Work';
import AbcIcon from '@mui/icons-material/Abc';
import Sisainenlinkki from '../../assets/icons/sisainenlinkki.svg'

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

  const [colors, setColors] = useState({ home: "#FDFDFD", reports: "#FDFDFD", feedback: "#FDFDFD", contracts: "#FDFDFD", responsibilities: "#FDFDFD", materials: "#FDFDFD", employees: "#FDFDFD", inviteCodes: "#FDFDFD", rentalmodel: "#FDFDFD", databank: "#FDFDFD", businesses: "#FDFDFD" })

  const iconColor = {
    base: '#000',
    done: '#0F0',
    undone: '#F00'
  }

  useEffect(() => {
    setColors({ ...colors, home: "#F47D20", reports: "#FDFDFD", feedback: "#FDFDFD", contracts: "#FDFDFD", responsibilities: "#FDFDFD", materials: "#FDFDFD", employees: "#FDFDFD", inviteCodes: "#FDFDFD", rentalmodel: "#FDFDFD", databank: "#FDFDFD", businesses: "#FDFDFD" });
  }, [])

  /**
   * Function for opening and closing drawer component.
   * Passed as prop to [AppBar]{@link module:components/AppBar} and
   * [Drawer]{@link module:components/Drawer}.
   * @function
   */
  const handleClick = (page: string) => {
    if (isMobile) { setOpen(false) }

    switch (page) {
      case "home":
        setColors({ ...colors, home: "#F47D20", reports: "#FDFDFD", feedback: "#FDFDFD", contracts: "#FDFDFD", responsibilities: "#FDFDFD", materials: "#FDFDFD", employees: "#FDFDFD", inviteCodes: "#FDFDFD", rentalmodel: "#FDFDFD", databank: "#FDFDFD", businesses: "#FDFDFD" });
        break
      case "reports":
        setColors({ ...colors, home: "#FDFDFD", reports: "#F47D20", feedback: "#FDFDFD", contracts: "#FDFDFD", responsibilities: "#FDFDFD", materials: "#FDFDFD", employees: "#FDFDFD", inviteCodes: "#FDFDFD", rentalmodel: "#FDFDFD", databank: "#FDFDFD", businesses: "#FDFDFD" });
        break
      case "feedback":
        setColors({ ...colors, home: "#FDFDFD", reports: "#FDFDFD", feedback: "#F47D20", contracts: "#FDFDFD", responsibilities: "#FDFDFD", materials: "#FDFDFD", employees: "#FDFDFD", inviteCodes: "#FDFDFD", rentalmodel: "#FDFDFD", databank: "#FDFDFD", businesses: "#FDFDFD" });
        break
      case "contracts":
        setColors({ ...colors, home: "#FDFDFD", reports: "#FDFDFD", feedback: "#FDFDFD", contracts: "#F47D20", responsibilities: "#FDFDFD", materials: "#FDFDFD", employees: "#FDFDFD", inviteCodes: "#FDFDFD", rentalmodel: "#FDFDFD", databank: "#FDFDFD", businesses: "#FDFDFD" });
        break
      case "responsibilities":
        setColors({ ...colors, home: "#FDFDFD", reports: "#FDFDFD", feedback: "#FDFDFD", contracts: "#FDFDFD", responsibilities: "#F47D20", materials: "#FDFDFD", employees: "#FDFDFD", inviteCodes: "#FDFDFD", rentalmodel: "#FDFDFD", databank: "#FDFDFD", businesses: "#FDFDFD" });
        break
      case "materials":
        setColors({ ...colors, home: "#FDFDFD", reports: "#FDFDFD", feedback: "#FDFDFD", contracts: "#FDFDFD", responsibilities: "#FDFDFD", materials: "#F47D20", employees: "#FDFDFD", inviteCodes: "#FDFDFD", rentalmodel: "#FDFDFD", databank: "#FDFDFD", businesses: "#FDFDFD" });
        break
      case "employees":
        setColors({ ...colors, home: "#FDFDFD", reports: "#FDFDFD", feedback: "#FDFDFD", contracts: "#FDFDFD", responsibilities: "#FDFDFD", materials: "#FDFDFD", employees: "#F47D20", inviteCodes: "#FDFDFD", rentalmodel: "#FDFDFD", databank: "#FDFDFD", businesses: "#FDFDFD" });
        break
      case "inviteCodes":
        setColors({ ...colors, home: "#FDFDFD", reports: "#FDFDFD", feedback: "#FDFDFD", contracts: "#FDFDFD", responsibilities: "#FDFDFD", materials: "#FDFDFD", employees: "#FDFDFD", inviteCodes: "#F47D20", rentalmodel: "#FDFDFD", databank: "#FDFDFD", businesses: "#FDFDFD" });
        break
      case "rentalmodel":
        setColors({ ...colors, home: "#FDFDFD", reports: "#FDFDFD", feedback: "#FDFDFD", contracts: "#FDFDFD", responsibilities: "#FDFDFD", materials: "#FDFDFD", employees: "#FDFDFD", inviteCodes: "#FDFDFD", rentalmodel: "#F47D20", databank: "#FDFDFD", businesses: "#FDFDFD" });
        break
      case "databank":
        setColors({ ...colors, home: "#FDFDFD", reports: "#FDFDFD", feedback: "#FDFDFD", contracts: "#FDFDFD", responsibilities: "#FDFDFD", materials: "#FDFDFD", employees: "#FDFDFD", inviteCodes: "#FDFDFD", rentalmodel: "#FDFDFD", databank: "#F47D20", businesses: "#FDFDFD" });
        break
      case "businesses":
        setColors({ ...colors, home: "#FDFDFD", reports: "#FDFDFD", feedback: "#FDFDFD", contracts: "#FDFDFD", responsibilities: "#FDFDFD", materials: "#FDFDFD", employees: "#FDFDFD", inviteCodes: "#FDFDFD", rentalmodel: "#FDFDFD", databank: "#FDFDFD", businesses: "#F47D20" });
        break
    }
  }

  const [openNest, setOpenNest] = useState(false)

  const handleOpenNest = () => {
    setOpenNest(!openNest);
    setColors({ ...colors, home: "#FDFDFD", reports: "#FDFDFD", feedback: "#FDFDFD", contracts: "#FDFDFD", responsibilities: "#FDFDFD", materials: "#FDFDFD", employees: "#FDFDFD", rentalmodel: "#F47D20", databank: "#FDFDFD", businesses: "#FDFDFD" });
  };

  return (
    <div className="drawer">
      <div className="content-wrapper">
        <List className="overflow-container">
          <ListItemButton style={{ marginTop: '170px', backgroundColor: colors.home }} className={classes.button} component={Link} to="/home" onClick={() => handleClick("home")}>
            <ListItemIcon>
              <HomeOutlinedIcon sx={{ color: iconColor.base }} />
            </ListItemIcon>
            <ListItemText className={classes.buttonText} primary={t('home')} />
          </ListItemButton>
          {(role === roles.Agency || role === roles.Business) && (
            <>
              <ListItemButton style={{ backgroundColor: colors.reports }} component={Link} to="/reports" onClick={() => handleClick("reports")} className={classes.button}>
                <ListItemIcon>
                  <ErrorOutlineIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('reports')} />
              </ListItemButton>
            </>
          )}
          {(role === roles.Agency || role === roles.Business) && (
            <>
              <ListItemButton style={{ backgroundColor: colors.feedback }} component={Link} to="/receivedFeedbacks" onClick={() => handleClick("feedback")} className={classes.button}>
                <ListItemIcon>
                  <MoodIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('feedback')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItemButton style={{ backgroundColor: colors.responsibilities }} component={Link} to="/agencyResponsibilities" onClick={() => handleClick("responsibilities")} className={classes.button}>
                <ListItemIcon>
                  <AccessibilityOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('responsibilities')} />
              </ListItemButton>
            </>
          )}
          {/** FORMS=MATERIAL  CONTENT = ORIENTATION */}
          {role === roles.Agency && (
            <>
              <ListItemButton style={{ backgroundColor: colors.materials }} component={Link} to="/companyMaterial" onClick={() => handleClick("materials")} className={classes.button}>
                <ListItemIcon>
                  <InsertDriveFileOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('materials')} />
              </ListItemButton>
            </>
          )}
          {(role === roles.Agency) && (
            <>
              <ListItemButton style={{ backgroundColor: colors.inviteCodes }} component={Link} to="/inviteCodes" onClick={() => handleClick("inviteCodes")} className={classes.button}>
                <ListItemIcon>
                  <AbcIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('inviteCodes')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItemButton style={{ backgroundColor: colors.contracts }} component={Link} to="/agencyContracts" onClick={() => handleClick("contracts")} className={classes.button}>
                <ListItemIcon>
                  <ContactMailIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('Connections')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItemButton style={{ backgroundColor: colors.employees }} component={Link} to="/agencyWorkers" onClick={() => handleClick("employees")} className={classes.button}>
                <ListItemIcon>
                  <PersonIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('employees')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Business && (
            <>
              <ListItemButton style={{ backgroundColor: colors.employees }} component={Link} to="/workers" onClick={() => handleClick("employees")} className={classes.button}>
                <ListItemIcon>
                  <PersonIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('employees')} />
              </ListItemButton>
            </>
          )}
          {(role === roles.Business || role === roles.Worker) && (
            <>
              <ListItemButton style={{ backgroundColor: colors.contracts }} component={Link} to="/userContracts" onClick={() => handleClick("contracts")} className={classes.button}>
                <ListItemIcon>
                  <ContactMailIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('Contracts')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItemButton style={{ backgroundColor: colors.businesses }} component={Link} to="/businesses" onClick={() => handleClick("businesses")} className={classes.button}>
                <ListItemIcon>
                  <GroupOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('BusinessCompanies')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Business && (
            <>
              <ListItemButton style={{ backgroundColor: colors.responsibilities }} component={Link} to="/businessResponsibilities" onClick={() => handleClick("responsibilities")} className={classes.button}>
                <ListItemIcon>
                  <AccessibilityOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('responsibilities')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Business && (
            <>
              <ListItemButton style={{ backgroundColor: colors.materials }} component={Link} to="/companyMaterial" onClick={() => handleClick("materials")} className={classes.button}>
                <ListItemIcon>
                  <InsertDriveFileOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('materials')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Business && (
            <>
              <ListItemButton style={{ backgroundColor: colors.businesses }} component={Link} to="/agencies" onClick={() => handleClick("businesses")} className={classes.button}>
                <ListItemIcon>
                  <GroupOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('list_title_agencies')} />
              </ListItemButton>
            </>
          )}
          {(role === roles.Business || role === roles.Agency) && (
            <>
              <ListItemButton style={{ backgroundColor: colors.rentalmodel }} onClick={handleOpenNest} className={classes.button}>
                <ListItemIcon>
                  <SupervisedUserCircleIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('rental_work_model')} />
                {openNest ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openNest} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>

                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel" >
                    <ListItemIcon>
                      <SupervisorAccountIcon fontSize="small" sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('overview')} />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel/customerContract">
                    <ListItemIcon>
                      <ListAltIcon fontSize="small" sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('customer_contract')} />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel/orderingEmployee">
                    <ListItemIcon>
                      <PersonAddAlt1Icon fontSize="small" sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('worker_order')} />
                  </ListItemButton>

                  <ListItemButton style={{}} sx={{ pl: 4 }} onClick={() => handleClick("businesses")} component={Link} to="/rentalWorkModel/contractOfEmployment" >
                    <ListItemIcon>
                      <TaskIcon fontSize="small" sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('list_title_businesses')} />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel/guidanceToWork">
                    <ListItemIcon>
                      <HowToRegIcon fontSize="small" sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('guidance_to_work')} />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel/workPerformance">
                    <ListItemIcon>
                      <WorkIcon fontSize="small" sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('work_performance')} />
                  </ListItemButton>
                </List>
              </Collapse>
            </>
          )}
          {(role === roles.Business || role === roles.Agency) && (
            <>
              <ListItemButton component="a" href="/databank/lifeline" target="_blank" onClick={() => handleClick("databank")} className={classes.button}>
                <ListItemIcon>
                  <Security sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('databank')} />
                <OpenInNew></OpenInNew>
              </ListItemButton>
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItemButton component={Link} to="/receivedWorkRequests" onClick={() => handleClick("receivedWorkRequests")} disabled>
                <ListItemIcon>
                  <WorkOutlineIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('work_request')} />
              </ListItemButton>
            </>
          )}
          {(role === roles.Business) && (
            <>
              <ListItemButton component={Link} to="/workRequests" onClick={() => handleClick("workRequests")} disabled>
                <ListItemIcon>
                  <AssignmentOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('Work_request')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Worker && (
            <>
              <ListItemButton style={{ backgroundColor: colors.responsibilities }} component={Link} to="/workerResponsibilities" onClick={() => handleClick("responsibilities")} className={classes.button}>
                <ListItemIcon>
                  <AccessibilityOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('responsibilities')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {(role === roles.Worker) && (
            <>
              <ListItemButton style={{ backgroundColor: colors.feedback }} component={Link} to="/feedback" onClick={() => handleClick("feedback")} className={classes.button}>
                <ListItemIcon>
                  <FeedbackOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('feedback')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Worker && (
            <>
              <ListItemButton component={Link} to="/schedule" onClick={() => handleClick("schedule")} className={classes.button}>
                <ListItemIcon>
                  <CalendarTodayIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('schedule')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {(role === roles.Worker) && (
            <>
              <ListItemButton style={{ backgroundColor: colors.rentalmodel }} onClick={handleOpenNest} className={classes.button}>
                <ListItemIcon>
                  <SupervisedUserCircleIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('rental_work_model')} />
                {openNest ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openNest} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel">
                    <ListItemIcon>
                      <SupervisorAccountIcon fontSize="small" sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('overview')} />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel/contractOfEmployment">
                    <ListItemIcon>
                      <TaskIcon fontSize="small" sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('contract_of_employment')} />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel/guidanceToWork">
                    <ListItemIcon>
                      <HowToRegIcon fontSize="small" sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('guidance_to_work')} />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }} component={Link} to="/rentalWorkModel/workPerformance">
                    <ListItemIcon>
                      <WorkIcon fontSize="small" sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('work_performance')} />
                  </ListItemButton>
                </List>
              </Collapse>
              <Divider />
            </>
          )}
          {role === roles.Worker && (
            <>
              <ListItemButton style={{ backgroundColor: colors.reports }} component={Link} to="/reports" onClick={() => handleClick("reports")} className={classes.button}>
                <ListItemIcon>
                  <ErrorOutlineIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('reports')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Admin && (
            <>
              <ListItemButton component={Link} to="/userList" >
                <ListItemIcon>
                  <GroupsIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('User List')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Admin && (
            <>
              <ListItemButton component={Link} to="/createUser" >
                <ListItemIcon>
                  <PersonAdd sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('Create User')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Admin && (
            <>
              <ListItemButton component={Link} to="/topics" >
                <ListItemIcon>
                  <GroupsIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('topic_navigate')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Admin && (
            <>
              <ListItemButton component={Link} to="/responsibilities" onClick={() => handleClick("feedback")}>
                <ListItemIcon>
                  <AssignmentIndOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('responsibility_navigate')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          <ListItemButton component={Link} to="/home">
            <img src={Sisainenlinkki} style={{ width: '30px', marginRight: 10 }}></img>
            <ListItemText style={{ textTransform: 'uppercase' }} primary={t('home')} />
          </ListItemButton>
          <ListItemButton component={Link} to="/databank/lifeline">
            <img src={Sisainenlinkki} style={{ width: '30px', marginRight: 10 }}></img>
            <ListItemText style={{ textTransform: 'uppercase' }} primary={t('databank')} />
          </ListItemButton>
          <ListItemButton>
            <ExitToAppIcon style={{ textTransform: 'uppercase', marginRight: 10, width: '30px' }} />
            <ListItemText primary={t('logout')} />
          </ListItemButton>
        </List>
      </div>
      <ListItem className="drawer-logout" onClick={() => dispatch(logout())}>
        <Divider />
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
  button: {
    marginBottom: '5px',
    border: '3px solid #F47D20',
    borderRadius: '5rem',
  },
  buttonText: {
    marginLeft: '-20px',
  },
}))

ResponsiveDrawer.defaultProps = {
  isOpen: true,
}

export default ResponsiveDrawer
