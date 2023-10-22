import makeStyles from '@mui/styles/makeStyles'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { ExpandLess, ExpandMore, OpenInNew, PersonAdd, Security } from '@mui/icons-material'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import MoodIcon from '@mui/icons-material/Mood'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import GroupsIcon from '@mui/icons-material/Group'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined'
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined'
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined'
import PersonIcon from '@mui/icons-material/Person'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import TaskIcon from '@mui/icons-material/Task'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import WorkIcon from '@mui/icons-material/Work'
import AbcIcon from '@mui/icons-material/Abc'
import Sisainenlinkki from '../../assets/icons/sisainenlinkki.svg'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { roles } from '../../types/types'
import { IRootState } from '../../utils/store'
import { useTranslation } from 'react-i18next'
import {
  IconButton,
  useMediaQuery,
  useTheme,
  ListItemButton,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material'

/**
 * @component
 * @desc A component which renders the drawer on the left side of application.
 * There is actually two drawers which are rendered at different time.
 * One for mobile view one for web view.
 */
const ResponsiveDrawer: React.FC<{
  sideMenuState: boolean
  setSideMenuOpen: Dispatch<SetStateAction<boolean>>
}> = ({ sideMenuState, setSideMenuOpen }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const { data } = useSelector((state: IRootState) => state.user)
  const role = data.role
  const { pathname } = useLocation()
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  // Make selected button correspond with current path. Fixes colors on reload
  useEffect(() => {
    // remove dash from pathname with slice
    setSelected(pathname.slice(1))
  }, [pathname])

  const [selected, setSelected] = useState<string>('home')

  const iconColor = {
    base: '#000',
    done: '#0F0',
    undone: '#F00',
  }

  const [openNest, setOpenNest] = useState(false)

  const handleOpenNest = () => {
    setOpenNest(!openNest)
    setSelected('rentalWorkModel')
  }

  return (
    <nav
      style={{
        zIndex: 1200,
        margin: '120px 20px 0 20px',
        width: isMatch ? 'auto' : '20rem',
      }}
    >
      <div style={{ display: 'flex', backgroundColor: '#FDFDFD' }}>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={() => setSideMenuOpen(!sideMenuState)}
          size='large'
        >
          <MenuIcon style={{ color: 'black' }} />
        </IconButton>
        <h3
          style={{
            color: 'black',
            textTransform: 'uppercase',
            padding: '5px',
            fontWeight: 'bold',
          }}
        >
          {data.role === 'worker' && t('workerFrontpage')}
          {data.role === 'agency' && t('agencyFrontpage')}
          {data.role === 'business' && t('businessFrontpage')}
        </h3>
      </div>
      <div style={{ display: sideMenuState ? 'block' : 'none' }}>
        <List className='overflow-container'>
          <ListItemButton
            style={{
              marginTop: '1em',
              backgroundColor: selected === 'home' ? '#F47D20' : '#FDFDFD',
            }}
            className={classes.button}
            component={Link}
            to='/home'
          >
            <ListItemIcon>
              <HomeOutlinedIcon sx={{ color: iconColor.base }} />
            </ListItemIcon>
            <ListItemText className={classes.buttonText} primary={t('home')} />
          </ListItemButton>

          <ListItemButton
            style={{ backgroundColor: selected === 'reports' ? '#F47D20' : '#FDFDFD' }}
            onClick={() => setSelected('reports')}
            component={Link}
            to='/reports'
            className={classes.button}
          >
            <ListItemIcon>
              <ErrorOutlineIcon sx={{ color: iconColor.base }} />
            </ListItemIcon>
            <ListItemText className={classes.buttonText} primary={t('reports')} />
          </ListItemButton>

          {(role === roles.Agency || role === roles.Business) && (
            <>
              <ListItemButton
                style={{
                  backgroundColor: selected === 'receivedFeedbacks' ? '#F47D20' : '#FDFDFD',
                }}
                onClick={() => setSelected('receivedFeedbacks')}
                component={Link}
                to='/receivedFeedbacks'
                className={classes.button}
              >
                <ListItemIcon>
                  <MoodIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('feedback')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItemButton
                style={{
                  backgroundColor: selected === 'agencyResponsibilities' ? '#F47D20' : '#FDFDFD',
                }}
                onClick={() => setSelected('agencyResponsibilities')}
                component={Link}
                to='/agencyResponsibilities'
                className={classes.button}
              >
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
              <ListItemButton
                style={{ backgroundColor: selected === 'companyMaterial' ? '#F47D20' : '#FDFDFD' }}
                onClick={() => setSelected('companyMaterial')}
                component={Link}
                to='/companyMaterial'
                className={classes.button}
              >
                <ListItemIcon>
                  <InsertDriveFileOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('materials')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItemButton
                style={{ backgroundColor: selected === 'inviteCodes' ? '#F47D20' : '#FDFDFD' }}
                onClick={() => setSelected('inviteCodes')}
                component={Link}
                to='/inviteCodes'
                className={classes.button}
              >
                <ListItemIcon>
                  <AbcIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('inviteCodes')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItemButton
                style={{ backgroundColor: selected === 'agencyContracts' ? '#F47D20' : '#FDFDFD' }}
                onClick={() => setSelected('agencyContracts')}
                component={Link}
                to='/agencyContracts'
                className={classes.button}
              >
                <ListItemIcon>
                  <ContactMailIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('Connections')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItemButton
                style={{ backgroundColor: selected === 'agencyWorkers' ? '#F47D20' : '#FDFDFD' }}
                onClick={() => setSelected('agencyWorkers')}
                component={Link}
                to='/agencyWorkers'
                className={classes.button}
              >
                <ListItemIcon>
                  <PersonIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('employees')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Business && (
            <>
              <ListItemButton
                style={{ backgroundColor: selected === 'workers' ? '#F47D20' : '#FDFDFD' }}
                onClick={() => setSelected('workers')}
                component={Link}
                to='/workers'
                className={classes.button}
              >
                <ListItemIcon>
                  <PersonIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('employees')} />
              </ListItemButton>
            </>
          )}
          {(role === roles.Business || role === roles.Worker) && (
            <>
              <ListItemButton
                style={{ backgroundColor: selected === 'userContracts' ? '#F47D20' : '#FDFDFD' }}
                onClick={() => setSelected('userContracts')}
                component={Link}
                to='/userContracts'
                className={classes.button}
              >
                <ListItemIcon>
                  <ContactMailIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('Contracts')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Agency && (
            <>
              <ListItemButton
                style={{ backgroundColor: selected === 'businesses' ? '#F47D20' : '#FDFDFD' }}
                onClick={() => setSelected('businesses')}
                component={Link}
                to='/businesses'
                className={classes.button}
              >
                <ListItemIcon>
                  <GroupOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('BusinessCompanies')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Business && (
            <>
              <ListItemButton
                style={{
                  backgroundColor: selected === 'businessResponsibilities' ? '#F47D20' : '#FDFDFD',
                }}
                onClick={() => setSelected('businessResponsibilities')}
                component={Link}
                to='/businessResponsibilities'
                className={classes.button}
              >
                <ListItemIcon>
                  <AccessibilityOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('responsibilities')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Business && (
            <>
              <ListItemButton
                style={{ backgroundColor: selected === 'companyMaterial' ? '#F47D20' : '#FDFDFD' }}
                onClick={() => setSelected('companyMaterial')}
                component={Link}
                to='/companyMaterial'
                className={classes.button}
              >
                <ListItemIcon>
                  <InsertDriveFileOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('materials')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Business && (
            <>
              <ListItemButton
                style={{ backgroundColor: selected === 'agencies' ? '#F47D20' : '#FDFDFD' }}
                onClick={() => setSelected('agencies')}
                component={Link}
                to='/agencies'
                className={classes.button}
              >
                <ListItemIcon>
                  <GroupOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('list_title_agencies')} />
              </ListItemButton>
            </>
          )}
          {(role === roles.Business || role === roles.Agency) && (
            <>
              <ListItemButton
                style={{ backgroundColor: selected === 'rentalWorkModel' ? '#F47D20' : '#FDFDFD' }}
                onClick={handleOpenNest}
                className={classes.button}
              >
                <ListItemIcon>
                  <SupervisedUserCircleIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('rental_work_model')} />
                {openNest ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openNest} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  <ListItemButton sx={{ pl: 4 }} component={Link} to='/rentalWorkModel'>
                    <ListItemIcon>
                      <SupervisorAccountIcon fontSize='small' sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('overview')} />
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: 4 }}
                    component={Link}
                    to='/rentalWorkModel/customerContract'
                  >
                    <ListItemIcon>
                      <ListAltIcon fontSize='small' sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('customer_contract')} />
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: 4 }}
                    component={Link}
                    to='/rentalWorkModel/orderingEmployee'
                  >
                    <ListItemIcon>
                      <PersonAddAlt1Icon fontSize='small' sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('worker_order')} />
                  </ListItemButton>

                  <ListItemButton
                    style={{}}
                    sx={{ pl: 4 }}
                    onClick={() => setSelected('businesses')}
                    component={Link}
                    to='/rentalWorkModel/contractOfEmployment'
                  >
                    <ListItemIcon>
                      <TaskIcon fontSize='small' sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText
                      className={classes.buttonText}
                      primary={t('list_title_businesses')}
                    />
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: 4 }}
                    component={Link}
                    to='/rentalWorkModel/guidanceToWork'
                  >
                    <ListItemIcon>
                      <HowToRegIcon fontSize='small' sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('guidance_to_work')} />
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: 4 }}
                    component={Link}
                    to='/rentalWorkModel/workPerformance'
                  >
                    <ListItemIcon>
                      <WorkIcon fontSize='small' sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('work_performance')} />
                  </ListItemButton>
                </List>
              </Collapse>
            </>
          )}
          {(role === roles.Business || role === roles.Agency) && (
            <>
              <ListItemButton
                component='a'
                href='/databank/lifeline'
                target='_blank'
                className={classes.button}
              >
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
              <ListItemButton component={Link} to='/receivedWorkRequests' disabled>
                <ListItemIcon>
                  <WorkOutlineIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('work_request')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Business && (
            <>
              <ListItemButton component={Link} to='/workRequests' disabled>
                <ListItemIcon>
                  <AssignmentOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('Work_request')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Worker && (
            <>
              <ListItemButton
                style={{ backgroundColor: selected === 'feedback' ? '#F47D20' : '#FDFDFD' }}
                onClick={() => setSelected('feedback')}
                component={Link}
                to='/feedback'
                className={classes.button}
              >
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
              <ListItemButton
                style={{ backgroundColor: selected === 'companyMaterial' ? '#F47D20' : '#FDFDFD' }}
                onClick={() => setSelected('companyMaterial')}
                component={Link}
                to='/companyMaterial'
                className={classes.button}
              >
                <ListItemIcon>
                  <InsertDriveFileOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('materials')} />
              </ListItemButton>
            </>
          )}
          {role === roles.Worker && (
            <>
              <ListItemButton
                style={{
                  backgroundColor: selected === 'workerResponsibilities' ? '#F47D20' : '#FDFDFD',
                }}
                onClick={() => setSelected('workerResponsibilities')}
                component={Link}
                to='/workerResponsibilities'
                className={classes.button}
              >
                <ListItemIcon>
                  <AccessibilityOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('responsibilities')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Worker && (
            <>
              <ListItemButton
                style={{ backgroundColor: selected === 'rentalWorkModel' ? '#F47D20' : '#FDFDFD' }}
                onClick={handleOpenNest}
                className={classes.button}
              >
                <ListItemIcon>
                  <SupervisedUserCircleIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('rental_work_model')} />
                {openNest ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openNest} timeout='auto' unmountOnExit>
                <List component='div' disablePadding>
                  <ListItemButton sx={{ pl: 4 }} component={Link} to='/rentalWorkModel'>
                    <ListItemIcon>
                      <SupervisorAccountIcon fontSize='small' sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('overview')} />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    component={Link}
                    to='/rentalWorkModel/contractOfEmployment'
                  >
                    <ListItemIcon>
                      <TaskIcon fontSize='small' sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText
                      className={classes.buttonText}
                      primary={t('contract_of_employment')}
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    component={Link}
                    to='/rentalWorkModel/guidanceToWork'
                  >
                    <ListItemIcon>
                      <HowToRegIcon fontSize='small' sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('guidance_to_work')} />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    component={Link}
                    to='/rentalWorkModel/workPerformance'
                  >
                    <ListItemIcon>
                      <WorkIcon fontSize='small' sx={{ color: iconColor.base }} />
                    </ListItemIcon>
                    <ListItemText className={classes.buttonText} primary={t('work_performance')} />
                  </ListItemButton>
                </List>
              </Collapse>
              <Divider />
            </>
          )}
          {role === roles.Admin && (
            <>
              <ListItemButton component={Link} to='/userList'>
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
              <ListItemButton component={Link} to='/createUser'>
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
              <ListItemButton component={Link} to='/topics'>
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
              <ListItemButton component={Link} to='/responsibilities'>
                <ListItemIcon>
                  <AssignmentIndOutlinedIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText
                  className={classes.buttonText}
                  primary={t('responsibility_navigate')}
                />
              </ListItemButton>
              <Divider />
            </>
          )}
          {role === roles.Worker && (
            <>
              <ListItemButton
                style={{ backgroundColor: selected === 'schedule' ? '#F47D20' : '#FDFDFD' }}
                onClick={() => setSelected('schedule')}
                component={Link}
                to='/schedule'
                className={classes.button}
              >
                <ListItemIcon>
                  <CalendarTodayIcon sx={{ color: iconColor.base }} />
                </ListItemIcon>
                <ListItemText className={classes.buttonText} primary={t('schedule')} />
              </ListItemButton>
              <Divider />
            </>
          )}
          <ListItemButton component={Link} to='/home'>
            <img src={Sisainenlinkki} style={{ width: '30px', marginRight: 10 }}></img>
            <ListItemText style={{ textTransform: 'uppercase' }} primary={t('home')} />
          </ListItemButton>
          <ListItemButton component={Link} to='/databank/lifeline'>
            <img src={Sisainenlinkki} style={{ width: '30px', marginRight: 10 }}></img>
            <ListItemText style={{ textTransform: 'uppercase' }} primary={t('databank')} />
          </ListItemButton>
          <ListItemButton>
            <ExitToAppIcon style={{ textTransform: 'uppercase', marginRight: 10, width: '30px' }} />
            <ListItemText primary={t('logout')} />
          </ListItemButton>
        </List>
        <ListItem className='drawer-logout' onClick={() => dispatch(logout())}>
          <Divider />
        </ListItem>
      </div>
    </nav>
  )
}

const useStyles = makeStyles((theme) => ({
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

export default ResponsiveDrawer
