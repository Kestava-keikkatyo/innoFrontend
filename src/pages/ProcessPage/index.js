import React from 'react'

import ProcessPage from './ProcessPage'

import {
  Container,
} from '@material-ui/core'

const HomeProcess = () => {

  return (
    <Container maxWidth="md" disableGutters>
      <ProcessPage></ProcessPage>
    </Container>
  )
}

export default HomeProcess