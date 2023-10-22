import React, { ReactNode, useState } from 'react'
import TopAppBar from './TopAppBarType'
import ResponsiveDrawer from './ResponsiveDrawer'
import Footer from '../../pages/LandingPage/Footer'
import { Divider, useMediaQuery, useTheme } from '@mui/material'

/**
 * @component
 * @desc Parent component of Navigation. Includes Drawer
 * and navigation bar on top of the app.
 * @param {ReactNode} props.children A page component.
 */
const AppNavigation: React.FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  const [openSideMenu, setOpenSideMenu] = useState(true)

  const contentStyle = {
    display: 'flex',
    backgroundColor: '#FDFDFD',
    marginTop: !isMatch && openSideMenu ? '150px' : 0,
    justifyContent: 'space-between',
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMatch || !openSideMenu ? 'column' : 'row',
      }}
    >
      <TopAppBar />
      <ResponsiveDrawer sideMenuState={openSideMenu} setSideMenuOpen={setOpenSideMenu} />
      <Divider flexItem orientation='vertical' style={{ width: '5%', borderColor: '#FDFDFD' }} />
      <div style={{ ...contentStyle, flexDirection: 'column' }}>
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default AppNavigation
