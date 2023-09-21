import { Stack, ListItem, Divider, ListItemIcon, Button, Box, ListItemText } from '@mui/material'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import DoneRoundedIcon from '@mui/icons-material/DoneRounded'
import React, { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import makeStyles from '@mui/styles/makeStyles'

function InteractiveListComponent(props: any) {
  const { t } = useTranslation()
  const goodPracticeArray = props.arrayName
  const classes = useStyles()
  const [buttonText, setButtonText] = useState(t('checkAll'))
  const [style, setStyle] = useState(classes.buttonNotClicked)
  const [checked, notChecked] = useState(true)

  const handleClick = () => {
    setButtonText(t('readAndUnderstood'))
    setStyle(classes.buttonClicked)
    notChecked(false)
  }

  return (
    <Trans>
      <Stack divider={<Divider orientation='horizontal' variant='inset' />} margin='20px'>
        {goodPracticeArray.map((practice: any, index: number) => {
          return (
            <ListItem key={index} className={classes.list}>
              <ListItemIcon>
                {checked ? (
                  <CircleOutlinedIcon className={style} fontSize='small' />
                ) : (
                  <DoneRoundedIcon className={style} fontSize='small' />
                )}
              </ListItemIcon>
              <ListItemText primary={practice} />
            </ListItem>
          )
        })}
      </Stack>
      <Box className={classes.buttonBoxCenter}>
        <Button className={style} size='small' onClick={handleClick}>
          {buttonText}
        </Button>
      </Box>
    </Trans>
  )
}

const useStyles = makeStyles((theme) => ({
  buttonBoxCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonNotClicked: {
    color: '#1976D5',
  },
  buttonClicked: {
    color: 'green',
  },
  list: {
    display: 'flex',
    alignItems: 'center',
  },
}))

export default InteractiveListComponent
