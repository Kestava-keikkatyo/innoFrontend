import React from 'react';

import vastuualueet from '../../assets/tietopankki/vastuualueet.json';
import {
  List,
  CardContent,
  ListItem,
  ListItemText,
  Divider,
  CardHeader,
  Button,
  Grid,
  CardActions,
  TextField,
  CircularProgress,
  Fade,
  makeStyles,
} from '@material-ui/core'
import MoodForm from './MoodForm'
import Spacing from '../../components/Spacing'
import SendIcon from '@material-ui/icons/Send'
import {submitFeeling, updateFeeling} from '../../actions/feelingActions'
import { useDispatch, useSelector } from 'react-redux'

import { IRootState } from '../../utils/store'
import { postFeedBack } from '../../actions/feedBackActions'
import { useEffect } from 'react'
import fileService from '../../services/fileService';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#eb5a00",
    "&:disabled": {
      backgroundColor: "#ebc800"
    },
    color: "white"
  }
}))

const WorkerHome = () => {
  const dispatch = useDispatch();

  const classes = useStyles()

  const currentFeeling: any = useSelector<IRootState>(
    (state) => state.feeling.currentFeeling
  );

  let currentFile: any = useSelector<IRootState>(
    (state) => state.file.currentFile
  );

  const onHandleSubmit = async () => {
    console.log('### 1 currentFeeling:', currentFeeling);
    console.log('### currentFile:', currentFile.file);
    if (currentFile.file !== null) {
      const res: any = await fileService.postFile(currentFile);
      const copyOfCurrentFeeling = {
        ...currentFeeling,
        fileUrl: res.data?.fileUrl,
      };

      dispatch(updateFeeling(copyOfCurrentFeeling));
      dispatch(submitFeeling(copyOfCurrentFeeling));
    } else {
      dispatch(updateFeeling(currentFeeling));
      dispatch(submitFeeling(currentFeeling));
    }
  }
  const { feedBackSaved } = useSelector((state: IRootState) => state.feedback)

  const [loading, setLoading] = React.useState(false)

  const [isSent, setSent] = React.useState(false)

  const [message, setMessage] = React.useState("")

  const handleClickLoading = () => {
    if (message.length > 0) {
      setLoading((prevLoading) => !prevLoading)
      dispatch(postFeedBack(message))
    } else {
      console.log(message.length)
    }
  }

  useEffect(() => {
    if (feedBackSaved) {
      setLoading((prevLoading) => !prevLoading) 
      setSent(true)
    }
  },[dispatch, feedBackSaved])


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
      <Grid item xs={12} md={6}>
        <div className="report-container">
          <CardHeader
            title="Anna palautetta"
            subheader="Palaute lomake">
          </CardHeader>
          <CardContent>
            <form noValidate autoComplete="off">
              <div>
                <TextField
                  id="standard-multiline-static"
                  label={isSent ? "Palaute lähetetty" : "Kirjoita palaute tähän:"}
                  onChange={(e) => setMessage(e. target. value)}
                  multiline
                  rows={4}
                />
              </div>
            </form>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              disabled={loading}
              className={classes.button}
              onClick={handleClickLoading}
              endIcon={loading ? <Fade
                in={loading}
                unmountOnExit
              >
                <CircularProgress />
              </Fade> : <SendIcon/>}
            >
              {loading ? 'Lähetetään lomaketta...' : 'Lähetä'}
            </Button>
          </CardActions>
        </div>
      </Grid>
    </Grid>
  );
};

export default WorkerHome;
