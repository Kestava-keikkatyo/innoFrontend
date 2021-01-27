import React, { useState } from 'react'

import { Container, Typography, Button } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const FormsHome = () => {
  const useStyles = makeStyles({
    clickableIcon: {
      color: 'black',
      '&:hover': {
        color: 'blue',
      },
      width: 60,
      height: 60,
    },
    textAlignAssignment: {
      width: '5px',
      height: '15px',
      textAlign: 'center',
    },
    alignItemsAndJustifyContent: {
      width: '100%',
      padding: '30px',
      margin: '20px',
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  const classes = useStyles()

  const [state, setState] = useState({ forms: [{}] })
  const newForm = () => {
    console.log(state.forms)
    alert('klik')
    setState(state.forms.push())
  }
  return (
    <>
      <Container maxWidth="md" disableGutters>
        <Typography>
          <Button className={classes.clickableIcon} onClick={newForm}>
            Uusi
          </Button>
        </Typography>
      </Container>
    </>
  )
}

export default FormsHome
