import React from 'react'

import vastuualueet from '../../assets/tietopankki/vastuualueet.json'
import {
  List,
  CardContent,
  ListItem,
  ListItemText,
  Divider,
  CardHeader,
  Button,
  Grid,
} from '@material-ui/core'
import MoodForm from './MoodForm'
import Spacing from '../../components/Spacing'

import {submitFeeling} from '../../actions/feelingActions'
import {submitFile} from '../../actions/fileActions'
import { useDispatch, useSelector } from 'react-redux'

import { IRootState } from '../../utils/store'


const WorkerHome = () => {

  const dispatch = useDispatch()

  const currentFeeling:any = useSelector<IRootState>(state => state.feeling.currentFeeling)

  let currentFile:any = useSelector<IRootState>(state => state.file.currentFile)

  const onHandleSubmit = () => {
    console.log("### currentFeeling:", currentFeeling)
    console.log("### currentFile:", currentFile)
    dispatch(submitFile(currentFile))
    dispatch(submitFeeling(currentFeeling))
    console.log("### currentFeeling submitted")

  }

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Spacing mr5>
          <MoodForm handleSubmit={onHandleSubmit} />
        </Spacing>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="report-container">
          <CardHeader
            action={
              <Button variant="outlined" color="primary">
                Lue lisää
              </Button>
            }
            title="Vastuualue"
            subheader="Vuokrayritys"
          />
          <CardContent>
            <List component="nav" aria-label="mailbox folders">
              <Divider />
              {vastuualueet.worker.map((e, i) => (
                <ListItem key={i} divider>
                  <ListItemText primary={`${i + 1}. ${e.tip}`} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </div>
      </Grid>
    </Grid>
  )
}

export default WorkerHome
