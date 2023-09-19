import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import makeStyles from '@mui/styles/makeStyles'
import { Theme } from '@mui/material/styles'
import { Card, ListItem, ListItemText, Button, Link } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

function ExpandableList(props: any) {
  const { t } = useTranslation()
  const responsibilityArray = props.arrayName
  const index = props.indexNumber
  const responsibilitiesHeader = responsibilityArray[index].header
  const responsibilitieSummary = responsibilityArray[index].summary
  const classes = useStyles()
  const [infoNotShowing, notChecked] = useState(true)

  const handleClick = () => {
    notChecked(!infoNotShowing)
  }

  return (
    <Card className={classes.infoCard} onClick={handleClick}>
      <ListItem>
        <ListItemText primary={responsibilitiesHeader} classes={{ primary: classes.header }} />
        <Button
          sx={{ color: 'black' }}
          size='small'
          startIcon={
            infoNotShowing ? (
              <KeyboardArrowLeftIcon fontSize='small' />
            ) : (
              <KeyboardArrowDownIcon fontSize='small' />
            )
          }
        ></Button>
      </ListItem>
      <div style={{ marginLeft: '20px' }}>
        {infoNotShowing ? (
          <p> </p>
        ) : (
          <>
            <ListItemText primary={responsibilitieSummary} />
            <Link href='/Databank' target='_blank' underline='none'>
              {t('read_more_about_responsibilities')}
            </Link>
          </>
        )}
      </div>
    </Card>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  infoCard: {
    margin: 15,
    padding: 10,
    border: '2px solid #F47D20',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
  },
}))

export default ExpandableList
