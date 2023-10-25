import React, { ReactNode, useState } from 'react'
import TopAppBar from './TopAppBarType'
import ResponsiveDrawer from './ResponsiveDrawer'
import Footer from '../Footer'
import { Container, useMediaQuery, useTheme } from '@mui/material'

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
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FDFDFD',
    marginTop: !isMatch && openSideMenu ? '150px' : 0,
  }

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: 'flex',
          height: '100%',
          flexDirection: isMatch || !openSideMenu ? 'column' : 'row',
        }}
      >
        <TopAppBar />
        <ResponsiveDrawer sideMenuState={openSideMenu} setSideMenuOpen={setOpenSideMenu} />
        <div style={{ ...contentStyle, flexDirection: 'column' }}>{children}</div>
      </Container>
      <Footer />
    </Container>
  )
}

export default AppNavigation
