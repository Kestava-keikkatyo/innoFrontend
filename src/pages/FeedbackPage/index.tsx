import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'
import SendFeedback from './SendFeedback'
import Feedbacks from './Feedbacks'
import { useTranslation } from 'react-i18next'
import { useHistory, useLocation } from 'react-router-dom'

interface TabPanelProps {
  children?: React.ReactNode
  index: string
  value: string
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            padding: {
              xs: '20px 0px',
              sm: '40px 20px',
            },
          }}
        >
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

function getQueryParam(search: string, paramName: string): string | null {
  return new URLSearchParams(search).get(paramName)
}

const FeedbackPage: React.FC = () => {
  const { t } = useTranslation()
  const history = useHistory()

  useLocation()

  const handleChange = (_event: React.SyntheticEvent<Element, Event>, newValue: string) => {
    history.push({
      pathname: history.location.pathname,
      search: '?' + new URLSearchParams({ tab: newValue }).toString(),
    })
  }

  const value = getQueryParam(history.location.search, 'tab') || 'send'

  return (
    <Container style={{ marginTop: '100px' }}>
      <AppBar position='static' color='transparent'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='secondary'
          variant='fullWidth'
          aria-label='full width tabs example'
        >
          <Tab label={t('send_new_feedback')} value='send' {...a11yProps(0)} />
          <Tab label={t('your_feedbacks')} value='my' {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index='send'>
        <SendFeedback />
      </TabPanel>
      <TabPanel value={value} index='my'>
        <Feedbacks />
      </TabPanel>
    </Container>
  )
}

export default FeedbackPage
