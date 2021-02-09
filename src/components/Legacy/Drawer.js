import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { logout } from '../../actions/userActions'
import Role from '../../utils/role'

import {
  Divider,
  Drawer as MUIDrawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core'
import {
  ChevronLeft,
  Home,
  ExitToApp,
  AccountCircle,
  PeopleAlt,
  Contacts
} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
}))

/**
 * Drawer component. Works as a sidebar for the whole page.
 * @exports components/Drawer
 * @param {Object} props
 * @param {boolean} props.open - If true drawer is displayed (open), otherwise drawer is closed
 * @param {function} props.handleDrawer - [Function]{@link module:App~handleDrawer}
 * for opening and closing this component (drawer)
 * @param {boolean} [props.loggedIn] - If true user is logged into app
 * @param {string} [props.role] - User's current role.
 * @example
 * const [open, setOpen] = useState(false)
 * <Drawer open={ open } handleDrawer={ () => setOpen(prevOpen => !prevOpen)) } loggedIn={...} role={...} />
 */
const Drawer = ({ open, handleDrawer, loggedIn, role }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  return (
    <MUIDrawer
      anchor="left"
      variant="temporary"
      onBackdropClick={handleDrawer}
      onEscapeKeyDown={handleDrawer}
      open={open}>
      <div className={classes.drawer}>
        <div>
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawer}>
              <ChevronLeft />
            </IconButton>
          </div>
          <div onClick={handleDrawer}>
            <Divider />
            <List disablePadding>
              <ListItem button component={Link} to="/home">
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText primary={t('home')} />
              </ListItem>
              <ListItem button component={Link} to="/fiilismittari">
                <ListItemIcon><Home /></ListItemIcon>
                <ListItemText primary={t('home')} />
              </ListItem>
              {loggedIn &&
                <ListItem button component={Link} to="/profile">
                  <ListItemIcon><AccountCircle /></ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItem>
              }
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
            </List>
          </div>
        </div>
        <div onClick={handleDrawer}>
          <Divider />
          {loggedIn ?
            <ListItem button onClick={() => dispatch(logout())}>
              <ListItemIcon><ExitToApp /></ListItemIcon>
              <ListItemText primary={t('logout')} />
            </ListItem> :
            <ListItem button component={Link} to="/">
              <ListItemIcon><ExitToApp /></ListItemIcon>
              <ListItemText primary={t('log_in')} secondary={t('sign_up')} />
            </ListItem>
          }
        </div>
      </div>
    </MUIDrawer>
  )
}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawer: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool,
  role: PropTypes.string
}

export default Drawer