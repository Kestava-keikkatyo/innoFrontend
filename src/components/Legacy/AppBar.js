import React from 'react'
import PropTypes from 'prop-types'
import i18n, { getCurrentLocale } from '../../i18nextInit'

import {
  AppBar as MUIAppBar,
  IconButton,
  Toolbar,
  makeStyles,
  Button,
  Menu,
  MenuItem
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Translate as TranslateIcon,
  ExpandMore as ExpandMoreIcon
} from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1,
  }
}))

/**
 * AppBar component, works as header for the whole page.
 * @exports components/AppBar
 * @param {Object} props
 * @param {function} props.handleDrawer - [Function]{@link module:App~handleDrawer}
 * for opening and closing a [drawer component]{@link module:components/Drawer}
 * @example
 * <AppBar handleDrawer={...} />
 */
const AppBar = ({ handleDrawer }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setAnchorEl(null)
  }

  return (
    <MUIAppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open menu"
          edge="start"
          onClick={handleDrawer}>
          <MenuIcon />
        </IconButton>
        <div className={classes.grow} />
        <Button
          color="inherit"
          startIcon={<TranslateIcon />}
          endIcon={<ExpandMoreIcon />}
          onClick={(event) => setAnchorEl(event.currentTarget)}>
          {getCurrentLocale()}
        </Button>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}>
          <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
          <MenuItem onClick={() => changeLanguage('fi')}>Suomi</MenuItem>
        </Menu>
      </Toolbar>
    </MUIAppBar>
  )
}

AppBar.propTypes = {
  handleDrawer: PropTypes.func.isRequired
}

export default AppBar