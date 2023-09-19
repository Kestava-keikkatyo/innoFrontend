import React, { useEffect } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { IRootState } from '../../utils/store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTopics } from '../../actions/topicActions'

const Information = () => {
  const dispatch = useDispatch()

  const { topics } = useSelector((state: IRootState) => state.topic || [])

  useEffect(() => {
    dispatch(fetchAllTopics())
  }, [dispatch])

  const classes = useStyles()

  return (
    <Grid>
      <Card>
        <Typography color='primary' align='center' variant='h5'>
          {'General information'}
        </Typography>
        <CardContent>
          {topics.map((topic) => (
            <Accordion key={topic._id} className={classes.information} variant='outlined'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography className={classes.text}>{`${topic.question}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>{`${topic.answer}`}</AccordionDetails>
            </Accordion>
          ))}
        </CardContent>
      </Card>
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  information: {
    margin: theme.spacing(0.5, 0),
  },
  accordion: {
    width: '100%',
    marginTop: 12,
    border: '1px solid #E0E0E0',
    borderRadius: 5,
  },
  text: {
    color: '#000000DE',
  },
}))

export default Information
