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
  makeStyles,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary
} from '@material-ui/core'
import MoodForm from './MoodForm'
import Spacing from '../../components/Spacing'
import SendIcon from '@material-ui/icons/Send'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { submitFeeling, updateFeeling } from '../../actions/feelingActions'
import { useDispatch, useSelector } from 'react-redux'
import ReplayIcon from '@material-ui/icons/Replay';
import { IRootState } from '../../utils/store'
import { getUserFeedBacks, postFeedBack } from '../../actions/feedBackActions'
import { useEffect } from 'react'
import fileService from '../../services/fileService';
import { RESET_FEEDBACK } from '../../types/state';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#eb5a00",
    "&:disabled": {
      backgroundColor: "#ebc800"
    },
    color: "white"
  },
  sendingDiv: {
    textAlign: "center"
  },
  accordion: {
    display: "contents"
  },
  feedBackTextWaiting: {
    color: "#ac9100"
  },
  feedBackTextDone: {
    color: "green"
  },
  dividerWithMargin: {
    marginTop: "5px",
    marginBottom: "5px"
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
  let { feedBackSaved } = useSelector((state: IRootState) => state.feedback)

  const { myFeedBacks } = useSelector((state: IRootState) => state.feedback)

  const [loading, setLoading] = React.useState(false)

  const [isSent, setSent] = React.useState(false)

  const [message, setMessage] = React.useState("")

  const [heading, setHeading] = React.useState("")

  const [helperText, setHelperText] = React.useState("")

  const handleClickLoading = () => {
    if (message.length > 0 && heading.length > 0) {
      setLoading((prevLoading) => !prevLoading)
      dispatch(postFeedBack(message, heading))
    } else {
      setHelperText("Tarkista että kentät on täytetty!")
    }
  }

  const handleClearTextField = () => {
    setMessage("")
    setHeading("")
  }

  useEffect(() => {
    if (feedBackSaved) {
      setLoading((prevLoading) => !prevLoading)
      setSent(true)
      dispatch({ type: RESET_FEEDBACK })
    }
    dispatch(getUserFeedBacks())
  }, [dispatch, feedBackSaved])

  return (
    <Grid container>
      <Grid item xs={12} md={6} style={{marginBottom: '3%'}}>
          <MoodForm handleSubmit={onHandleSubmit} />
      </Grid>
      <Grid item xs={12} md={6} style={{marginBottom: '3%'}}>
        <div className="report-container" style={{height: '100%'}}>
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
      <Grid item xs={12} md={6} style={{marginBottom: '5%'}}>
        <div className="report-container" style={{height: '100%'}}>
          <CardHeader
            title="Anna palautetta"
            subheader="Palaute lomake">
          </CardHeader>
          <CardContent>
            <form noValidate autoComplete="off" hidden={loading}>
              <div>
                <TextField
                  value={heading}
                  label={"Otsikko"}
                  onChange={(e) => setHeading(e.target.value)}
                />
                <TextField
                  id="standard-multiline-static"
                  value={message}
                  helperText={helperText}
                  label={isSent ? "Palaute lähetetty" : "Kirjoita palaute tähän:"}
                  onChange={(e) => setMessage(e.target.value)}
                  multiline
                  rows={4}
                />
              </div>
            </form>
            <div hidden={!loading} className={classes.sendingDiv}>
              <Typography>Lähetetään</Typography>
              <CircularProgress />
            </div>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              endIcon={<ReplayIcon />}
              onClick={handleClearTextField}
            >
              Tyhjennä
            </Button>
            <Button
              variant="contained"
              disabled={loading}
              className={classes.button}
              onClick={handleClickLoading}
              endIcon={<SendIcon />}
            >
              Lähetä
            </Button>
          </CardActions>
        </div>
      </Grid>
      <Grid item xs={12} md={6} style={{marginBottom: '5%'}}>
        <div className="report-container" style={{ height: '100%' }}>
          <CardHeader
            title="Omat palautteet">
          </CardHeader>
          <CardContent>
            {myFeedBacks && myFeedBacks.length > 0 ? myFeedBacks.map((feedback: { message: string, heading: string, reply: string }) => (
              <Accordion>
                <AccordionSummary
                  style={{ display: "flex" }}
                  classes={{ content: classes.accordion }}
                  expandIcon={<ExpandMoreIcon />}>
                  <div style={{ width: "50%", flex: 'auto'}}>
                    <Typography style={{ wordWrap: "break-word" }}>{feedback.heading}</Typography>
                  </div>
                  <div style={{ flex: 'auto'}}>
                    <Typography className={feedback.reply ? classes.feedBackTextDone : classes.feedBackTextWaiting}>
                      {feedback.reply ? "Vastattu" : "Odottaa"}
                    </Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails style={{ display: "block" }}>
                  <Divider className={classes.dividerWithMargin}/>
                  <Typography>
                    Viesti:
                  </Typography>
                  <Typography style={{ wordWrap: "break-word", width: '100%' }}>
                    {feedback.message}
                  </Typography>
                  <Divider className={classes.dividerWithMargin}/>
                  {feedback.reply ? <><Typography>Vastaus:</Typography><Typography style={{ wordWrap: "break-word", width: '100%' }}>{feedback.reply}</Typography></> : <></>}
                </AccordionDetails>
              </Accordion>
            )) : <Typography>Ei palautteita</Typography>}
          </CardContent>
          <CardActions>

          </CardActions>
        </div>
      </Grid>
    </Grid>
  );
};

export default WorkerHome;
